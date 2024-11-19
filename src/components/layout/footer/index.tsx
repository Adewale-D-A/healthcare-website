import Link from "next/link";
import LinkedIn from "@/assets/icons/linkedIn";
import Twitter from "@/assets/icons/twitter";
import Instagram from "@/assets/icons/instagram";
import Logo from "../../business-styles/logo";
import PhoneIcon from "@/assets/icons/phone";
import MapIcon from "@/assets/icons/map";

const FooterMenu = () => {
  return (
    <footer className=" w-full text-sm flex justify-center bg-primary-500 text-white py-10  md:bg-[url('/counter_bg_2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-screen-xl flex flex-col gap-1">
        <Logo variant={2} />
        <div className="w-full  backdrop-bg-filter rounded-2xl overflow-hidden">
          <div className="w-full flex flex-col md:flex-row flex-wrap gap-10 justify-center md:justify-between md:gap-4 px-5 md:px-10 py-10">
            {[
              {
                sectionLabel: "Services",
                sectionUrl: "#",
                sectionItems: [
                  {
                    section_header: "",
                    desction_data: [
                      {
                        label: "Technical Advisory",
                        url: "#",
                      },
                      {
                        label: "Process Automation",
                        url: "#",
                      },
                      {
                        label: "Software Development",
                        url: "#",
                      },
                    ],
                  },
                ],
              },
              {
                sectionLabel: "Products",
                sectionUrl: "#",
                sectionItems: [
                  {
                    section_header: "For Health Providers",
                    desction_data: [
                      {
                        label: "HealthCare Automation System",
                        url: "#",
                      },
                      {
                        label: "Hospital Management System",
                        url: "#",
                      },
                      {
                        label: "Laboratory Management System",
                        url: "#",
                      },
                      {
                        label: "Pharmacy Management System",
                        url: "#",
                      },
                      {
                        label: "Electronic Health Records",
                        url: "#",
                      },
                      {
                        label: "Billing Automation System",
                        url: "#",
                      },
                    ],
                  },
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
                <div
                  key={section?.sectionLabel}
                  className="flex flex-col gap-2"
                >
                  <Link
                    href={section?.sectionUrl}
                    className=" font-semibold text-2xl text-theme_green"
                  >
                    {section?.sectionLabel}
                  </Link>
                  <div className=" h-1 w-12 bg-theme_green mb-5"></div>
                  <div className=" flex items-start flex-wrap gap-16">
                    {section?.sectionItems?.map((itemsData) => (
                      <div key={itemsData?.section_header}>
                        <div className="flex flex-col gap-4">
                          <p className=" font-semibold text-white">
                            {itemsData?.section_header}
                          </p>
                          {itemsData?.section_header && (
                            <div className=" h-[1px] w-full bg-theme_green"></div>
                          )}
                          <div className="flex flex-col gap-4 text-gray-300">
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
                </div>
              );
            })}

            <div className="flex flex-col gap-2">
              <Link
                href={"#"}
                className=" font-semibold text-2xl text-theme_green"
              >
                Address
              </Link>
              <div className=" h-1 w-12 bg-theme_green  mb-5"></div>
              <div className=" flex flex-col items-start flex-wrap gap-3 max-w-72">
                <div className="w-full flex items-center gap-3 text-gray-300 border-b pb-3 border-theme_green">
                  <PhoneIcon className="w-5 h-5 text-theme_green" />
                  <span>+2349116889215 | +14373503453</span>
                </div>

                <div className="flex flex-col gap-5 text-gray-300">
                  <span className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3 text-theme_green">
                      <MapIcon className="w-5 h-5" />
                      <span className="font-semibold">Nigeria:</span>
                    </div>
                    <div className="flex items-center gap-3">
                      167, St. James House, Off Adetokunbo Ademola Crescent,
                      Wuse II, Abuja, Nigeria
                    </div>
                  </span>
                  <span className="flex flex-col gap-2 w-full">
                    <div className="flex items-center gap-3 text-theme_green">
                      <MapIcon className="w-5 h-5 " />
                      <span className="font-semibold">Canada:</span>
                    </div>
                    <div>
                      Unit 302, 2221 Yonge Street,
                      <br />
                      Toronto ON, M4S 0B8.
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-primary-500 p-3 px-5 flex flex-col md:flex-row justify-between gap-10">
            <div>
              <div className=" flex items-center gap-4">
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
                    className=" bg-theme_green/5 p-2 rounded-full hover:scale-125 transition-all text-theme_green"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
              <Link
                target="_blank"
                rel="noreferrer"
                href={"mailto:info@7thcare.com"}
                className=" font-bold text-theme_green"
              >
                info@7thcare.com
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className=" w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
                <PhoneIcon className="w-5 h-5 text-theme_green" />
              </div>
              <div>
                <h6 className=" text-gray-400">Talk to us</h6>
                <h5 className="text-xl font-semibold text-theme_green">
                  +2349116889215
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
