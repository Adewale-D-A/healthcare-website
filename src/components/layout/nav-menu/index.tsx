"use client";

import { useState } from "react";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import Logo from "@/components/business-styles/logo";
import MobileMenu from "./mobile";
import NavItems from "./nav-items";
import MenuIcon from "@/assets/icons/menu";
import Link from "next/link";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full flex flex-col items-center justify-center bg-primary-500 text-white sticky top-0 left-0 border-b border-secondary-500 z-50">
        {/* show on desktop, hide on mobile */}
        <div className="w-full hidden md:flex justify-between items-center gap-4 max-w-screen-xl px-5 md:px-10 py-5">
          <Logo />
          <NavItems />

          <div className=" flex items-center gap-2">
            <Link
              href="https://www.anonymizecare.com/"
              target="_blank"
              className="hidden lg:block bg-transparent border border-secondary-500 h-fit text-white rounded-full w-fit p-3 px-10 text-sm transition-all hover:scale-105"
            >
              AnonymizeCare
            </Link>
            <RequestADemoButton />
          </div>

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
