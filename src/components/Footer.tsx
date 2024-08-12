import Link from "next/link";
import Image from "next/image";

const FooterMenu = () => {
  return (
    <footer className=" w-full text-sm flex justify-center bg-primary-500 text-white py-36">
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row flex-wrap gap-10 justify-center md:justify-between md:gap-4 px-5 md:px-10">
        <div className="flex flex-col items-start gap-5">
          <Link href="/" className="w-full">
            <Image
              width={500}
              height={500}
              src={"/logo.svg"}
              alt="7thCare Logo"
              title="7thCare Logo"
              className=" md:w-36 w-60 h-auto"
            />
          </Link>
          <div className=" flex items-center gap-3 w-full text-xs md:text-sm">
            <h6 className=" font-semibold">CONNECT:</h6>
            <div className=" flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/7thcare"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className=" w-4 h-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </Link>
              <Link
                href="https://x.com/the7thcare"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className=" w-4 h-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/7thcare"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className=" w-4 h-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {[
          {
            sectionLabel: "SERVICES",
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
            sectionLabel: "PRODUCTS",
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
            <div key={section?.sectionLabel} className="flex flex-col gap-2">
              <Link
                href={section?.sectionUrl}
                className=" font-semibold text-2xl"
              >
                {section?.sectionLabel}
              </Link>
              <div className=" h-1 w-12 bg-secondary-500 mb-10"></div>
              <div className=" flex items-start flex-wrap gap-16">
                {section?.sectionItems?.map((itemsData) => (
                  <div key={itemsData?.section_header}>
                    <div className="flex flex-col gap-4">
                      <p className=" font-semibold text-white">
                        {itemsData?.section_header}
                      </p>
                      {itemsData?.section_header && (
                        <div className=" h-[1px] w-full bg-white"></div>
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
          <Link href={"#"} className=" font-semibold text-2xl">
            ADDRESS
          </Link>
          <div className=" h-1 w-12 bg-secondary-500 mb-10"></div>
          <div className=" flex flex-col items-start flex-wrap gap-3 max-w-72">
            <div className="w-full flex items-center gap-3 text-gray-300 border-b pb-3 border-green-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <span>+14373503453</span>
            </div>
            <Link
              href="mailto:info@7thcare.com"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center gap-3 text-gray-300 border-b pb-3 border-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
              </svg>{" "}
              info@7thcare.com
            </Link>
            <div className="flex flex-col gap-5 text-gray-300">
              <span className="flex flex-col gap-2 w-full">
                <span className="font-semibold">CANADA:</span>
                <div className="flex items-center gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </div>
                  Unit 302, 2221 Yonge Street,
                  <br />
                  Toronto ON, M4S 0B8.
                </div>
              </span>
              <span className="flex flex-col gap-2 w-full">
                <span className="font-semibold">NIGERIA:</span>
                <div className="flex items-center gap-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </div>
                  167, St. James House, Off Adetokunbo Admola Crescent, Wuse II,
                  Abuja, Nigeria
                </div>
              </span>
            </div>
          </div>
          <div className=" w-full flex justify-start md:justify-center mt-5">
            <div className="flex items-center gap-5">
              <div className=" w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h6 className=" text-xl text-gray-400">TALK TO US</h6>
                <h5 className="text-2xl font-semibold">+14373503453</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;
