import Image from "next/image";
import Link from "next/link";

export default function Team({
  id,
  name,
  position,
  email,
  linkedin,
  twitter,
  image,
}: {
  id: string;
  name: string;
  position: string;
  email: string;
  linkedin: string;
  twitter: string;
  image: string;
}) {
  return (
    <div className={`w-full flex flex-col gap-3 pb-10`}>
      <div className=" w-full bg-[#E6E6EF] overflow-hidden flex items-center rounded-t-lg justify-center pt-10">
        <Image
          src={image}
          alt={name}
          height={500}
          width={500}
          className="w-full h-full object-contain hover:scale-110 transition-all"
        />
      </div>
      <div className="w-full">
        <h6 className=" font-bold">{name}</h6>
        <p>{position}</p>
      </div>
    </div>
  );
}
