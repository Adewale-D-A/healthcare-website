import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contactForm";
import Testimonials from "@/components/Testimonials";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-screen bg-[url('/home_bg_gif.gif')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50 w-full">
          <NavBar />
        </div>
        <div className="w-full calc-height flex justify-center items-center px-5 md:px-10 text-shadow">
          <div className="w-full max-w-screen-xl flex flex-col gap-6 justify-center items-center">
            <h1 className=" text-3xl md:text-6xl font-bold text-white text-center capitalize max-w-5xl">
              AUTOMATE YOUR <span className=" text-green-300">HEALTHCARE</span>{" "}
              BUSINESS WITH OUR SOLUTIONS
            </h1>
            <p className=" text-md md:text-xl text-white text-center max-w-3xl">
              Streamline operations, enhance patient care, and maximise
              efficiency with our custom healthcare automation solutions and
              personalised guidance from expert advisors.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full max-w-screen-xl flex flex-col gap-3 justify-center items-center  px-5 md:px-10">
        <section className="grid grid-cols-2 gap-10 md:flex md:gap-5 items-center justify-between px-10 py-5 md:min-h-[5vh]">
          {[
            { imageUrl: "/99apartment_logo.png" },
            { imageUrl: "/logo-99k.png" },
            { imageUrl: "/morgen-green-logo.png" },
            { imageUrl: "/puclothing_logo.png" },
            { imageUrl: "/trybz_logo.png" },
          ].map((item, index) => {
            return (
              <div key={index} className="p-3 grayscale opacity-50">
                <Image
                  src={item.imageUrl}
                  alt="supported by"
                  width={500}
                  height={500}
                  className="w-auto h-16"
                />
              </div>
            );
          })}
        </section>
      </div>
      <section className="flex w-full flex-col md:flex-row ">
        {[
          {
            bg_url: "bg-[url('/nurse.jpg')]",
            header_text:
              "We are Revolutionising Healthcare Digitisation & Automation",
            sub_text:
              "Our flagship product is a world class hospital management system designed to meet the hospital management system (HMS) and operations needs of modern healthcare providers.",
            btn_url: "#",
            btn_text: "More about automated healthcare",
          },
          {
            bg_url: "bg-[url('/advicing.jpg')]",
            header_text:
              "We Deliver Professional Consultation & Technical Advisory",
            sub_text:
              "We provide you with expertise and technical advisory to help you make informed decision for your health care business",
            btn_url: "#",
            btn_text: "More about technical consultations",
          },
        ].map((item, index) => (
          <div
            key={item?.btn_text}
            className={`flex flex-col gap-10 items-center ${
              index % 2 === 1 ? "md:items-start" : "md:items-end"
            } ${
              item?.bg_url
            } bg-cover bg-right bg-no-repeat py-28 px-10 w-full text-white bg-black`}
          >
            <div className="flex flex-col gap-10 h-full max-w-lg items-stretch justify-between">
              <h3 className=" text-4xl font-semibold">{item?.header_text}</h3>
              <p> {item?.sub_text} </p>
              <Link
                href={item?.bg_url}
                className=" rounded-full px-8 py-4 border border-white hover:border-primary-500 transition-all w-fit text-center"
              >
                {item?.btn_text}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* services */}
      <section className="w-full max-w-screen-xl flex text-center flex-col gap-3 justify-center items-center  px-5 md:px-10 my-24 ">
        <h3 className=" text-4xl font-semibold">Services we Provide</h3>
        {/* <p className=" text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 mt-16">
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
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
              ),
              header_text: "Hospital Management System",
              content: "Lorem ipsum dolor sit amet conse",
            },
            {
              id: 2,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z" />
                </svg>
              ),
              header_text: "Electronic Health Records System",
              content: "Lorem ipsum dolor sit amet conse",
            },
            {
              id: 3,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
              header_text: "Laboratory Management System",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
            },
            {
              id: 4,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.5 1.042a3 3 0 0 0 0 5.917zm1 5.917a3 3 0 0 0 0-5.917z" />{" "}
                </svg>
              ),
              header_text: "Pharmacy Management System",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
            },
            {
              id: 5,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />{" "}
                </svg>
              ),
              header_text: "Billing Automation System",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
            },
            {
              id: 6,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-10 h-10 md:w-16 md:h-16 text-primary-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z" />
                  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018" />{" "}
                </svg>
              ),
              header_text: "HealthCare Automation System",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
            },
          ].map((item) => (
            <div key={item?.id} className="flex flex-col gap-3 items-center">
              {item?.icon}
              <h5 className=" text-lg md:text-2xl font-semibold">
                {item?.header_text}
              </h5>
              {/* <p className=" text-gray-500 text-sm md:text-md">
                {item?.content}
              </p> */}
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex items-center justify-center py-24 mb-10 gradient-bg ">
        <div className="w-full max-w-screen-xl flex flex-col gap-3 justify-center items-center  px-5 md:px-10">
          <div className=" text-center text-white flex flex-col jusitfy-center items-center gap-3">
            <h4 className=" text-4xl font-semibold  max-w-screen-lg">
              We are a leading Provider of optimal Healthcare Automation in
              Africa
            </h4>
            {/* <p className=" text-sm max-w-screen-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mattis, ligula et tincidunt venenatis, massa leo rhoncus nulla.
            </p> */}
          </div>
          <div className="flex mt-16 items-center gap-4 gradient-blue rounded-2xl bg-[url('/leaf_sample.svg')] bg-contain bg-right bg-no-repeat text-white ">
            <div className="flex items-center gap-4 p-5">
              <div className=" p-2 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className=" font-semibold">
                7thcare is Designed to Meet the Stringent US HIPPA Guidelines
              </p>
            </div>
            <div className=" h-full">
              <Image
                src={"/leaf_sample.svg"}
                className="w-auto h-full"
                alt="green"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 justify-between mt-16">
            {[
              {
                value: "32K+",
                label: "ACTIVE PATIENTS",
              },
              {
                value: "20K+",
                label: "MEDICAL CENTRES",
              },
              {
                value: "25%",
                label: "MONTHLY INCREASE",
              },
              {
                value: "28K",
                label: "EXCELLENT FEEDBACK",
              },
            ].map((item) => (
              <div
                key={item?.value}
                className="flex flex-col gap-3 text-white w-full text-center"
              >
                <h3 className=" font-bold text-5xl md:text-7xl">
                  {item?.value}
                </h3>
                <p className=" font-semibold text-xs">{item?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* contact */}
      <section
        id="#contact"
        className="w-full max-w-screen-xl flex flex-col md:flex-row gap-10 items-center  px-5 md:px-10 my-24 "
      >
        <div className="w-full">
          <h2 className="text-gradient text-3xl md:text-5xl">
            See how 7thCare can help you grow your healthcare business.
          </h2>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
      {/* Testimonials */}

      <section
        id="#testimonials"
        className="w-full flex items-center justify-center  bg-[url('/testimonials_bg.jpg')]  bg-opacity-20 bg-black bg-cover bg-right bg-no-repeat"
      >
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-10 items-center  px-5 md:px-10 my-24">
          {" "}
          <Testimonials
            testimonials={[
              {
                id: "1",
                name: "DR. GREGORY OYINLOYE",
                position: "LEAH MEDICAL FOUNDATION",
                title: "Greate Product!",
                rating: 3,
                comment:
                  "7THCARE HMS IS ONE OF THE MOST ROBOST HOSPITAL AUTOMATION SOFTWARE OUT THERE",
              },
              {
                id: "2",
                name: "DR. WALE AHMED",
                position: "MEDICAL PRACTITIONER",
                title: "Excellent Service",
                rating: 2,
                comment:
                  "THE EFFICIENCY OF THEIR SOLUTION HAS HELPED US CUT DOWN COST AND BLOCK LEAKAGES.",
              },
              {
                id: "3",
                name: "DR. PROSPER OHAYAGHA",
                position: "COMMISIONER FOR HEALTH",
                title: "Excellent Solution",
                rating: 5,
                comment:
                  "OUR HEALTH MINISTRY NOW HAVE APPRIOPRIATE DATA TO MAKE INFORMED DECISIONS",
              },
            ]}
            headerText=""
            title="What Our Clients Say"
            bgClass=""
          />
        </div>
      </section>
      {/* Join */}
      <section
        id="#"
        className="w-full  flex items-center justify-center  bg-[url('/7thcare_bg.png')] bg-cover md:bg-contain bg-right bg-no-repeat py-24"
      >
        <div className="w-full max-w-screen-xl px-5 md:px-10 backdrop-wide py-16 ">
          <div className="w-full max-w-2xl flex flex-col gap-10 ">
            <b className=" text-primary-500">ARE YOU A MEDICAL CONSULTANT?</b>
            <h2 className="text-gradient text-5xl">
              See how 7thCare can help you grow your healthcare business.
            </h2>
            {/* <p className=" text-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mattis, ligula et tincidunt venenatis, massa leo rhoncus nulla.
            </p> */}
            <Link
              href="#"
              className="gradient-bg p-4 rounded-full text-white w-fit px-8 text-center"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
