import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export default function OurStats({
  value,
  label,
  icon,
  textClassName,
  bgClassName,
}: {
  value: string;
  label: string;
  icon: ReactNode;
  textClassName: string;
  bgClassName: string;
}) {
  return (
    <div className={cn(" flex flex-col items-center gap-3", textClassName)}>
      <div className={cn(" rounded-full p-3", bgClassName)}>{icon}</div>
      <span className=" font-bold text-2xl">{value}</span>
      <p className=" text-gray_text-700">{label}</p>
    </div>
  );
}
