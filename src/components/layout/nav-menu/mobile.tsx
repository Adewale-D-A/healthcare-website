"use client";
import { motion } from "framer-motion";
import MobileNavItems from "./mobile-nav-items";
import Logo from "@/components/business-styles/logo";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import CancelIcon from "@/assets/icons/cancel";
import Link from "next/link";

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
          <div className=" flex flex-col items-center gap-3">
            <RequestADemoButton />
            <Link
              href="https://www.anonymizecare.com/"
              target="_blank"
              className="bg-transparent border border-secondary-500 h-fit text-primary-500 rounded-full w-fit p-3 px-14 text-sm transition-all hover:scale-105"
            >
              AnonymizeCare
            </Link>
          </div>
        </div>
      </motion.div>
    );
  } else return;
}
