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
        <div className="flex items-center justify-center flex-col gap-3 w-full h-full text-white">
          <div className="bg-[url('/counter_bg_2.jpg')] font-jost bg-cover bg-center bg-no-repeat w-fit h-fit transition-all flex shadow-lg">
            <div className=" h-full w-28 bg-gray-900"></div>
            <div className=" flex items-center justify-center flex-col w-full py-20 px-10">
              <h5 className="p-3 text-7xl font-semibold uppercase">
                #<span className=" font-light">Patient</span> Count
              </h5>
              <AnimatePresence>
                <ul className="px-10 p-4 list-none flex items-center gap-3 md:gap-5 text-6xl md:text-[100px] lg:text-[150px] font-bold">
                  {String(count)
                    ?.split("")
                    .map((item, index) => (
                      <motion.ol
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 1 }}
                        key={item + index}
                        className=" p-5 bg-gray-900 rounded-2xl aspect-square px-10 relative z-[1]"
                      >
                        <div className=" -z-[1] w-full absolute top-0 left-0 h-1/2 bg-gray-800 rounded-t-2xl"></div>
                        <span className="">
                          {index === 2 ? `${item},` : item}
                        </span>
                      </motion.ol>
                    ))}
                </ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
