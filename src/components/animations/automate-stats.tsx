"use client";
import { useEffect } from "react";
import automateStats from "@/assets/automate-stats.json";
import { cn } from "@/utils/cn";
import useVisibilityPercentage from "@/hook/use-visibility-percentage";

export default function AutomotateStats() {
  const threshold = 70;
  const [visibilityRef, percentage] = useVisibilityPercentage();

  const isGreaterThanThreshoold = Boolean(percentage > threshold);
  return (
    <section
      ref={visibilityRef}
      className="w-full  relative flex flex-col overflow-hidden justify-center items-center gap-16 bg-white text-white h-[600px]"
    >
      <div
        style={{
          maxWidth: percentage < threshold ? "1280px" : `${percentage}%`,
          height: isGreaterThanThreshoold ? "100%" : "350px",
          borderRadius: percentage > 95 ? "0px" : "36px",
        }}
        className={cn(
          "bg-secondary z-0 absolute w-full flex justify-center",
          isGreaterThanThreshoold
            ? " bg-[url('/assets/pattern.png')] rounded-none bg-right bg-no-repeat bg-cover w-full h-full"
            : " max-w-screen-xl w-full"
        )}
      ></div>
      <div className="w-full z-10 flex max-w-screen-md flex-col gap-16 justify-center items-center rounded-3xl p-5">
        <h2 className="text-3xl text-center lg:text-[38px] font-bold">
          We automate healthcare across Africa
        </h2>
        <div className="w-full grid grid-cols-2 gap-3 lg:flex  items-center justify-between text-center">
          {automateStats.map((item) => (
            <div
              key={item?.id}
              className={cn(" flex flex-col items-center gap-3")}
            >
              <span className=" font-bold text-3xl lg:text-6xl">
                {item?.value}
              </span>
              <p className=" uppercase text-xs">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
