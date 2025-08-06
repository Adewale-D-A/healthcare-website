"use client";
import { cn } from "@/utils/cn";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const FAQContent = ({
  faqContents,
}: {
  faqContents: {
    category: string;
    title: string;
    content: string;
  }[];
}) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      {faqContents.map((item, index) => {
        return (
          <Disclosure key={index}>
            {({ open }) => (
              <div className=" border rounded-2xl p-4">
                <Disclosure.Button className="flex w-full justify-between text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                  <h6 className="text-black text-base">{item.title}</h6>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6",
                      open ? "rotate-180 transform" : "",
                      "text-black"
                    )}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className=" text-gray_text-500 mt-2">
                  {item.content}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default FAQContent;
