import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function OurGoalsCard({
  id,
  title,
  description,
  icon,
}: {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer flex flex-col items-center">
      <div
        className={cn(" rounded-full w-fit p-3 text-secondary bg-secondary/10")}
      >
        {icon}
      </div>
      <div className=" space-y-2">
        <h4 className=" font-bold text-lg text-gray_text-700 text-center">
          {title}
        </h4>
        <p className=" text-gray_text-500">{description}</p>
      </div>
    </div>
  );
}
