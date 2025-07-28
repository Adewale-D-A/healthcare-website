"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "@/hook/use-in-view";
import whyUs from "@/assets/how-it-works.json";
import { cn } from "@/utils/cn";
import ClipboardIcon from "@/assets/icons/clipboard";
import SettingIcon from "@/assets/icons/settings";
import DeployIcon from "@/assets/icons/deploy";
import PresentationIcon from "@/assets/icons/presentation";

export default function HowItWorks() {
  const [ref, isInView] = useInView();
  const boxRef = useRef(null) as any;
  const [currentSelection, setCurrentSelection] = useState(whyUs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inisitalMargin, setInitialMargin] = useState(0);
  // const [in]
  // const initialMargin = window ? window?.innerWidth / 2 : 500;

  const handleSelection = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      setCurrentSelection(whyUs[index]);
    },
    [whyUs]
  );

  useEffect(() => {
    if (isInView) {
      const item = boxRef?.current?.childNodes[currentIndex];
      item?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [isInView, currentIndex]);

  useEffect(() => {
    if (window) {
      setInitialMargin(window?.innerWidth / 2);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex flex-col justify-center items-center gap-16"
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <h4 className=" text-4xl font-bold text-transparent bg-sctn-two-text-gradient bg-clip-text">
          How it Works
        </h4>
        <p>Get set up in less than a week</p>
      </div>
      <div className=" grid grid-cols-4 gap-5 lg:gap-10">
        {whyUs.map((item, index) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 items-center text-center"
          >
            <button
              onClick={() => handleSelection(index)}
              className={cn(
                "p-5 rounded-xl bg-primary/30 opacity-30  hover:scale-110  hover:-2xl transition-all cursor-pointer",
                currentSelection?.id === item?.id &&
                  "bg-secondary text-white opacity-100"
              )}
            >
              {item?.id === "1" && <ClipboardIcon className=" size-10" />}
              {item?.id === "2" && <SettingIcon className=" size-10" />}
              {item?.id === "3" && <DeployIcon className=" size-10" />}
              {item?.id === "4" && <PresentationIcon className=" size-10" />}
            </button>
            <span className=" font-bold">{item?.id}.</span>
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
      <div className=" w-full overflow-x-auto hide-scroll ">
        <div
          ref={boxRef}
          style={{
            marginLeft: inisitalMargin,
          }}
          className="w-full flex flex-row items-stretch gap-5 lg:gap-10 transition-all overflow-x-auto hide-scroll "
        >
          {whyUs.map((item, index) => (
            <button
              onClick={() => handleSelection(index)}
              key={item.id}
              className={cn(
                " rounded-xl bg-white min-w-full lg:min-w-[25rem] w-full pt-4 pb-12  flex flex-col  transition-all cursor-pointer opacity-30 hover:opacity-100",
                currentSelection?.id === item?.id && " bg-white opacity-100"
              )}
            >
              <div className=" w-full h-72 p-4 flex justify-center">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  height={600}
                  width={600}
                  className=" w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full text-left  px-5 flex flex-col gap-3 ">
                <h6 className=" text-xl lg:text-2xl font-bold">
                  {item?.title}
                </h6>
                <p>{item?.content}</p>
              </div>
            </button>
          ))}
          <button
            className={cn(
              "opacity-0 min-w-full lg:min-w-[36rem] w-full hidden lg:block"
            )}
          ></button>
        </div>
      </div>
    </div>
  );
}
