"use client";
import Image from "next/image";
import Workflow from "@/assets/implementation-flow-skew.json";
import { useEffect, useState } from "react";

export default function SkewedInfiniteScroll() {
  // const width = 500;
  const [width, setWidth] = useState(400);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setWidth(mediaQuery.matches ? 200 : 400);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setWidth(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="w-full logos py-3 whitespace-nowrap overflow-hidden relative before:absolute before:top-0 before:w-20 before:contents-[''] before:z-[2] before:h-full before:left-0 after:absolute after:top-0 after:w-20 after:contents-[''] after:z-[2]  after:h-full after:right-0">
        <div
          style={{ height: width }}
          className={`w-full h-[${width}px]  wrapper whitespace-nowrap relative overflow-hidden`}
        >
          {Workflow.map(({ id, logo, name }, index) => (
            <div
              className={`animate-infiniteScroll absolute`}
              key={id}
              style={
                {
                  animationDelay: `calc(30s / ${Workflow?.length} * (${
                    Workflow?.length
                  } - ${index + 1}) * -1)`,
                  left: `max(calc(${width}px * ${Workflow?.length}), 100%)`,
                  width: `${width}px`,
                  height: `${width}px`,
                } as any
              }
            >
              <Image
                key={id}
                src={logo}
                alt={name}
                height={1000}
                width={1000}
                className={`w-full h-auto object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
