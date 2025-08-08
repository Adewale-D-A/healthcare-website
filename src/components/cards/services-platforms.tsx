import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";

export default function ServicesPlatformCard({
  title,
  description,
  features,
  Icon,
}: {
  title: string;
  description: string;
  features: string[];
  Icon: LucideIcon;
}) {
  return (
    <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer">
      <div
        className={cn(
          " rounded-full w-fit p-3",
          "bg-secondary/5",
          "text-secondary"
        )}
      >
        {<Icon />}
      </div>
      <div className=" space-y-4  text-gray_text-500">
        <h4 className=" font-bold text-lg text-gray_text-700">{title}</h4>
        <p className="">{description}</p>
        <ul className=" space-y-3 pt-4">
          {features.map((feature) => (
            <li key={feature} className=" flex items-center gap-3">
              <div className=" bg-green_variant h-3 w-3 rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
