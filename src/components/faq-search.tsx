"use client";
import useCreateQueryString from "@/hook/use-create-query-string";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useCallback, useState } from "react";

export default function FAQSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCreateQueryString();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      router.push("/support" + "?" + createQueryString("search", search));
    },
    [search, pathname, createQueryString]
  );
  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <label className=" flex items-center p-4 text-gray_text-400 bg-white gap-3 rounded-xl w-full">
        <Search />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="How can we help you?"
          className=" w-full text-base focus:border-none focus-visible:outline-none text-primary"
        />
      </label>
    </form>
  );
}
