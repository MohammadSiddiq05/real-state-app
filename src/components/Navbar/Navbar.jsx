import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        absolute
        top-0
        left-0
        w-full
        h-[100px]
        z-50
      "
    >
      <div
        className="
          h-full
          max-w-[1400px]
          mx-auto
          px-5
          md:px-10
          lg:px-16
          xl:px-24
          flex
          items-center
          justify-between
        "
      >
        
        {/* LEFT */}
        <div className="flex flex-1 md:flex-[3] items-center gap-12">
          
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-2xl"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="w-7"
            />

            <span className="hidden sm:block md:hidden lg:block">
              LamaEstate
            </span>
          </a>

          <a
            href="/"
            className="
              hidden md:block
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Home
          </a>

          <a
            href="/"
            className="
              hidden md:block
              hover:scale-105
              transition-all
              duration-300
            "
          >
            About
          </a>

          <a
            href="/"
            className="
              hidden md:block
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact
          </a>

          <a
            href="/"
            className="
              hidden md:block
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Agents
          </a>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            flex-[2]
            items-center
            justify-end
            h-full
            bg-[#fcf5f3]
            md:bg-transparent
          "
        >
          
          <a
            href="/"
            className="
              hidden md:block
              px-6 py-3
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Sign In
          </a>

          <a
            href="/"
            className="
              hidden md:block
              px-6 py-3
              bg-[#fece51]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Profile
          </a>

          {/* ICON */}
          <div className="block md:hidden z-[999]">
            <img
              src="/menu.png"
              alt="menu"
              className="w-9 h-9 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>

          {/* MOBILE MENU */}
          <div
            className={`
              md:hidden
              fixed
              top-0
              right-0
              h-screen
              w-[70%]
              sm:w-[50%]
              bg-black
              text-white
              flex
              flex-col
              items-center
              justify-center
              gap-8
              text-2xl
              transition-transform
              duration-500
              z-[998]
              ${open ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>

            <a href="/" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="/" onClick={() => setOpen(false)}>
              Contact
            </a>

            <a href="/" onClick={() => setOpen(false)}>
              Agents
            </a>

            <a href="/" onClick={() => setOpen(false)}>
              Sign In
            </a>

            <a
              href="/"
              className="
                bg-[#fece51]
                px-6 py-3
                rounded-md
                text-black
              "
              onClick={() => setOpen(false)}
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;