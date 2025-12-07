import Link from "next/link";
import LinkedIn from "@/assets/icons/linkedIn";
import Twitter from "@/assets/icons/twitter";
import Instagram from "@/assets/icons/instagram";
import Logo from "../../business-styles/logo";
export default function FooterMenu() {
  return (
    <footer className=" w-full text-sm flex justify-center bg-primary-dark text-white py-10 ">
      <div className="w-full max-w-screen-xl flex flex-col gap-1">
        <div className="w-full  backdrop-bg-filter rounded-2xl overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center lg:justify-between lg:gap-10 px-5 md:px-10 py-10">
            <div className=" max-w-[300px] w-full space-y-8 text-gray_text-400">
              <Logo variant={2} />
              <p>
                Transforming African healthcare with world class technology
                solutions
              </p>
              <div className=" flex items-center gap-4 ">
                {[
                  {
                    id: 1,
                    icon: <LinkedIn className="w-4 h-4" />,
                    title: "LinkedIn",
                    url: "https://www.linkedin.com/company/7thcare",
                  },
                  {
                    id: 2,
                    icon: <Twitter className="w-4 h-4" />,
                    title: "X",
                    url: "https://x.com/the7thcare",
                  },
                  {
                    id: 3,
                    icon: <Instagram className="w-4 h-4" />,
                    title: "Instagram",
                    url: "https://www.instagram.com/7thcare",
                  },
                ].map(({ id, icon, url, title }) => (
                  <Link
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    title={title}
                    className=" p-2 rounded-full hover:scale-125 transition-all text-white"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" w-full flex justify-between">
              <div className=" space-y-8">
                {[
                  {
                    sectionLabel: "1",
                    sectionUrl: "#",
                    sectionItems: [
                      {
                        section_header: "Solutions",
                        desction_data: [
                          {
                            label: "Hospital Management ",
                            url: "#",
                          },
                          {
                            label: "Laboratory Management ",
                            url: "#",
                          },
                          {
                            label: "Pharmacy Management",
                            url: "#",
                          },
                          {
                            label: "Electronic Health Records",
                            url: "#",
                          },
                          {
                            label: "Billing Automation ",
                            url: "#",
                          },
                        ],
                      },
                    ],
                  },
                  // {
                  //   sectionLabel: "2",
                  //   sectionUrl: "#",
                  //   sectionItems: [
                  //     {
                  //       section_header: "For Patients",
                  //       desction_data: [
                  //         {
                  //           label: "Telemedicine",
                  //           url: "#",
                  //         },
                  //         {
                  //           label: "Patient Portal",
                  //           url: "#",
                  //         },
                  //       ],
                  //     },
                  //   ],
                  // },
                ].map((section) => (
                  <FooterSectionIten key={section?.sectionLabel} {...section} />
                ))}
              </div>
              <div>
                {[
                  {
                    sectionLabel: "3",
                    sectionUrl: "#",
                    sectionItems: [
                      {
                        section_header: "Company",
                        desction_data: [
                          {
                            label: "About us",
                            url: "#",
                          },
                          {
                            label: "Our mission",
                            url: "#",
                          },
                          {
                            label: "Careers",
                            url: "#",
                          },
                          {
                            label: "Press",
                            url: "#",
                          },
                          {
                            label: "Contact",
                            url: "#",
                          },
                        ],
                      },
                    ],
                  },
                ].map((section) => {
                  return (
                    <FooterSectionIten
                      key={section?.sectionLabel}
                      {...section}
                    />
                  );
                })}
              </div>
              <div>
                {[
                  {
                    sectionLabel: "4",
                    sectionUrl: "#",
                    sectionItems: [
                      {
                        section_header: "For Patients",
                        desction_data: [
                          {
                            label: "Telemedicine",
                            url: "#",
                          },
                          {
                            label: "Patient Portal",
                            url: "#",
                          },
                        ],
                      },
                    ],
                  },
                ].map((section) => {
                  return (
                    <FooterSectionIten
                      key={section?.sectionLabel}
                      {...section}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-full border-t border-gray-700 text-gray_text-400 pt-5 text-xs p-3 px-5 flex flex-col md:flex-row justify-between gap-10">
            <Link
              target="_blank"
              rel="noreferrer"
              href={"mailto:info@7thcare.com"}
              className=" font-bold text-theme_green"
            >
              @2025 7thCare. All rights reserved
            </Link>

            <div className="flex items-center gap-3">
              <span>Privacy policy</span>
              <span>Terms of Service</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterSectionIten = ({
  sectionLabel,
  sectionUrl,
  sectionItems,
}: {
  sectionLabel: string;
  sectionUrl: string;
  sectionItems: {
    section_header: string;
    desction_data: {
      label: string;
      url: string;
    }[];
  }[];
}) => {
  return (
    <div className=" flex items-start flex-wrap gap-16">
      {sectionItems?.map((itemsData) => (
        <div key={itemsData?.section_header}>
          <div className="flex flex-col gap-4">
            <p className=" font-semibold text-white">
              {itemsData?.section_header}
            </p>
            {itemsData?.section_header && (
              <div className=" h-[1px] w-full"></div>
            )}
            <div className="flex flex-col gap-4 text-gray_text-400">
              {itemsData?.desction_data?.map((items) => {
                return (
                  <Link
                    key={items?.label}
                    href={items?.url}
                    className=" max-w-72"
                  >
                    {items?.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
