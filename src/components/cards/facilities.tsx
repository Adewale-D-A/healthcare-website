import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function FacilitiesCard({
  id,
  title,
  description,
  icon,
  textClassName,
  bgClassName,
}: {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  textClassName: string;
  bgClassName: string;
}) {
  return (
    <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer">
      <div
        className={cn(" rounded-full w-fit p-3", bgClassName, textClassName)}
      >
        {icon}
      </div>
      <div className=" space-y-2">
        <h4 className=" font-bold text-lg text-gray_text-700">{title}</h4>
        <p className=" text-gray_text-500">{description}</p>
      </div>
    </div>
  );
}
