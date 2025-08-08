"use client";
import Image from "next/image";
import partners from "@/assets/partners.json";
import { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [width, setWidth] = useState(150);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setWidth(mediaQuery.matches ? 80 : 150);

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
    <div className="w-full flex justify-center items-center">
      <div className="w-full logos py-3 whitespace-nowrap max-w-screen-xl overflow-hidden relative before:absolute before:top-0 before:w-20 before:contents-[''] before:z-[2] before:h-full before:left-0 after:absolute after:top-0 after:w-20 after:contents-[''] after:z-[2]  after:h-full after:right-0">
        <div
          style={{ height: width }}
          className={`w-full h-[${width}px]  wrapper whitespace-nowrap max-w-screen-xl relative overflow-hidden`}
        >
          {" "}
          {partners.map(({ id, logo, name }, index) => (
            <div
              className={` animate-infiniteScroll item${index + 1} absolute`}
              key={id}
              style={
                {
                  animationDelay: `calc(30s / ${partners?.length} * (${
                    partners?.length
                  } - ${index + 1}) * -1)`,
                  left: `max(calc(${width * 1.5}px * ${
                    partners?.length
                  }), 100%)`,
                  width: `${width}px`,
                } as any
              }
            >
              <Image
                key={id}
                src={logo}
                alt={name}
                height={300}
                width={300}
                className={`w-full h-auto aspect-square object-contain rounded-2xl grayscale`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
