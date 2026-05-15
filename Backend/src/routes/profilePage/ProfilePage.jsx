import React from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

const ProfilePage = () => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        h-full
      "
    >
      {/* LEFT */}
      <div
        className="
          flex-[3]
          overflow-y-auto
          pb-10
        "
      >
        <div
          className="
            flex
            flex-col
            gap-12
            pr-0
            lg:pr-10
          "
        >
          {/* USER INFO */}
          <div
            className="
              flex
              items-center
              justify-between
              flex-wrap
              gap-4
            "
          >
            <h1
              className="
                text-2xl
                md:text-3xl
                font-light
              "
            >
              User Information
            </h1>

            <button
              className="
                px-5
                py-3
                bg-[#fece51]
                rounded-md
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Update Profile
            </button>
          </div>

          {/* INFO */}
          <div
            className="
              flex
              flex-col
              gap-5
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span className="font-medium">
                Avatar:
              </span>

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
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                flex-wrap
              "
            >
              <span className="font-medium">
                Username:
              </span>

              <b>Siddiq</b>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                flex-wrap
                break-all
              "
            >
              <span className="font-medium">
                E-mail:
              </span>

              <b>siddiqshah478@gmail.com</b>
            </div>
          </div>

          {/* MY LIST */}
          <div
            className="
              flex
              items-center
              justify-between
              flex-wrap
              gap-4
            "
          >
            <h1
              className="
                text-2xl
                md:text-3xl
                font-light
              "
            >
              My List
            </h1>

            <button
              className="
                px-5
                py-3
                bg-[#fece51]
                rounded-md
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Create New Post
            </button>
          </div>

          <List />

          {/* SAVED LIST */}
          <div>
            <h1
              className="
                text-2xl
                md:text-3xl
                font-light
              "
            >
              Saved List
            </h1>
          </div>

          <List />
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex-[2]
          bg-[#fcf5f3]
          mt-10
          lg:mt-0
          rounded-t-3xl
          lg:rounded-none
          min-h-[500px]
        "
      >
        <div
          className="
            h-full
            px-4
            md:px-5
            py-5
          "
        >
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;