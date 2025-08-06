import { cn } from "@/utils/cn";
import {
  OurJourneyCardOne,
  OurJourneyCardTwo,
  OurJourneyCardThree,
  OurJourneyCardFour,
  OurJourneyCardFive,
} from "../cards/our-jouney";

export default function OurJourneyAnimation() {
  return (
    <div className=" w-full h-full space-y-8 lg:space-x-6 relative transition-all">
      {[
        {
          key: 1,
          element: <OurJourneyCardOne />,
        },
        {
          key: 2,
          element: <OurJourneyCardTwo />,
        },
        {
          key: 3,
          element: <OurJourneyCardThree />,
        },
        {
          key: 4,
          element: <OurJourneyCardFour />,
        },
        {
          key: 5,
          element: <OurJourneyCardFive />,
        },
      ].map((item, index) => (
        <div
          key={item?.key}
          className={cn(
            "w-full flex",
            index % 2 === 0 ? "justify-start lg:pr-10" : "justify-end lg:pl-10"
          )}
        >
          <div className="w-full lg:w-1/2">{item?.element}</div>
        </div>
      ))}
      <div className="w-full hidden lg:flex justify-center items-center absolute left-0 top-0">
        <svg
          viewBox="0 0 9 833"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-[9px] h-[700px]"
        >
          <path
            d="M4.31719 -8.74228e-09C4.18385 -2.91409e-09 4.05052 2.91409e-09 3.91719 8.74228e-09C3.75247 13.8712 3.59327 27.7424 3.43957 41.6136C1.29527 235.135 0.223128 428.656 0.223137 622.177C0.223139 678.337 1.01502 734.498 2.59877 790.658C2.98995 804.529 3.42943 818.401 3.91722 832.272C4.05056 832.272 4.18389 832.272 4.31722 832.272C4.80502 818.401 5.2445 804.529 5.63567 790.658C7.21942 734.498 8.0113 678.337 8.01129 622.177C8.01128 428.656 6.93912 235.135 4.79481 41.6136C4.64111 27.7424 4.4819 13.8712 4.31719 -8.74228e-09Z"
            fill="url(#paint0_linear_5121_6620)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5121_6620"
              x1="4.61722"
              y1="832.272"
              x2="4.61719"
              y2="-2.18557e-08"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007CD7" stopOpacity="0.57" />
              <stop offset="1" stopColor="#004171" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
