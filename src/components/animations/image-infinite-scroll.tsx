"use client";
import Image from "next/image";
import partners from "@/assets/partners.json";

export default function InfiniteScroll() {
  const width = 100;
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full logos py-3 whitespace-nowrap max-w-screen-xl overflow-hidden relative before:absolute before:top-0 before:w-20 before:contents-[''] before:z-[2] before:h-full before:left-0 after:absolute after:top-0 after:w-20 after:contents-[''] after:z-[2]  after:h-full after:right-0">
        <div
          style={{ height: width + 10 }}
          className={`w-full wrapper whitespace-nowrap max-w-screen-xl relative overflow-hidden`}
        >
          {partners.map(({ id, logo, name }, index) => (
            <div
              className={` animate-infiniteScroll border border-white/10 shadow-md rounded-2xl p-2 lg:p-3 item${
                index + 1
              } absolute`}
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
