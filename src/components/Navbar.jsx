import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-[100px] flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex flex-1 md:flex-[3] items-center gap-[50px]">
        
        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-[20px]"
        >
          <img src="/logo.png" alt="logo" className="w-7" />

          {/* hide on md, show on small */}
          <span className="hidden sm:block md:hidden lg:block">
            EmmaState
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <a
          href="/"
          className="hidden sm:hidden md:block hover:scale-105 transition-all duration-300"
        >
          Home
        </a>

        <a
          href="/"
          className="hidden sm:hidden md:block hover:scale-105 transition-all duration-300"
        >
          About
        </a>

        <a
          href="/"
          className="hidden sm:hidden md:block hover:scale-105 transition-all duration-300"
        >
          Contacts
        </a>

        <a
          href="/"
          className="hidden sm:hidden md:block hover:scale-105 transition-all duration-300"
        >
          Agents
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex flex-[2] items-center justify-end h-full bg-[#fcf5f3] md:bg-transparent">
        
        {/* Desktop Buttons */}
        <a
          href="/"
          className="hidden md:block px-6 py-3 mx-5 hover:scale-105 transition-all duration-300"
        >
          Sign in
        </a>

        <a
          href="/"
          className="hidden md:block px-6 py-3 mx-5 bg-[#fece51] hover:scale-105 transition-all duration-300"
        >
          Sign up
        </a>

        {/* MENU ICON */}
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
            absolute top-0 
            ${open ? "right-0" : "-right-full"}
            w-[70%] sm:w-[50%]
            h-screen
            bg-black text-white
            flex flex-col
            items-center
            justify-center
            gap-8
            text-2xl
            transition-all
            duration-500
          `}
        >
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="/" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="/" onClick={() => setOpen(false)}>
            Contacts
          </a>

          <a href="/" onClick={() => setOpen(false)}>
            Agents
          </a>

          <a href="/" onClick={() => setOpen(false)}>
            Sign in
          </a>

          <a
            href="/"
            className="bg-[#fece51] px-6 py-3 text-black rounded-md"
            onClick={() => setOpen(false)}
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;