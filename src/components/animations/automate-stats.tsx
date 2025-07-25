"use client";
import useInView from "@/hook/use-in-view";
import automateStats from "@/assets/automate-stats.json";
import { cn } from "@/utils/cn";

export default function AutomotateStats() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="w-full flex flex-col justify-center items-center gap-16 bg-white text-white"
    >
      <div
        className={cn(
          "bg-secondary w-full flex justify-center animation-delay-2",
          isInView
            ? " bg-[url('/assets/pattern.png')] rounded-none bg-right bg-no-repeat bg-cover animation-delay-3"
            : "rounded-[36px] animation-delay"
        )}
      >
        <div className="w-full flex max-w-screen-xl flex-col gap-10 justify-center items-center rounded-3xl">
          <h2 className=" text-4xl font-bold">
            We automate healthcare across Africa
          </h2>
          <div className="w-full flex items-center justify-between">
            {automateStats.map((item) => (
              <div
                key={item?.id}
                className={cn(" flex flex-col items-center gap-3")}
              >
                <span className=" font-bold text-7xl">{item?.value}</span>
                <p className=" uppercase text-sm">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
