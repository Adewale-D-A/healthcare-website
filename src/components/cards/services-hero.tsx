import { cn } from "@/utils/cn";
import Image from "next/image";
import { ReactNode } from "react";

export default function ServicesHeroCards({
  icon,
  imgUrl,
  title,
  description,
  bgClassName,
}: {
  icon: ReactNode;
  imgUrl: string;
  title: string;
  description: string;
  bgClassName: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full min-h-96 rounded-2xl overflow-hidden bg-right bg-no-repeat bg-cover",
        bgClassName
      )}
    >
      {/* <Image
        src={imgUrl}
        alt="Background"
        className="w-full h-full object-cover"
        height={1000}
        width={1000}
      /> */}
      {/* <div className="absolute inset-0 bg-[#3b568a]/90 "></div> */}
      <div className="absolute left-0 text-white bottom-10 z-10 p-4 lg:px-8 lg:pr-24 space-y-3">
        <div>
          {icon}
          <h6 className=" font-semibold text-lg mt-3">{title}</h6>
        </div>
        <p className=" text-gray_text-200">{description}</p>
      </div>
    </div>
  );
}
