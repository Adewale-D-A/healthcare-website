"use client";
import { motion } from "framer-motion";
import MobileNavItems from "./mobile-nav-items";
import Logo from "@/components/business-styles/logo";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import CancelIcon from "@/assets/icons/cancel";

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Function;
}) {
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (isMenuOpen) {
    return (
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        exit={{ x: 100 }}
        transition={{ duration: 0.2 }}
        className=" fixed top-0 right-0 z-50 h-screen w-full flex"
      >
        <div className="h-screen bg-white p-4 w-full flex flex-col gap-16 px-10">
          <div className="flex justify-between gap-5">
            <Logo />
            <button
              type="button"
              title="close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <CancelIcon className="w-10 h-10  hover:text-primary-500 hover:rotate-180 transition-all hover:cursor-pointer" />
            </button>
          </div>
          <MobileNavItems />
          <RequestADemoButton />
        </div>
      </motion.div>
    );
  } else return;
}
