"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HoverContext({
  paragraph,
  actionUrl,
}: {
  paragraph: string;
  actionUrl: string;
}) {
  return (
    <motion.div
      initial={{ y: +100 }}
      animate={{ y: 0 }}
      exit={{ y: +100 }}
      transition={{ duration: 0.5 }}
      className=" absolute top-0 left-0 w-full h-full text-white flex flex-col gap-5 justify-between items-center text-center p-10 gradient-service"
    >
      <p className="">{paragraph}</p>
      <Link href={actionUrl} className="flex items-center font-semibold gap-5">
        <span>Get in touch</span>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
