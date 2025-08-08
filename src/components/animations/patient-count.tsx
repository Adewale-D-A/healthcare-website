"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const fastCountStartNumber = 0;
const fastCountEndNumber = 149900;
const fastCountStepMs = 33;
const fastCountDurationMs = 3;

const slowCountStartNumber = fastCountEndNumber;
const slowCountEndNumber = 150000;
const slowCountStepMs = 500;
export default function PatientCounterAnimation() {
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
  );
}
