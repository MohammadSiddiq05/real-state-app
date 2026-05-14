import React, { useState } from "react";
import { Send } from "lucide-react";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div
      className="
        h-full
        flex
        flex-col
      "
    >
      {/* MESSAGES */}
      <div
        className="
          flex-1
          flex
          flex-col
          gap-5
          overflow-y-auto
          pr-2
        "
      >
        <h1 className="text-3xl font-light">
          Messages
        </h1>

        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="
              bg-white
              p-5
              rounded-xl
              flex
              items-center
              gap-5
              cursor-pointer
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="
                w-12
                h-12
                rounded-full
                object-cover
              "
            />

            <div className="flex flex-col gap-1">
              <span className="font-semibold">
                John Doe
              </span>

              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CHAT BOX */}
      {chat && (
        <div
          className="
            flex-1
            bg-white
            mt-5
            rounded-2xl
            overflow-hidden
            flex
            flex-col
            shadow-sm
          "
        >
          {/* TOP */}
          <div
            className="
              bg-[#f7c14b85]
              px-5
              py-4
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="
                  w-10
                  h-10
                  rounded-full
                  object-cover
                "
              />

              <span className="font-semibold">
                John Doe
              </span>
            </div>

            <button
              onClick={() => setChat(false)}
              className="
                text-xl
                font-bold
                cursor-pointer
              "
            >
              ×
            </button>
          </div>

          {/* CENTER */}
          <div
            className="
              h-[350px]
              overflow-y-auto
              p-5
              flex
              flex-col
              gap-5
            "
          >
            {[1, 2, 3, 4, 5].map((msg, index) => (
              <div
                key={index}
                className={`
                  flex
                  flex-col
                  gap-2
                  max-w-[70%]
                  ${
                    index % 2 === 0
                      ? "self-start"
                      : "self-end text-right"
                  }
                `}
              >
                <p
                  className="
                    bg-[#f7f7f7]
                    p-3
                    rounded-xl
                    text-sm
                  "
                >
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>

                <span
                  className="
                    text-xs
                    text-gray-500
                  "
                >
                  1 hour ago
                </span>
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div
            className="
              border-t
              border-[#f7c14b85]
              h-[70px]
              flex
              items-center
            "
          >
            <textarea
              placeholder="Write a message..."
              className="
                flex-1
                h-full
                resize-none
                outline-none
                border-none
                p-5
                text-sm
              "
            />

            <button
              className="
                h-full
                px-6
                bg-[#f7c14b85]
                flex
                items-center
                justify-center
                hover:bg-[#f5b92f]
                transition
              "
            >
              <Send size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;