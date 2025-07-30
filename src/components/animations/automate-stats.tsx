"use client";
import useInView from "@/hook/use-in-view";
import automateStats from "@/assets/automate-stats.json";
import { cn } from "@/utils/cn";

export default function AutomotateStats() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="w-full  relative flex flex-col overflow-hidden justify-center items-center gap-16 bg-white text-white h-[600px]"
    >
      <div
        className={cn(
          "bg-secondary z-0 absolute w-full flex justify-center animation-delay-2",
          isInView
            ? " bg-[url('/assets/pattern.png')] rounded-none bg-right bg-no-repeat bg-cover animation-delay-3"
            : "rounded-[36px] animation-delay"
        )}
      ></div>
      <div className="w-full z-10 flex max-w-screen-md flex-col gap-16 justify-center items-center rounded-3xl p-5">
        <h2 className="text-3xl lg:text-[40px] font-bold">
          We automate healthcare across Africa
        </h2>
        <div className="w-full grid grid-cols-2 gap-3 lg:flex  items-center justify-between text-center">
          {automateStats.map((item) => (
            <div
              key={item?.id}
              className={cn(" flex flex-col items-center gap-3")}
            >
              <span className=" font-bold text-6xl">{item?.value}</span>
              <p className=" uppercase text-xs">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
