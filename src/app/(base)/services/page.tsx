import BotIcon from "@/assets/icons/bot";
import CodeIcon from "@/assets/icons/code";
import UserIcon from "@/assets/icons/user";
import Link from "next/link";

export default function Services() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-full bg-[url('/services_bg_2.jpg')]  pt-20 bg-cover bg-center bg-no-repeat">
        <div className="w-full my-10 md:my-24  flex justify-center items-center px-5 md:px-10 text-shadow">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-6 justify-between items-center">
            <h1 className="w-full text-3xl md:text-6xl font-bold text-white text-center capitalize md:leading-tight">
              OUR SERVICES
            </h1>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className="w-full max-w-screen-xl  grid grid-cols-1 md:grid-cols-3 gap-10 justify-between my-24 px-5 md:px-10">
        {[
          {
            id: 1,
            icon: <CodeIcon className="w-12 h-12" />,
            title: "Software Development",
            description:
              "Our solutions, built on architecture that makes them customisable and deployable to connect to any third party service.",
            url: "#",
          },
          {
            id: 2,
            icon: <BotIcon className="w-12 h-12" />,
            title: "Process Automation",
            description:
              "Our flagship product 7thCare HMS helps your healthcare business with end-to-end process automation.",
            url: "#",
          },
          {
            id: 3,
            icon: <UserIcon className="w-12 h-12" />,
            title: "Technical Advisory",
            description:
              "We provide technical advisory to help healthcare businesses, it's professionals and leaders make informed decisions.",
            url: "#",
          },
        ].map((item) => {
          return (
            <div className="w-full relative " key={item?.id}>
              <div className="absolute top-0 left-0 flex items-center justify-center w-full">
                <div className=" text-white p-5 bg-secondary-500 rounded-2xl">
                  {item?.icon}
                </div>
              </div>
              <div className="bg-gray-100 border rounded-2xl flex flex-col gap-5 text-center mt-12 py-20 p-5">
                <h6 className=" font-semibold text-2xl">{item?.title}</h6>
                <p className=" text-gray-500">{item?.description}</p>
                <Link
                  href={item?.url}
                  className=" font-semibold text-secondary-500 underline"
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
          <div className=" w-full max-w-screen-xl flex justify-end items-center px-5 md:px-10 py-10 backdrop-wide text-shadow-md ">
            <div className=" text-gray-800 md:text-gray-300 max-w-xl flex flex-col gap-4">
              <h4 className=" text-2xl font-extrabold capitalize">
                BESPOKE SERVICES
              </h4>
              <p className=" text-sm leading-9">
                Our flagship product is a world class hospital management system
                designed to meet the hospital management system (HMS) and
                operations needs of modern healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
