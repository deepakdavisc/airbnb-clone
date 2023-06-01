"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import MenuItems from "./menuitems";

const Usermenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleButton = () => {
    setToggleMenu((toggle) => !toggle);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          Airbnb your home
        </div>
        <div
          onClick={handleToggleButton}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover: shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="absolute rounded-xl shadow-md bg-white overflow-hidden w-[40vw] md:w-3/4 top-12 right-0 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItems label="Login" onClick={() => {}} />
              <MenuItems label="Sign Up" onClick={() => {}} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usermenu;
