"use client";
import useInView from "@/hook/use-in-view";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function DesignedFor() {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className=" w-full mt-9 flex justify-center object-center h-72 lg:h-96"
    >
      <div
        className={cn(
          " flex items-start justify-center w-full overflow-x-hidden px-5 lg:px-10 overflow-y-hidden",
          isInView && "animate-moveUp"
        )}
      >
        <div
          className={cn(
            " p-1 lg:p-3 bg-white  shadow-2xl rounded-3xl w-56 h-80  mt-[120px] mr-[-50px] z-[3]",
            isInView && "animate-rotateAntiClockwise"
          )}
        >
          <Image
            src={"/assets/designed_for/designed_for_3.jpg"}
            alt="professional_1"
            height={800}
            width={800}
            className=" w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
        <div
          className={cn(
            " p-1 lg:p-3 bg-white  shadow-2xl rounded-3xl w-56 h-80 mt-[50px] mr-[-80px] z-[4]",
            isInView && "animate-rotateAntiClockwise"
          )}
        >
          <Image
            src={"/assets/designed_for/designed_for_4.jpg"}
            alt="professional_1"
            height={800}
            width={800}
            className=" w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
        <div
          className={cn(
            " p-1 lg:p-3 bg-white  shadow-2xl rounded-3xl w-80 h-96 z-[5]"
            // isInView && "animate-moveUp"
          )}
        >
          <Image
            src={"/assets/designed_for/designed_for_5.jpg"}
            alt="professional_1"
            height={800}
            width={800}
            className=" w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
        <div
          className={cn(
            " p-1 lg:p-3 bg-white  shadow-2xl rounded-3xl w-56 h-80  mt-[50px] ml-[-100px] z-[4]",
            isInView && "animate-rotateClockwise"
          )}
        >
          <Image
            src={"/assets/designed_for/designed_for_1.jpg"}
            alt="professional_1"
            height={800}
            width={800}
            className=" w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
        <div
          className={cn(
            " p-1 lg:p-3 bg-white  shadow-2xl rounded-3xl w-56 h-80 mt-[120px] ml-[-80px] z-[3]",
            isInView && "animate-rotateClockwise"
          )}
        >
          <Image
            src={"/assets/designed_for/designed_for_2.jpg"}
            alt="professional_1"
            height={800}
            width={800}
            className=" w-full h-full object-cover object-center rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
