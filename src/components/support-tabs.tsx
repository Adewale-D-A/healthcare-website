"use client";

import { Banknote, Hammer, NotebookText, Video } from "lucide-react";
import LinkButton from "./buttons/link-button";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export default function SupportTabs() {
  const pathname = usePathname();
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          id: 1,
          value: "all_topics",
          label: "All topics",
          url: "/support",
          icon: NotebookText,
        },
        {
          id: 2,
          value: "getting_started",
          label: "Getting started",
          url: "/support/getting-started",
          icon: Video,
        },
        {
          id: 3,
          value: "billing_payments",
          label: "Billing & Payments",
          url: "/support/billings-and-payments",
          icon: Banknote,
        },
        {
          id: 4,
          value: "technical_issues",
          label: "Technical issues",
          url: "/support/technical-issues",
          icon: Hammer,
        },
      ].map((item) => (
        <LinkButton
          key={item.id}
          href={item.url}
          className={cn(
            " flex items-center gap-2 text-white w-full",
            pathname === item.url
              ? " bg-secondary font-bold"
              : " bg-gray-100 text-gray_text-500"
          )}
        >
          {<item.icon />}
          {item.label}
        </LinkButton>
      ))}
    </div>
  );
}
