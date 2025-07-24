"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/utils/cn";
const linkVariants = cva(
  "inline-flex items-center text-sm gap-[6px] justify-center whitespace-nowrap rounded-lg font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: " bg-secondary",
        outline: "border border-[#717680]",
      },
      size: {
        default: "px-4 lg:px-6 py-2 md:py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
interface LinkProp
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string; // required
  as?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  passHref?: boolean;
  legacyBehavior?: boolean;
}

export default function LinkButton({
  children,
  variant,
  size,
  className,
  ...rest
}: LinkProp) {
  return (
    <Link {...rest} className={cn(linkVariants({ variant, size, className }))}>
      {children}
    </Link>
  );
}
