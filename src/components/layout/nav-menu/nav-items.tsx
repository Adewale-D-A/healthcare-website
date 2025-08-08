"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import navList from "@/assets/navMenu/index";
import ChevronDownIcon from "@/assets/icons/chevron-down";
import ChevronUpIcon from "@/assets/icons/chevron-up";
import {
  ChevronRight,
  HandHeart,
  HeartPulse,
  LucideIcon,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";

export default function NavItems() {
  const navRef = useRef() as any;

  // const [imgUrl, setImgUrl] = useState(
  //   navList.find((item) => item?.title?.toLowerCase() === "products")
  //     ?.subMenuContent[0]?.subContentOne[0]?.img
  // );
  const [imgUrl, setImgUrl] = useState("/menu-img/healthcare_automated.jpg");
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
    <div className="flex gap-10 items-center " ref={navRef}>
      {navList.map((item) => {
        return (
          <div
            key={item?.title}
            className={`w-fit flex items-center gap-2 group cursor-pointer text-nowrap ${
              pathname.includes(item?.url) ? "border-b-4 border-secondary " : ""
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
              <div className=" absolute top-0 left-0 z-10 hidden group-hover:flex text-white w-screen overflow-hidden">
                <div className="mt-24 bg-primary-light flex items-stretch rounded-b-3xl shadow-md z-10 w-full justify-center py-16">
                  {/* <div
                    style={{ minWidth: offset?.left - 60 }}
                    className="min-h-[calc(100vh-80px)] backdrop-bg-filter  border-gray-400"
                    onMouseEnter={() => setOpenMenu(false)}
                  ></div> */}
                  <div
                    // style={{ marginLeft: offset?.left }}
                    className={`w-full max-w-screen-xl flex items-start gap-24  px-5 lg:px-10 `}
                  >
                    <div className="w-full space-y-10 max-w-72">
                      <Image
                        src={"/assets/menu/mega-menu-ai.jpg"}
                        alt="ai"
                        height={500}
                        width={500}
                        className=" w-full h-auto rounded-2xl"
                      />
                      <p className=" text-2xl w-full text-wrap">
                        Introducing 7thSense, your personal AI assistant
                      </p>
                      <Link
                        href={"#"}
                        className=" flex items-center text-green_variant gap-2"
                      >
                        Learn more <ChevronRight className=" size-4" />
                      </Link>
                    </div>
                    <div className=" w-full grid grid-cols-2 justify-between gap-5 gap-y-28">
                      {[
                        {
                          id: 1,
                          label: "Services",
                          Icon: HandHeart,
                          url: "#",
                          subitems: [
                            { id: 1, label: "Tech Advisory", url: "#" },
                            { id: 2, label: "Process automation", url: "#" },
                            { id: 3, label: "Software development", url: "#" },
                          ],
                        },
                        {
                          id: 2,
                          label: "Telehealth Marketplace",
                          Icon: ShoppingCart,
                          url: "#",
                          subitems: [
                            { id: 1, label: "1-on-1 bookings", url: "#" },
                            { id: 2, label: "Consultations", url: "#" },
                            { id: 3, label: "Secured payments", url: "#" },
                            { id: 4, label: "What we do", url: "#" },
                          ],
                        },
                        {
                          id: 3,
                          label: "For Health Providers",
                          Icon: Stethoscope,
                          url: "#",
                          subitems: [
                            {
                              id: 1,
                              label: "HealthCare Automation System",
                              url: "#",
                            },
                            {
                              id: 2,
                              label: "Hospital Management System",
                              url: "#",
                            },
                            {
                              id: 3,
                              label: "Laboratory Management System",
                              url: "#",
                            },
                            {
                              id: 4,
                              label: "Pharmacy Management System",
                              url: "#",
                            },
                            {
                              id: 5,
                              label: "Billing Automation System",
                              url: "#",
                            },
                          ],
                        },
                        {
                          id: 4,
                          label: "For Patients",
                          Icon: HeartPulse,
                          url: "#",
                          subitems: [
                            { id: 1, label: "Telemedicine", url: "#" },
                            { id: 2, label: "Patient Portal", url: "#" },
                          ],
                        },
                      ].map((item) => (
                        <MenuItems key={item.id} {...item} />
                      ))}
                    </div>
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

function MenuItems({
  id,
  label,
  Icon,
  url,
  subitems,
}: {
  id: number;
  label: string;
  Icon: LucideIcon;
  url: string;
  subitems: { id: number; label: string; url: string }[];
}) {
  return (
    <div className=" w-full flex items-start gap-5">
      {<Icon className="text-green_variant" />}{" "}
      <div className=" space-y-4">
        <h6 className=" font-bold text-lg">{label}</h6>
        <div className=" flex flex-col gap-4">
          {subitems.map((item) => (
            <Link key={item.id} href={"#"}>
              {item?.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
