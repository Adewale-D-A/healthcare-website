import NavMenu from "@/components/layout/nav-menu";
import reachStats from "@/assets/reach-stats.json";
import { User2Icon } from "@/assets/icons/user";
// import BlurAndGradient from "@/components/animations/blur-and-gradient";
// import RequestADemoButton from "@/components/buttons/request-a-demo";
// import PatientCounterAnimation from "@/components/animations/patient-count";
import type { Metadata } from "next";
import metadataContent from "@/assets/seo-meta-data.json";
import {
  RequestADemoButton,
  PatientCounterAnimation,
  BlurAndGradient,
} from "@/components/dynamic-imports";

export const metadata: Metadata = metadataContent.patientCount;
export default function PatientCount() {
  return (
    <div className="w-full flex bg-[#102a56e6] flex-col justify-center items-center">
      {/* HERO */}
      <section className="top-flare relative space-y-24 pb-28 w-full flex flex-col items-center bg-primary ">
        <NavMenu variant={2} />
        <div className="w-full h-full max-w-screen-xl pb-28 px-5 md:px-10 flex flex-col gap-6 items-center justify-center">
          <div className="w-full  overflow-hidden absolute bottom-[-150px] z-[-5] left-0  flex justify-center">
            <BlurAndGradient />
          </div>
          <p className="border border-white/50 text-center  bg-white/5 flex text-sm items-center gap-2 p-2 rounded-lg text-white px-5">
            <User2Icon className=" size-4" />
            Patient count
          </p>
          <h1 className="z-10 text-white text-5xl lg:text-7xl leading-tight lg:leading-snug font-bold text-center max-w-screen-md">
            Live patient count
          </h1>
          <PatientCounterAnimation />
        </div>
      </section>
      <section className="w-full  relative flex flex-col overflow-hidden justify-center items-center gap-16 bg-white text-secondary py-28">
        <div className="w-full z-10 flex max-w-screen-md flex-col gap-16 justify-center items-center rounded-3xl p-5">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Our Reach
            </h4>
            <p className=" text-gray_text-800">
              Together, we are redefining healthcare accessibility.
            </p>
          </div>
          <div className="w-full flex  items-center justify-center lg:justify-between text-center flex-wrap gap-5">
            {reachStats.map((item) => (
              <div
                key={item?.id}
                className={" flex flex-col items-center gap-3"}
              >
                <span className=" font-bold text-4xl lg:text-6xl">
                  {item?.value}
                </span>
                <p className=" uppercase text-xs text-black font-semibold lg:font-bold">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-center text-white font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Partner with Us Today
          </h4>
          <p className=" text-gray-200">
            Join the fast-growing network of providers leveraging innovative
            health tech to save lives and improve care delivery.
          </p>
          <RequestADemoButton className=" bg-white text-secondary" />
        </div>
      </section>
    </div>
  );
}
