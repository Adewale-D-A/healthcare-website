"use client";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientCount() {
  const [count, setCount] = useState(101000);
  //set countdown timer
  useEffect(() => {
    var random = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => setCount((prev) => prev + random), 1000);
  });
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-screen bg-[url('/medical_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50 w-full">
          <NavBar />
        </div>
        <div className="flex items-center justify-center flex-col w-full h-full text-white">
          <h5 className=" p-2 rounded-full px-5 bg-primary-500">
            Patient Count
          </h5>

          <AnimatePresence>
            <ul className=" list-none flex items-center gap-5 text-7xl md:text-[100px] lg:text-[150px] font-Comfortaa font-extrabold text-primary-500">
              {String(count)
                ?.split("")
                .map((item, index) => (
                  <motion.ol
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 1 }}
                    key={item + index}
                  >
                    {index === 2 ? `${item},` : item}
                  </motion.ol>
                ))}
            </ul>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
