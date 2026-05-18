import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext)

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();


  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        h-[100px]
        bg-white
        z-[999]
      "
    >
      <div
        className="
          max-w-[1400px]
          h-full
          mx-auto
          px-5
          md:px-10
          lg:px-16
          flex
          items-center
          justify-between
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            items-center
            gap-8
            lg:gap-12
          "
        >
          <Link
            to="/"
            className="
              flex
              items-center
              gap-2
              font-bold
              text-2xl
            "
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-7 h-7"
            />

            <span className="hidden sm:block">
              EmmaEstate
            </span>
          </Link>

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
              lg:gap-10
            "
          >
            <Link
              to="/"
              className="hover:scale-105 transition"
            >
              Home
            </Link>

            <Link
              to="/"
              className="hover:scale-105 transition"
            >
              About
            </Link>

            <Link
              to="/"
              className="hover:scale-105 transition"
            >
              Contact
            </Link>

            <Link
              to="/"
              className="hover:scale-105 transition"
            >
              Agents
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center">
          {currentUser ? (
            <div className="hidden md:flex items-center gap-5">

              {/* PROFILE IMAGE */}
              <img
                src={currentUser?.avatar || "/noavatar.png"}
                alt=""
                className="
                  w-11
                  h-11
                  rounded-full
                  object-cover
                  border-2
                  border-white
                  shadow-md
                "
              />

              <span className="font-medium">
                {currentUser?.username}
              </span>

              {/* PROFILE BUTTON */}
              <Link
                to="/profile"
                className="
                  relative
                  bg-[#fece51]
                  px-6
                  py-3
                  rounded-md
                  font-medium
                "
              >
                Profile

                {number > 0 && <div
                  className="
                    absolute
                    -top-2
                    -right-2
                    w-6
                    h-6
                    rounded-full
                    bg-red-500
                    text-white
                    text-sm
                    flex
                    items-center
                    justify-center
                  "
                >
                  {number}
                </div>}
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center">
              <Link
                to="/login"
                className="
                  px-5
                  py-3
                  hover:scale-105
                  transition
                "
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="
                  bg-[#fece51]
                  px-5
                  py-3
                  rounded-md
                  hover:scale-105
                  transition
                "
              >
                Register
              </Link>
            </div>
          )}

          {/* MOBILE MENU ICON */}
          <div className="md:hidden ml-4 z-[1000]">
            <img
              src="/menu.png"
              alt=""
              className="w-9 h-9 cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              fixed
              top-0
              ${open ? "right-0" : "-right-full"
              }
              w-[70%]
              sm:w-[50%]
              h-screen
              bg-black
              text-white
              flex
              flex-col
              items-center
              justify-center
              gap-8
              text-2xl
              transition-all
              duration-500
              md:hidden
            `}
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link to="/" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link to="/" onClick={() => setOpen(false)}>
              Agents
            </Link>

            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="
                bg-[#fece51]
                text-black
                px-6
                py-3
                rounded-md
              "
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;