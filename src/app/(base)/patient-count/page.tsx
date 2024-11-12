"use client";
import NavBar from "@/components/NavBar";
import CountUp from "react-countup";

export default function PatientCount() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full h-screen bg-[url('/medical_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50 w-full">
          <NavBar />
        </div>
        <div className="flex items-center justify-center flex-col gap-3 w-full h-full text-white">
          <div className=" font-jost bg-cover bg-center bg-no-repeat w-fit h-fit transition-all flex ">
            <div className=" flex items-center justify-center flex-col gap-2 w-full py-20 px-5 md:px-10">
              <h5 className="p-3 text-lg  md:text-3xl lg:text-7xl font-semibold uppercase text-primary-500">
                #<span className=" font-light">Patient</span> Count
              </h5>
              <CountUp
                className="text-[3.6rem] md:text-[7rem] lg:text-[10rem] font-extrabold text-primary-500 tracking-[0.4em]"
                start={0}
                end={150020}
                duration={5}
                useEasing={true}
                separator=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
