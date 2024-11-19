import Image from "next/image";
import Link from "next/link";

export default function Logo({ variant = 1 }: { variant?: 1 | 2 }) {
  return (
    <Link href="/" className="">
      <Image
        height={300}
        width={300}
        src={variant === 1 ? "/logo.png" : "/logo.svg"}
        alt="7thCare logo"
        title="7thCare logo"
        className="w-36 h-auto"
      />
    </Link>
  );
}
