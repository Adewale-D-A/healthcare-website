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
const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialsType[];
}) => {
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
      <div className="flex flex-col justify-center w-full ">
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 items-stretch flex-wrap">
          {testimonials
            ?.slice(testimonialPgVisited, testimonialPgVisited + 3)
            .map((item, index: number) => {
              return (
                <div
                  key={index}
                  className={`w-full border border-gray-100  flex-1 flex gap-10 rounded-lg justify-center flex-col p-6 py-10`}
                >
                  <Ratings rating={item?.rating} />
                  <h4 className=" text-lg text-secondary bg-secondary/5 rounded-md font-semibold p-4">
                    {item?.highlight}
                  </h4>
                  <p className="text-black text-sm">"{item?.comment}"</p>
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
        {/* <div className="flex justify-center items-center gap-5 mt-10 text-white">
          <button
            title="previous"
            type="button"
            className={`${
              testimonialPgVisited < 1
                ? "bg-gray-300 text-gray-500"
                : "bg-primary-500"
            }  p-5 rounded-full`}
            onClick={() => showPrevTestimonials()}
          > Back
          </button>
          <button
            type="button"
            title="next"
            className={`${
              testimonialsTotalPgCnt <= testimonialCurrPg
                ? "bg-gray-300 text-gray-500"
                : "bg-primary-500"
            }  p-5 rounded-full`}
            onClick={() => showNextTestimonials()}
          > Next
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
