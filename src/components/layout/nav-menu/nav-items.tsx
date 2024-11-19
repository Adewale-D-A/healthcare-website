"use client";

import Link from "next/link";

import navList from "@/assets/navMenu/index";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ChevronDownIcon from "@/assets/icons/chevron-down";
import ChevronUpIcon from "@/assets/icons/chevron-up";

export default function NavItems() {
  const navRef = useRef() as any;

  const pathname = usePathname();
  const [offset, setOffSet] = useState({ left: 0, top: 0, width: 0 });

  //populate state with hovered sub menu content
  const [hoverContent, setHoverContent] = useState<
    {
      id: string;
      name: string;
      url: string;
      subContentOne: {
        id: string;
        name: string;
        url: string;
        description: string;
      }[];
      subContentTwo: {
        id: string;
        name: string;
        url: string;
        description: string;
      }[];
    }[]
  >([]);
  const [openMegaMenu, setOpenMenu] = useState(true);

  //get and update state on nav menu's position on window
  useEffect(() => {
    const updateState = () => {
      const navRefPosition = navRef?.current;
      const topOffset = navRefPosition?.offsetTop;
      const leftOffset = navRefPosition?.offsetLeft;
      const parentWidth = navRefPosition?.parentElement?.clientWidth;
      setOffSet({ left: leftOffset, top: topOffset, width: parentWidth });
    };
    updateState();
    // Add a listener for changes to the screen size
    // Add the callback function as a listener for changes to the media query
    window.addEventListener("resize", updateState);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, [navRef]);

  return (
    <div className="flex gap-10 items-center" ref={navRef}>
      {navList.map((item) => {
        return (
          <div
            key={item?.title}
            className={`w-fit flex items-center gap-2 group cursor-pointer text-nowrap ${
              pathname.includes(item?.url)
                ? "border-b-4 border-primary-500 "
                : ""
            } transition-all`}
          >
            <Link
              href={item?.url}
              onMouseEnter={() => {
                setOpenMenu(true);
                setHoverContent(item.subMenuContent);
              }}
              className=" group-hover:cursor-pointer transition-all z-20 text-sm py-[18px] flex items-center gap-2"
            >
              {item?.title}
              {item?.subMenu && (
                <div className=" flex items-center">
                  <ChevronDownIcon className="w-5 h-5 group-hover:hidden  transition-all" />
                  <ChevronUpIcon className="w-5 h-5 hidden group-hover:block  transition-all" />
                </div>
              )}
            </Link>
            {item?.subMenu && openMegaMenu && hoverContent?.length > 0 && (
              <div className=" absolute top-0 left-0 z-10 hidden group-hover:flex text-primary-500">
                <div className="mt-24 flex justify-center items-stretch rounded-lg shadow-md z-10 w-[100vw]">
                  <div
                    style={{ width: offset?.left }}
                    className=" w-full h-[calc(100vh-80px)] backdrop-bg-filter  border-gray-400"
                    onMouseEnter={() => setOpenMenu(false)}
                  ></div>
                  <div
                    // style={{ marginLeft: offset?.left }}
                    className={`flex flex-col gap-4 px-3 font-semibold group-hover:flex bg-[#E6E6EF] w-[100vw] border-t border-gray-400`}
                  >
                    {item?.subMenuContent.map((childOne, index) => {
                      return (
                        <div
                          style={{ maxWidth: `${offset.width + 100}px` }}
                          key={childOne?.id}
                          className={`w-full group/category flex ${
                            item?.subMenuContent[index + 1]?.name
                              ? "border-b-[1px] border-[#B0B0B4]/30"
                              : ""
                          }  py-10 gap-16 text-wrap`}
                        >
                          <Link
                            href={childOne?.url}
                            className={`max-w-72 h-fit flex-[0.2] capitalize transition-all text-primary-500`}
                          >
                            {childOne?.name}
                          </Link>
                          <div className=" flex flex-col gap-5 flex-[0.4]  max-w-72 ">
                            {childOne?.subContentOne.map((value) => {
                              return (
                                <div key={value?.id}>
                                  {value?.description ? (
                                    <div className="flex flex-col gap-4">
                                      <Link
                                        href={value?.url}
                                        className=" w-full h-fit  transition-all underline capitalize "
                                      >
                                        {value?.name}
                                      </Link>
                                      <Link
                                        href={value?.url}
                                        className=" w-full h-fit  transition-all font-normal  "
                                      >
                                        {value?.description}
                                      </Link>
                                    </div>
                                  ) : (
                                    <Link
                                      href={value?.url}
                                      className=" w-full h-fit  transition-all underline capitalize"
                                    >
                                      {value?.name}
                                    </Link>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          <div className=" flex flex-col gap-4 flex-[0.4]  max-w-72 ">
                            {childOne?.subContentTwo.map((value) => {
                              return (
                                <div key={value?.id}>
                                  {value?.description ? (
                                    <div className="flex flex-col gap-4">
                                      <Link
                                        href={value?.url}
                                        className=" w-full h-fit  transition-all underline capitalize "
                                      >
                                        {value?.name}
                                      </Link>
                                      <Link
                                        href={value?.url}
                                        className=" w-full h-fit  transition-all font-normal  "
                                      >
                                        {value?.description}
                                      </Link>
                                    </div>
                                  ) : (
                                    <Link
                                      href={value?.url}
                                      className=" w-full h-fit  transition-all underline capitalize"
                                    >
                                      {value?.name}
                                    </Link>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
