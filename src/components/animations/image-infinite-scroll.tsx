import Image from "next/image";
import partners from "@/assets/partners.json";

export default function InfiniteScroll() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full logos py-3 whitespace-nowrap max-w-screen-xl overflow-hidden relative before:absolute before:top-0 before:w-20 before:contents-[''] before:z-[2] before:h-full before:left-0 after:absolute after:top-0 after:w-20 after:contents-[''] after:z-[2]  after:h-full after:right-0">
        <div className="logos-slide flex gap-10">
          {partners.map(({ id, logo, name }) => (
            <Image
              key={id}
              src={logo}
              alt={name}
              height={300}
              width={300}
              className={`h-16`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
