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
    <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-5 hover:border-secondary hover:cursor-pointer">
      <div
        className={cn(" rounded-full w-fit p-3", bgClassName, textClassName)}
      >
        {icon}
      </div>
      <h4 className=" font-bold text-lg text-gray-600">{title}</h4>
      <p className=" text-gray-500">{description}</p>
    </div>
  );
}
