import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { useNotificationStore } from "../../lib/notificationStore";

const schema = z.object({
  text: z.string().min(1, "Message cannot be empty"),
});

function Chat({ chats = [], openChatId }) {
  const [chat, setChat] = useState(null);
  const [chatList, setChatList] = useState(chats);

  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const messageEndRef = useRef();

  const decrease = useNotificationStore((state) => state.decrease);
  const increase = useNotificationStore((state) => state.increase);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setChatList(chats);
  }, [chats]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (data) => {
      // update sidebar latest message instantly
      setChatList((prev) =>
        prev.map((c) =>
          String(c.id) === String(data.chatId)
            ? {
              ...c,
              lastMessage: data.text,
              seenBy: [],
            }
            : c
        )
      );

      // if same chat open -> append message live
      if (
        chat &&
        String(chat.id) === String(data.chatId)
      ) {
        setChat((prev) => ({
          ...prev,
          messages: [...prev.messages, data],
        }));

        apiRequest
          .post("/chat/read/" + chat.id)
          .catch(console.log);
      } else {
        // otherwise increase notification
        increase();
      }
    };

    socket.on("getMessage", handleMessage);

    return () => {
      socket.off("getMessage", handleMessage);
    };
  }, [socket, chat]);

  // open chat
  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get("/chat/" + id);

      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }

      setChat({
        ...res.data,
        receiver,
      });

      // mark as read visually
      setChatList((prev) =>
        prev.map((c) =>
          c.id === id
            ? {
              ...c,
              seenBy: [...c.seenBy, currentUser.id],
            }
            : c
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  // auto open chat from SinglePage
  useEffect(() => {
    if (openChatId && chatList.length > 0) {
      const selectedChat = chatList.find(
        (c) => String(c.id) === String(openChatId)
      );

      if (selectedChat) {
        handleOpenChat(
          selectedChat.id,
          selectedChat.receiver
        );
      }
    }
  }, [openChatId, chatList]);

  // send message
  const onSubmit = async (data) => {
    try {
      const res = await apiRequest.post(
        "/message/" + chat.id,
        {
          text: data.text,
        }
      );

      socket?.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: {
          ...res.data,
          chatId: chat.id,
        },
      });

      // update open chat instantly
      setChat((prev) => ({
        ...prev,
        messages: [...prev.messages, res.data],
      }));

      // update sidebar instantly
      setChatList((prev) =>
        prev.map((c) =>
          String(c.id) === String(chat.id)
            ? {
              ...c,
              lastMessage: data.text,
            }
            : c
        )
      );

      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* CHAT LIST */}
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto">
        <h1 className="text-3xl font-light">
          Messages
        </h1>

        {chatList.filter((c) => c.receiver)
          .length === 0 ? (
          <p className="text-gray-400 text-sm">
            No messages yet
          </p>
        ) : (
          chatList
            .filter((c) => c.receiver)
            .map((c) => (
              <div
                key={c.id}
                onClick={() =>
                  handleOpenChat(
                    c.id,
                    c.receiver
                  )
                }
                style={{
                  backgroundColor:
                    c.seenBy.includes(
                      currentUser.id
                    ) || chat?.id === c.id
                      ? "white"
                      : "#fecd514e",
                }}
                className="p-5 rounded-xl flex items-center gap-5 cursor-pointer"
              >
                <img
                  src={
                    c.receiver?.avatar ||
                    "/noavatar.png"
                  }
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex flex-col gap-1">
                  <span className="font-bold">
                    {c.receiver?.username}
                  </span>

                  <p className="text-sm text-gray-500">
                    {c.lastMessage}
                  </p>
                </div>
              </div>
            ))
        )}
      </div>

      {/* OPEN CHAT */}
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between mt-4">
          {/* HEADER */}
          <div className="bg-[#f7c14b85] p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src={
                  chat.receiver?.avatar ||
                  "/noavatar.png"
                }
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />

              <span>
                {chat.receiver?.username}
              </span>
            </div>

            <span
              onClick={() => setChat(null)}
              className="cursor-pointer"
            >
              X
            </span>
          </div>

          {/* MESSAGES */}
          <div className="h-[350px] overflow-y-auto p-5 flex flex-col gap-5">
            {chat.messages?.map((message) => (
              <div
                key={message.id}
                className={`flex ${String(message.userId) ===
                    String(currentUser.id)
                    ? "justify-end"
                    : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[50%] flex flex-col gap-1 ${String(message.userId) ===
                      String(currentUser.id)
                      ? "items-end"
                      : "items-start"
                    }`}
                >
                  <p
                    className={`text-sm px-4 py-2 rounded-2xl ${String(message.userId) ===
                        String(currentUser.id)
                        ? "bg-[#fece51] text-black rounded-br-none"
                        : "bg-gray-100 text-black rounded-bl-none"
                      }`}
                  >
                    {message.text}
                  </p>

                  <span className="text-xs text-gray-400">
                    {format(message.createdAt)}
                  </span>
                </div>
              </div>
            ))}

            <div ref={messageEndRef}></div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border-t-2 border-[#f7c14b85] flex items-center"
          >
            <div className="flex-[3] h-[60px] flex flex-col">
              <textarea
                {...register("text")}
                placeholder="Write a message..."
                className="flex-1 border-none outline-none p-3 resize-none text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              />

              {errors.text && (
                <p className="text-red-500 text-xs px-3">
                  {errors.text.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex-1 h-[60px] bg-[#f7c14b85] border-none cursor-pointer hover:bg-[#f5b92f] transition font-medium"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;