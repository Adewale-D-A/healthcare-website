"use client";

import { useState } from "react";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import Logo from "@/components/business-styles/logo";
import MobileMenu from "./mobile";
import NavItems from "./nav-items";
import MenuIcon from "@/assets/icons/menu";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex flex-col items-center justify-center bg-primary-500 text-white">
        {/* show on desktop, hide on mobile */}
        <div className="w-full hidden md:flex justify-between items-center gap-4 max-w-screen-xl px-5 md:px-10 py-5">
          <Logo />
          <NavItems />
          <RequestADemoButton />

          {/* show hamburger menu on mobile */}
          <button
            title="hamburger drawer"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden"
          >
            <MenuIcon className=" w-8 h-8" />
          </button>
        </div>
        {/* show on mobile, hide on desktop */}
        <div className=" w-full md:hidden flex justify-between  px-5 md:px-10 py-5">
          <Logo />
          <button
            title="hamburger drawer"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="block md:hidden"
          >
            <MenuIcon className=" w-8 h-8" />
          </button>
        </div>
      </nav>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
