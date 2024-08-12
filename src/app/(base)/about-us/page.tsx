import NavBar from "@/components/NavBar";
import Slider from "@/components/about-us-slider";

export default function AboutUs() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-full bg-[url('/support_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50 w-full">
          <NavBar />
        </div>
        <div className="w-full my-10 md:my-24  flex justify-center items-center px-5 md:px-10 text-shadow">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-6 justify-between items-center">
            <h1 className="w-full text-3xl md:text-6xl font-bold text-white text-center capitalize md:leading-tight">
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className=" w-full max-w-screen-xl px-5 md:px-10">
        <Slider
          dataset={[
            {
              id: 1,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="2-12 h-12"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                  <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              ),
              title: "Our Mission",
              description:
                "Our aim is to ensure healthcare data are properly aggregated to enhance delivery of health services to patients across hospitals all over the African Continent.",
              url: "#",
            },
            {
              id: 2,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Our Vision",
              description:
                "Our long term goal is to make healthcare services accessible from all localities across Africa and ensure health data are secure, properly aggregated and available to relevant authorities to make informed decision",
              url: "#",
            },
            {
              id: 3,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              title: "Our Approach",
              description:
                "Our flagship product is a world class health care automation system designed to meet the hospital management system (HMS) and operations needs of modern healthcare providers.",
              url: "#",
            },
          ]}
        />
      </section>

      {/* our journey */}
      <section className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center my-24 px-5 md:px-10">
        <h3 className=" text-4xl font-extrabold">OUR JOURNEY</h3>
        <div className="w-full">
          {[
            {
              id: 1,
              title: "Ideation & Research",
              description:
                "With years of experience on health tech, the 7thCare idea was birthed",
            },
            {
              id: 2,
              title: "Development Journey",
              description:
                "Covid thought us the need for health automation and digitization",
            },
            {
              id: 3,
              title: "Proof Of Concept",
              description:
                "We started POC with medical centres clinics, laboratories etc",
            },
            {
              id: 4,
              title: "Incorporation",
              description:
                "We became fully incorporated, ready to find market-fit",
            },
            // {
            //   id: 4,
            //   title: "Market Entry",
            //   description:
            //     "We're currently in the market helping healthcare businesses",
            // },
          ].map((item, index) => (
            <div
              key={item?.id}
              className={`w-full flex  ${
                index % 2 === 1 ? "justify-start" : " justify-end"
              }`}
            >
              <div
                className={`w-full md:w-1/2 flex  py-10 items-center justify-between gap-4 border-[#003B67] ${
                  index % 2 === 1
                    ? "border-l-4 md:border-l-0 md:border-r-4 md:flex-row-reverse"
                    : " border-l-4 mr-1"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#003B67"
                  className={`w-12 h-12 text-[#003B67] ${
                    index % 2 === 1 ? "flip" : ""
                  }`}
                >
                  <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                </svg>
                <div className="w-full flex flex-col md:max-w-96 gap-4 shadow-xl p-5 text-center">
                  <h3 className=" text-2xl text-primary-500 capitalize font-extrabold">
                    {item?.title}
                  </h3>
                  <p className=" text-gray-500 ">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
