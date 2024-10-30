"use client";
import Image from "next/image";
import { useCallback, useRef } from "react";
import seventhSense from "@/assets/7thsense.json";
import ChevronRightIcon from "@/assets/icons/chevron-right";
import ChevronLeftIcon from "@/assets/icons/chevron-left";

export default function SeventhSenseContent() {
  const containerRef = useRef() as any;

  const scrollLeft = useCallback(() => {
    containerRef.current.scrollLeft -= 300;
  }, []);

  const scrollRight = useCallback(() => {
    containerRef.current.scrollLeft += 300;
  }, []);

  return (
    <div className="w-full flex  items-center gap-2 md:gap-5 relative max-w-screen-xl ">
      <button
        onClick={() => scrollLeft()}
        className={
          " border-2 p-2 md:p-3 w-fit rounded-full text-white absolute top-1/2 left-2 backdrop-bg-filter"
        }
      >
        <ChevronLeftIcon className=" size-4 md:size-6" />
      </button>
      <div
        ref={containerRef}
        className="w-full scrollbar-hidden overflow-x-scroll scroll-smooth transition-all snap-ctn flex gap-3 md:gap-5 pr-10"
      >
        <div className=" flex flex-col gap-3 w-full items-center min-w-80 md:min-w-[600px] bg-[#03253E] p-10 rounded-md text-white">
          <Image
            src={"/seventh-sense/logo-2.jpg"}
            alt="7thSense logo"
            height={300}
            width={300}
            className=" size-44"
          />
          <h5 className=" font-extrabold text-2xl md:text-6xl text-center">
            5 Things You Should Know About{" "}
            <span className=" text-green-500">7thSense</span>
          </h5>
        </div>
        {seventhSense?.map((item) => (
          <div
            key={item?.id}
            className=" flex flex-col justify-center min-w-80 md:min-w-[400px] text-center gap-6 w-full items-center bg-[#03253E] p-10 rounded-md text-white"
          >
            <h5 className=" font-extrabold text-xl md:text-4xl text-center">
              {item?.title}
            </h5>
            <p className=" text-md md:text-xl">{item?.content}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollRight()}
        className=" border-2 p-2 md:p-3 w-fit rounded-full text-white absolute top-1/2 right-2 backdrop-bg-filter"
      >
        <ChevronRightIcon className=" size-4 md:size-6" />
      </button>
    </div>
  );
}
