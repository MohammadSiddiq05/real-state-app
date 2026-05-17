import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";

function Chat({ chats = [] }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get("/chat/" + id);
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;
    try {
      const res = await apiRequest.post("/message/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full flex flex-col">

      {/* MESSAGES LIST */}
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto">
        <h1 className="text-3xl font-light">
          Messages
        </h1>

        {chats.filter(
          (c) => c.receiver && c.lastMessage
        ).length === 0 ? (
          <p className="text-gray-400 text-sm">
            No messages yet
          </p>
        ) : (
          chats
            .filter(
              (c) => c.receiver && c.lastMessage
            )
            .map((c) => (
              <div
                key={c.id}
                onClick={() =>
                  handleOpenChat(c.id, c.receiver)
                }
                style={{
                  backgroundColor:
                    c.seenBy.includes(currentUser.id) ||
                      chat?.id === c.id
                      ? "white"
                      : "#fecd514e",
                }}
                className="
            p-5
            rounded-xl
            flex
            items-center
            gap-5
            cursor-pointer
          "
              >
                <img
                  src={
                    c.receiver?.avatar ||
                    "/noavatar.png"
                  }
                  alt=""
                  className="
              w-10
              h-10
              rounded-full
              object-cover
            "
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
      {/* CHAT BOX */}
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between mt-4">

          {/* TOP */}
          <div className="bg-[#f7c14b85] p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src={chat.receiver?.avatar || "/noavatar.png"}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{chat.receiver?.username}</span>
            </div>
            <span
              onClick={() => setChat(null)}
              className="cursor-pointer"
            >
              X
            </span>
          </div>

          {/* CENTER */}
          <div className="h-[350px] overflow-y-auto p-5 flex flex-col gap-5">
            {chat.messages?.map((message) => (
              <div
                key={message.id}
                className={`
        flex
        ${String(message.userId) === String(currentUser.id)
                    ? "justify-end"   // ✅ apna msg — right
                    : "justify-start" // ✅ doosre ka msg — left
                  }
      `}
              >
                <div className={`
        max-w-[50%]
        flex
        flex-col
        gap-1
        ${String(message.userId) === String(currentUser.id)
                    ? "items-end"
                    : "items-start"
                  }
      `}>
                  <p className={`
          text-sm px-4 py-2 rounded-2xl
          ${String(message.userId) === String(currentUser.id)
                      ? "bg-[#fece51] text-black rounded-br-none"
                      : "bg-gray-100 text-black rounded-bl-none"
                    }
        `}>
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
          {/* BOTTOM */}
          <form
            onSubmit={handleSubmit}
            className="border-t-2 border-[#f7c14b85] h-[60px] flex items-center"
          >
            <textarea
              name="text"
              className="flex-[3] h-full border-none outline-none p-5 resize-none text-sm"
              placeholder="Write a message..."
            />

            <button
              type="submit"
              className="flex-1 bg-[#f7c14b85] h-full border-none cursor-pointer hover:bg-[#f5b92f] transition"
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