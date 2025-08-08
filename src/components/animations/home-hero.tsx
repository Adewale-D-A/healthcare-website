"use client";
import useInView from "@/hook/use-in-view";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function HomeHeroBanner() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="w-full hidden lg:block"
      style={{ perspective: "800px" }}
    >
      <div
        className={cn(
          " w-full relative bottom-flare opacity-50 rounded-lg lg:rounded-3xl overflow-hidden transition-all",
          isInView && " animate-backwardTilt opacity-1"
        )}
      >
        <div className=" w-full h-full ml-16 lg:mt-28 bg-white/10  rounded-lg lg:rounded-3xl p-2 animate-waveTilt delay-700">
          <Image
            src={"/assets/home-hero/desktop-screen.png"}
            alt="our solution"
            height={1000}
            width={1000}
            className="w-full h-full object-cover object-top opacity-85 rounded-lg lg:rounded-3xl"
          />
        </div>
        <div className="absolute top-0 left-5 lg:mt-40 animate-waveTilt delay-75 shadow-2xl">
          <Image
            src={"/assets/home-hero/mobile-screen-2.png"}
            alt="our solution"
            height={1000}
            width={1000}
            className=" w-72 lg:w-60 h-auto rounded-2xl"
          />
        </div>
        <div className="absolute top-5 right-5 overflow-hidden  rounded-2xl animate-oceanBounce delay-200 shadow-2xl">
          <Image
            src={"/assets/home-hero/mobile-screen-1.png"}
            alt="our solution"
            height={1000}
            width={1000}
            className="w-96 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
