import React from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfileUpdatePage from '../profileUpdatePage/ProfileUpdatePage'

const ProfilePage = () => {

  const { updateUser, currentUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");

      updateUser(null)
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

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

            <Link to="/profile/update"><button
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
            </button></Link>
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
                src={currentUser.avatar || "/noavatar.png"}
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

              <b>{currentUser?.username}</b>
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

              <b>{currentUser?.email}</b>
              <button className="w-[100px] bg-teal-600 border-none text-white py-[10px] px-[20px] cursor-pointer rounded-[5px]" onClick={handleLogout}>
                Logout
              </button>
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

            <Link to="/add">
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
              </Link>
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