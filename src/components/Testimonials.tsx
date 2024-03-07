"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Ratings from "./ratings";

const Testimonials = ({
  testimonials,
  headerText,
  title,
  bgClass,
}: {
  testimonials: {
    id: string;
    name: string;
    position: string;
    title: string;
    rating: number;
    comment: string;
  }[];
  headerText: string;
  title: string;
  bgClass: string;
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
    <section
      className={`${
        bgClass ? bgClass : ""
      } flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col justify-center w-full ">
        <div className=" text-center flex justify-center items-center flex-col w-full mb-10">
          <h2 className="font-bold text-4xl my-3 text-white">{title}</h2>
          <p className="max-w-2xl ">{headerText}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 items-stretch flex-wrap">
          {testimonials
            ?.slice(testimonialPgVisited, testimonialPgVisited + 3)
            .map(
              (
                item: {
                  name: string;
                  position: string;
                  title: string;
                  rating: number;
                  comment: string;
                },
                index: number
              ) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex-1 flex gap-10 rounded-lg justify-center flex-col shadow-lg p-6 py-10 bg-white`}
                  >
                    <Ratings rating={item?.rating} />
                    <div className=" flex flex-col gap-3">
                      <h4 className=" text-3xl text-gray-800 font-semibold">
                        {item?.title}
                      </h4>
                      <p className="text-gray-700">{item?.comment}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div
                        className={`w-16 h-16 aspect-square rounded-full transition-all overflow-hidden flex justify-center items-center`}
                      >
                        <Image
                          src={"/leaf_sample.svg"}
                          alt={item?.name}
                          width={1000}
                          height={1000}
                          className="w-full h-auto"
                        />
                      </div>
                      <div>
                        <h6 className="font-bold text-xl">{item?.name}</h6>
                        <span className=" text-gray-500">{item?.position}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
        <div className="flex justify-center items-center gap-5 mt-10 text-white">
          <button
            title="previous"
            type="button"
            className={`${
              testimonialPgVisited < 1
                ? "bg-gray-300 text-gray-500"
                : "bg-primary-500"
            }  p-5 rounded-full`}
            onClick={() => showPrevTestimonials()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
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
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
