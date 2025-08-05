"use client";

import { useState } from "react";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import Logo from "@/components/business-styles/logo";
import MobileMenu from "./mobile";
import NavItems from "./nav-items";
import MenuIcon from "@/assets/icons/menu";
import LinkButton from "@/components/buttons/link-button";
import { cn } from "@/utils/cn";

export default function NavMenu({ variant = 1 }: { variant?: 1 | 2 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={cn(
          "w-full backdrop-bg-filter flex flex-col items-center justify-center bg-primary-500 sticky top-0 left-0 z-50",
          variant === 2 ? "text-white" : "text-black"
        )}
      >
        {/* show on desktop, hide on mobile */}
        <div className="w-full hidden md:flex justify-between items-center gap-4 max-w-screen-xl px-5 md:px-10 py-5">
          <Logo variant={variant} />
          <NavItems />

          <div className=" flex items-center gap-4">
            <LinkButton
              href="https://www.anonymizecare.com/"
              target="_blank"
              variant={"outline"}
            >
              AnonymizeCare
            </LinkButton>
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
          <Logo variant={2} />
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
