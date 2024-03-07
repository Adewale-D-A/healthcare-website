import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Services() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-full bg-[url('/services_bg_2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50">
          <NavBar />
        </div>
        <div className="w-full my-10 md:my-24  flex justify-center items-center px-5 md:px-10 text-shadow">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-6 justify-between items-center">
            <h1 className="w-full text-3xl md:text-6xl font-bold text-white text-center capitalize md:leading-tight">
              OUR SERVICES
            </h1>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className="z-10 w-full max-w-screen-xl  grid grid-cols-1 md:grid-cols-3 gap-10 justify-between my-24 px-5 md:px-10">
        {[
          {
            id: 1,
            icon: (
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
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            ),
            title: "Software Development",
            description:
              "Our solutions, built on architecture that makes them customisable and deployable to connect to any third party service.",
            url: "#",
          },
          {
            id: 2,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 h-12"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
            ),
            title: "Process Automation",
            description:
              "Our flagship product 7thCare HMS helps your healthcare business with end-to-end process automation.",
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
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            ),
            title: "Technical Advisory",
            description:
              "We provide technical advisory to help healthcare businesses, it's professionals and leaders make informed decisions.",
            url: "#",
          },
        ].map((item) => {
          return (
            <div className="w-full relative z-10" key={item?.id}>
              <div className="absolute top-0 left-0 z-0 flex items-center justify-center w-full">
                <div className=" text-white p-5 bg-primary-500 rounded-2xl">
                  {item?.icon}
                </div>
              </div>
              <div className="bg-gray-100 border shadow-lg rounded-2xl flex flex-col gap-5 text-center mt-12 py-20 p-5">
                <h6 className=" font-semibold">{item?.title}</h6>
                <p className=" text-gray-500">{item?.description}</p>
                <Link
                  href={item?.url}
                  className=" font-semibold text-primary-500 underline text-lg"
                >
                  More Info
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      <section className="w-full gradient-service py-16">
        <div className="bg-[url('/services_img.png')] bg-contain bg-left bg-no-repeat min-h-[500px] flex flex-col items-center justify-center">
          <div className=" w-full max-w-screen-xl flex justify-end items-center px-5 md:px-10 py-10 backdrop-wide">
            <div className=" text-gray-800 md:text-gray-300 max-w-xl flex flex-col gap-4">
              <h4 className=" text-2xl font-extrabold capitalize">
                BESPOKE SERVICES
              </h4>
              <p className=" text-sm leading-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.consectetur adipiscing Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                adipiscing Lorem ipsum dolor sit amet, adipiscing Lorem ipsum
                dolor sit amet,{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
