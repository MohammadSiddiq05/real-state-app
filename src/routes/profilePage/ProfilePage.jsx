import React from "react";
import List from "../../components/list/List";

const ProfilePage = () => {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        h-full
        overflow-y-auto
        md:overflow-hidden
      "
    >
      {/* LEFT SIDE */}
      <div
        className="
          flex-[3]
          overflow-y-auto
          pb-12
        "
      >
        <div
          className="
            pr-0
            md:pr-10
            flex
            flex-col
            gap-12
          "
        >
          {/* USER INFO */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              flex-wrap
            "
          >
            <h1
              className="
                text-3xl
                font-light
              "
            >
              User Information
            </h1>

            <button
              className="
                px-6
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
            <span
              className="
                flex
                items-center
                gap-5
              "
            >
              Avatar :
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
            </span>

            <span
              className="
                flex
                items-center
                gap-5
              "
            >
              Username :
              <b>Siddiq</b>
            </span>

            <span
              className="
                flex
                items-center
                gap-5
                break-all
              "
            >
              E-mail :
              <b>siddiqshah478@gmail.com</b>
            </span>
          </div>

          {/* MY LIST */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-5
              flex-wrap
            "
          >
            <h1
              className="
                text-3xl
                font-light
              "
            >
              My List
            </h1>

            <button
              className="
                px-6
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
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <h1
              className="
                text-3xl
                font-light
              "
            >
              Saved List
            </h1>
          </div>

          <List />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex-[2]
          bg-[#fcf5f3]
          h-full
          mt-10
          md:mt-0
        "
      >
        <div
          className="
            px-5
            h-full
          "
        >
          {/* CHAT SECTION */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;