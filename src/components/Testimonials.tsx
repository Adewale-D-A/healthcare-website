"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Ratings from "./ratings";

type TestimonialsType = {
  id: number;
  rating: number;
  highlight: string;
  user: {
    image: string;
    name: string;
    position: string;
  };
  comment: string;
};

export default function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialsType[];
}) {
  const testimonialsTotalPgCnt =
    Math.ceil(testimonials?.length / 3) < 1
      ? 1
      : Math.ceil(testimonials?.length / 3);
  // testimonials sectin pagination states
  const [testimonialPgVisited, setTestimonialsPgVisited] = useState(0);
  const [testimonialCurrPg, setTestimonialCurrPg] = useState(1);

  // testimonials next function
  const showNextTestimonials = useCallback(() => {
    if (!(testimonialsTotalPgCnt <= testimonialCurrPg)) {
      setTestimonialCurrPg((prev) => prev + 1);
      setTestimonialsPgVisited((prev) => {
        return prev + 3;
      });
    }
  }, [testimonialsTotalPgCnt, testimonialCurrPg]);

  // testimonials next previous
  const showPrevTestimonials = useCallback(() => {
    if (!(testimonialPgVisited < 1)) {
      setTestimonialCurrPg((prev) => prev - 1);
      setTestimonialsPgVisited((prev) => {
        return prev - 3;
      });
    }
  }, [testimonialPgVisited]);

  return (
    <section className={`flex flex-col justify-center items-center`}>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 items-stretch flex-wrap">
        {testimonials
          ?.slice(testimonialPgVisited, testimonialPgVisited + 3)
          .map((item, index: number) => {
            return (
              <div
                key={index}
                className={`w-full border border-gray-100  flex-1 flex gap-5 rounded-lg justify-start flex-col p-6 py-10`}
              >
                <Ratings rating={item?.rating} />
                <h4 className=" text-md text-secondary bg-secondary/5 rounded-md font-semibold p-4">
                  {item?.highlight}
                </h4>
                <p className="text-black text-sm">
                  &quot;{item?.comment}&quot;
                </p>
                <div className="flex gap-3 items-center">
                  <div
                    className={`w-10 h-10 aspect-square rounded-full transition-all overflow-hidden flex justify-center items-center`}
                  >
                    <Image
                      src={"/leaf_sample.svg"}
                      alt={item?.user?.name}
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="font-bold">{item?.user?.name}</h6>
                    <span className=" text-gray-500 text-xs">
                      {item?.user?.position}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
