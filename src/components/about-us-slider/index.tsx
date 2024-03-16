"use client";

import { ReactNode, useState } from "react";
import HoverContext from "./hoverContent";

interface sliderProps {
  dataset: {
    id: number;
    icon: ReactNode;
    title: string;
    description: string;
    url: string;
  }[];
}

export default function Slider({ dataset }: sliderProps) {
  const [hover, setHover] = useState(0);
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 justify-between items-stretch my-24">
      {dataset.map((item) => {
        return (
          <div
            className="w-full relative overflow-hidden"
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(0)}
            key={item?.id}
          >
            <div className="w-full border rounded-t-lg shadow-xl">
              <div className="flex flex-col items-center gap-10 justify-center w-full  py-16">
                <div className=" text-white p-5 bg-secondary-500 rounded-full">
                  {item?.icon}
                </div>
                <h6 className=" text-xl font-semibold">{item?.title}</h6>
              </div>
              <div className="w-full rounded-b-lg h-2 gradient-service"></div>
            </div>
            {hover === item.id && (
              <HoverContext paragraph={item?.description} actionUrl="#" />
            )}
            {/* <div className="bg-gray-100 border items-stretch shadow-lg rounded-2xl flex flex-col gap-5 text-center mt-12 py-20 p-5">
                      <p className=" text-gray-500">{item?.description}</p>
                      <Link
                        href={item?.url}
                        className=" font-semibold text-primary-500 underline text-lg"
                      >
                        More Info
                      </Link>
                    </div> */}
          </div>
        );
      })}
    </div>
  );
}
