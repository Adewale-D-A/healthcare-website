"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useInView from "@/hook/use-in-view";
import whyUs from "@/assets/how-it-works.json";
import { cn } from "@/utils/cn";
import ClipboardIcon from "@/assets/icons/clipboard";
import SettingIcon from "@/assets/icons/settings";
import DeployIcon from "@/assets/icons/deploy";
import TeachIcon from "@/assets/icons/teach";
import useIsMobileView from "@/hook/use-is-mobile";

export default function HowItWorks() {
  const [isMobile] = useIsMobileView();
  const [ref, isInView] = useInView();
  const boxRef = useRef(null) as any;
  const [currentSelection, setCurrentSelection] = useState(whyUs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialMargin, setInitialMargin] = useState(0);

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
      className="w-full flex flex-col justify-center items-center gap-16 px-5 md:px-10"
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <h4 className=" text-4xl font-semibold text-transparent bg-sctn-two-text-gradient bg-clip-text">
          How it Works
        </h4>
        <p>Get set up in less than a week</p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {whyUs.map((item, index) => (
          <div
            key={item.id}
            className=" flex flex-col gap-2 items-center text-center"
          >
            <button
              onClick={() => handleSelection(index)}
              className={cn(
                "p-3 lg:p-5 rounded-xl bg-white text-gray_text-400 hover:bg-secondary hover:text-white  hover:scale-110 transition-all cursor-pointer",
                currentSelection?.id === item?.id && "bg-secondary text-white"
              )}
            >
              {item?.id === "1" && (
                <ClipboardIcon className="size-7 lg:size-10" />
              )}
              {item?.id === "2" && (
                <SettingIcon className="size-7 lg:size-10" />
              )}
              {item?.id === "3" && <DeployIcon className="size-7 lg:size-10" />}
              {item?.id === "4" && <TeachIcon className="size-7 lg:size-10" />}
            </button>
            <div>
              <span className=" font-bold">{item?.id}.</span>
              <p>{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full overflow-x-auto hide-scroll ">
        <div
          ref={boxRef}
          style={{
            paddingLeft: isMobile ? 0 : initialMargin,
          }}
          className="w-full flex flex-row items-stretch gap-5 lg:gap-10 transition-all overflow-x-auto hide-scroll "
        >
          {whyUs.map((item, index) => (
            <button
              onClick={() => handleSelection(index)}
              key={item.id}
              className={cn(
                " rounded-xl bg-white min-w-full lg:min-w-[30rem] w-full p-6  flex flex-col  transition-all cursor-pointer opacity-30 hover:opacity-100",
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
                <h6 className=" text-xl lg:text-2xl font-bold text-gray_text-700">
                  {item?.title}
                </h6>
                <p className=" text-gray_text-500">{item?.content}</p>
              </div>
            </button>
          ))}
          <button
            className={cn(
              "opacity-0 min-w-full lg:min-w-[30rem] w-full hidden lg:block"
            )}
          ></button>
        </div>
      </div>
    </div>
  );
}
