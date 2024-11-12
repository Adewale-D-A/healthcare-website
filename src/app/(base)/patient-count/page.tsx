"use client";
import NavBar from "@/components/NavBar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const fastCountStartNumber = 0;
const fastCountEndNumber = 149900;
const fastCountStepMs = 33;
const fastCountDurationMs = 3;

const slowCountStartNumber = fastCountEndNumber;
const slowCountEndNumber = 150000;
const slowCountStepMs = 500;

export default function PatientCount() {
  const [count, setCount] = useState(0);
  const [doneWithFastCount, setDoneWithFastCount] = useState(false);

  // fast count
  useEffect(() => {
    let startNumber = fastCountStartNumber,
      endNumber = fastCountEndNumber,
      duration = fastCountDurationMs,
      resolutionMS = fastCountStepMs,
      deltaNum = Math.round(
        (endNumber - startNumber) / (1000 / resolutionMS) / duration
      );
    function fastCount() {
      var handle = setInterval(() => {
        setCount(startNumber);

        // if already updated the endNumber, stop
        if (startNumber >= endNumber) {
          setDoneWithFastCount(true);
          clearInterval(handle);
        }
        startNumber += deltaNum;
        startNumber = Math.min(startNumber, endNumber);
      }, resolutionMS);
    }
    fastCount();
  }, []);

  // slow count after fast count
  useEffect(() => {
    function slowCount() {
      let startNumber = slowCountStartNumber,
        endSlowNumber = slowCountEndNumber,
        slowResolutionMs = slowCountStepMs;
      var slowCountUp = setInterval(() => {
        setCount(startNumber);
        const random = Math.floor(Math.random() * 15) + 1;

        // if already updated the endNumber, stop
        if (startNumber >= endSlowNumber) clearInterval(slowCountUp);
        startNumber += random;
        startNumber = Math.min(startNumber, endSlowNumber);
      }, slowResolutionMs);
    }
    if (doneWithFastCount) {
      slowCount();
    }
  }, [doneWithFastCount]);

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-screen bg-[url('/medical_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50 w-full">
          <NavBar />
        </div>
        <div className="flex items-center justify-center flex-col gap-3 w-full h-full text-white">
          <div className=" font-jost bg-cover bg-center bg-no-repeat w-fit h-fit transition-all flex ">
            <div className=" flex items-center justify-center flex-col gap-2 w-full py-20 px-5 md:px-10">
              <h5 className="p-3 text-lg  md:text-3xl lg:text-7xl font-semibold uppercase text-primary-500">
                #<span className=" font-light">Patient</span> Count
              </h5>
              <AnimatePresence>
                <motion.ul
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 1 }}
                  className="list-none flex items-center justify-center gap-2 md:gap-5 text-4xl md:text-[100px] lg:text-[150px] font-bold transition-all"
                >
                  {String(count)
                    ?.split("")
                    .map((item, index) =>
                      doneWithFastCount ? (
                        <motion.ol
                          key={item + index}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 100, opacity: 1 }}
                          className=" size-12 md:size-28 lg:size-48 overflow-hidden p-2 md:p-5 px-5 md:px-10 bg-green-900 rounded-md lg:rounded-2xl aspect-square relative z-[1] flex items-center justify-center"
                        >
                          <div className=" -z-[1] w-full absolute top-0 left-0 h-1/2 bg-green-800 rounded-t-2xl"></div>
                          <span className="">{item}</span>
                        </motion.ol>
                      ) : (
                        <ol
                          key={item + index}
                          className=" size-12 md:size-28 lg:size-48 overflow-hidden p-2 md:p-5 px-5 md:px-10 bg-green-900 rounded-md lg:rounded-2xl aspect-square relative z-[1] flex items-center justify-center"
                        >
                          <div className=" -z-[1] w-full absolute top-0 left-0 h-1/2 bg-green-800 rounded-t-2xl"></div>
                          <span className="">{item}</span>
                        </ol>
                      )
                    )}
                </motion.ul>
              </AnimatePresence>
              <AnimatePresence>
                <motion.ul
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 1 }}
                  className="list-none flex justify-center items-center gap-2 md:gap-5 text-4xl md:text-[100px] lg:text-[150px] font-bold transition-all"
                >
                  {String(count)
                    ?.split("")
                    .map((item, index) => (
                      <ol
                        key={item + index}
                        className="  size-12 md:size-28 lg:size-48 overflow-hidden p-2 md:p-5 px-5 md:px-10 bg-green-900 rounded-md lg:rounded-2xl aspect-square relative z-[1] flex items-center justify-center opacity-15 -scale-y-100"
                      >
                        <div className=" -z-[1] w-full absolute top-0 left-0 h-1/2 bg-green-800 rounded-t-2xl"></div>
                        <span className="">{item}</span>
                      </ol>
                    ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
