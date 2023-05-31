"use client";

import React from "react";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import Usermenu from "./usermenu";

export function Navbar() {
  return (
    <div className="fixed w-full bg-white shadow-sm z-20">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between md:gap-0 gap-3">
            <Logo />
            <Search />
            <Usermenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
