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
      <div className=" bg-[#E6E6EF] h-auto w-full aspect-[4/5] overflow-hidden flex items-center rounded-t-lg justify-center">
        <Image
          src={image}
          alt={name}
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full">
        <h6 className=" font-bold">{name}</h6>
        <p>{position}</p>
      </div>
    </div>
  );
}
