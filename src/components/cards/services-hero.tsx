import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function ServicesHeroCards({
  icon,
  imgUrl,
  title,
  description,
}: {
  icon: ReactNode;
  imgUrl: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative h-full min-h-96 rounded-2xl overflow-hidden">
      <Image
        src={imgUrl}
        alt="Background"
        className="w-full h-full object-cover"
        height={1000}
        width={1000}
      />
      <div className="absolute inset-0 bg-primary/80 "></div>
      <div className="absolute left-0 text-white bottom-10 z-10 p-4 lg:pr-16 space-y-3">
        <div>
          {icon}
          <h6 className=" font-semibold text-lg">{title}</h6>
        </div>
        <p className=" text-gray_text-200">{description}</p>
      </div>
    </div>
  );
}
