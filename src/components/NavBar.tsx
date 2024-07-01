"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import navItems from "../assets/navMenu";
import SupportModal from "./supportModal";

const NavBar = () => {
  const pathname = usePathname();
  //toggle mobile menu logic definition
  const hideShowNavbarRef = useRef() as any;

  const [openContactModal, setOpenContactModal] = useState(false);
  //set the mobile menu display to none on page load
  useEffect(() => {
    hideShowNavbarRef.current.style.display = "none";
  }, []);
  //target html tags for toggle effect on mobile navbar menu onClick
  const CloseResponsiveNavBar = () => {
    hideShowNavbarRef.current.style.display = "none";
  };
  const OpenResponsiveNavBar = () => {
    hideShowNavbarRef.current.style.display = "";
  };

  useEffect(() => {
    CloseResponsiveNavBar();
  }, [pathname]);

  return (
    <>
      <nav className=" flex justify-center text-white w-full">
        {/* //desktop view  */}
        <div className="w-full backdrop-bg-filter rounded-b-xl hidden md:flex justify-center ">
          <div className="w-full flex justify-between items-center max-w-screen-xl px-5 md:px-10 py-5 shadow-lg">
            <Link href="/" className=" bg-secondary-500 p-2 rounded-lg">
              <Image
                height={1000}
                width={1000}
                src={"/logo.svg"}
                alt="7thCare logo"
                title="7thCare logo"
                className="w-24 h-auto"
              />
            </Link>
            <div className="flex items-center gap-6">
              {navItems.map((menus) => {
                return (
                  <div key={menus?.label} className="group z-50 relative flex ">
                    <div className="flex items-center gap-1">
                      <Link href={menus?.url} className=" text-sm">
                        {menus?.label}
                      </Link>
                      {menus?.hasSubMenu && (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 group-hover:hidden block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 group-hover:block hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    {menus.hasSubMenu && (
                      <div className="w-[300px] z-30 hidden absolute top-0 left-0 pt-10 group-hover:flex flex-col gap-3">
                        <div className="w-full flex flex-col gap-1 bg-gray-200 rounded-r-lg rounded-b-lg text-gray-600 px-5 py-2">
                          {menus?.subMenu?.map((subMenu) => {
                            return (
                              <Link
                                key={subMenu?.label}
                                className="w-full flex items-center border-b border-gray-300 gap-4 hover:bg-gray-400/40 transition-all py-2 px-2"
                                href={subMenu?.url}
                                id="icon-menu"
                              >
                                {subMenu?.iconUrl ? (
                                  <Image
                                    height={400}
                                    width={400}
                                    src={subMenu?.iconUrl}
                                    alt={subMenu?.label}
                                    title={subMenu?.label}
                                    className=" w-8 h-auto"
                                  />
                                ) : (
                                  subMenu?.icon
                                )}
                                <span>{subMenu?.label}</span>{" "}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setOpenContactModal(true)}
              className="bg-secondary-500 p-3 px-5 rounded-3xl w-fit text-white hover:bg-primary-500 transition-all cursor-pointer"
            >
              Request a Demo
            </button>
          </div>
        </div>

        {/* mobile view  */}
        <div className="block md:hidden w-full py-5 backdrop-bg-filter rounded-b-xl">
          <div className="flex w-full items-center justify-between px-5 ">
            <button
              type="button"
              className=""
              title="open menu bar"
              // ref={showResponsiveNavbarRef}
              onClick={() => OpenResponsiveNavBar()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <Link href="/" className="">
                <Image
                  height={400}
                  width={400}
                  src="/logo.svg"
                  alt="home"
                  title="home"
                  className="h-8 w-auto"
                />
              </Link>

              <Link
                href={"#"}
                className="bg-secondary-500 p-3 px-5 rounded-3xl w-fit text-white hover:bg-primary-500 transition-all cursor-pointer"
              >
                Request a Demo
              </Link>
            </div>
          </div>
          <div
            className="z-20 fixed top-0 left-0 w-full h-screen bg-[#000000e6] bg-[url('/noise-10.png')]  bg-repeat"
            ref={hideShowNavbarRef}
          >
            <div className="flex w-full justify-end">
              <button
                className=" bg-white p-2 group text-red-500"
                title="close"
                type="button"
                onClick={() => CloseResponsiveNavBar()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 group-hover:rotate-180 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full flex flex-col gap-2 px-5 text-white mt-5">
              {navItems.map((menus) => {
                return (
                  <div
                    key={menus?.label}
                    className=" flex items-center gap-4 relative group hover:bg-secondary-500/60 hover:pl-10 transition-all rounded-lg"
                  >
                    <Link
                      className=" flex items-center gap-4 w-full  py-4 px-3"
                      href={menus?.url}
                      id="icon-menu"
                    >
                      {menus?.iconUrl ? (
                        <Image
                          height={400}
                          width={400}
                          src={menus?.iconUrl}
                          alt="home"
                          title="home"
                          className=" w-8 h-auto"
                        />
                      ) : (
                        menus?.icon
                      )}
                      <span>{menus?.label}</span>{" "}
                      {menus?.hasSubMenu && (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 group-hover:hidden block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 group-hover:block hidden"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      )}
                    </Link>

                    {menus.hasSubMenu && (
                      <div className="w-full z-30 hidden absolute top-0 left-0 pt-10 group-hover:flex flex-col gap-3">
                        <div className=" flex flex-col gap-1 bg-primary-500 rounded-lg text-white px-5 py-2">
                          {menus?.subMenu?.map((subMenu) => {
                            return (
                              <Link
                                key={subMenu?.label}
                                className=" flex items-center gap-4 w-full hover:bg-gray-400/40 rounded-lg transition-all py-2 px-2"
                                href={subMenu?.url}
                                id="icon-menu"
                              >
                                {subMenu?.iconUrl ? (
                                  <Image
                                    height={400}
                                    width={400}
                                    src={subMenu?.iconUrl}
                                    alt={subMenu?.label}
                                    title={subMenu?.label}
                                    className=" w-8 h-auto"
                                  />
                                ) : (
                                  subMenu?.icon
                                )}
                                <span>{subMenu?.label}</span>{" "}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <SupportModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </>
  );
};

export default NavBar;
