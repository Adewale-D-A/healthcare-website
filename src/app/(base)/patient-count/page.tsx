"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BlurAndGradient from "@/components/animations/blur-and-gradient";
import NavMenu from "@/components/layout/nav-menu";
import reachStats from "@/assets/reach-stats.json";
import { User2Icon } from "@/assets/icons/user";
import RequestADemoButton from "@/components/buttons/request-a-demo";

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
    <div className="w-full flex bg-[#102a56e6] flex-col justify-center items-center">
      {/* HERO */}
      <section className="top-flare relative space-y-24 pb-28 w-full flex flex-col items-center bg-primary ">
        <NavMenu variant={2} />
        <div className="w-full h-full max-w-screen-xl pb-28 px-5 md:px-10 flex flex-col gap-6 items-center justify-center">
          <div className="w-full  overflow-hidden absolute bottom-[-150px] z-[-5] left-0  flex justify-center">
            <BlurAndGradient />
          </div>
          <p className="border border-white/50 text-center  bg-white/5 flex text-sm items-center gap-2 p-2 rounded-lg text-white px-5">
            <User2Icon className=" size-4" />
            Patient count
          </p>
          <h1 className="z-10 text-white text-5xl lg:text-7xl leading-tight lg:leading-snug font-bold text-center max-w-screen-md">
            Live patient count
          </h1>
          <AnimatePresence>
            <motion.ul
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 1 }}
              className="list-none mt-16 lg:mt-28 flex items-center justify-center gap-2 md:gap-5 font-bold transition-all"
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
                      className="text-center flex items-center justify-center shadow-2xl text-white pt-3 rounded-full bg-primary border-2 lg:border-4  border-secondary  text-4xl md:text-5xl lg:text-7xl size-14 md:size-24 lg:size-28 p-5 aspect-square"
                    >
                      {item}
                    </motion.ol>
                  ) : (
                    <ol
                      key={item + index}
                      className="text-center flex items-center justify-center shadow-2xl text-white pt-3 rounded-full bg-primary border-2 lg:border-4  border-secondary  text-4xl md:text-5xl lg:text-7xl size-14 md:size-24 lg:size-28 p-5 aspect-square"
                    >
                      {item}
                    </ol>
                  )
                )}
            </motion.ul>
          </AnimatePresence>
        </div>
      </section>
      <section className="w-full  relative flex flex-col overflow-hidden justify-center items-center gap-16 bg-white text-secondary py-28">
        <div className="w-full z-10 flex max-w-screen-md flex-col gap-16 justify-center items-center rounded-3xl p-5">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Our Reach
            </h4>
            <p className=" text-gray_text-800">
              Together, we are redefining healthcare accessibility.
            </p>
          </div>
          <div className="w-full flex  items-center justify-center lg:justify-between text-center flex-wrap gap-5">
            {reachStats.map((item) => (
              <div
                key={item?.id}
                className={" flex flex-col items-center gap-3"}
              >
                <span className=" font-bold text-4xl lg:text-6xl">
                  {item?.value}
                </span>
                <p className=" uppercase text-xs text-black font-semibold lg:font-bold">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-center text-white font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Partner with Us Today
          </h4>
          <p className=" text-gray-200">
            Join the fast-growing network of providers leveraging innovative
            health tech to save lives and improve care delivery.
          </p>
          <RequestADemoButton className=" bg-white text-secondary" />
        </div>
      </section>
    </div>
  );
}
