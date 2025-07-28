import ChartIcon from "@/assets/icons/chart";
import ClockIcon from "@/assets/icons/clock";
import StarIcon from "@/assets/icons/star";
import UserIcon from "@/assets/icons/user";
import AutomotateStats from "@/components/animations/automate-stats";
import BlurAndGradient from "@/components/animations/blur-and-gradient";
import HowItWorks from "@/components/animations/how-it-works";
import InfiniteScroll from "@/components/animations/image-infinite-scroll";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import FacilitiesCard from "@/components/cards/facilities";
import NavMenu from "@/components/layout/nav-menu";
import Testimonials from "@/components/Testimonials";
import EmbedYouTube from "@/components/youtube/embed";
import { cn } from "@/utils/cn";
import {
  Banknote,
  Building,
  FlaskConical,
  HandHeart,
  StickyNote,
  UserLock,
} from "lucide-react";
import TestimonialsDataset from "@/assets/testimonials.json";

export default function Home() {
  return (
    <div className="w-full flex bg-[#102a56e6] flex-col justify-center items-center">
      {/* HERO */}
      <section className="top-flare relative min-h-screen space-y-24 w-full flex flex-col items-center bg-primary ">
        <NavMenu variant={2} />
        <div className="w-full h-full max-w-screen-xl pb-28 px-5 md:px-10 flex flex-col gap-6 items-center justify-center">
          <div className="w-full absolute top-[80px] z-[-5] left-0  flex justify-center">
            <BlurAndGradient />
          </div>
          <p className="border border-white/50  bg-white/5 flex text-sm items-center gap-2 p-2 rounded-lg text-white px-5">
            <StarIcon className=" size-4" />
            Product updates - AnonymizedCare now available!
          </p>
          <h1 className="z-10 text-white text-7xl leading-normal font-bold text-center max-w-screen-md">
            Automate your Healthcare Business{" "}
          </h1>
          <RequestADemoButton className=" text-white" />
          <div className=" w-full  h-96 p-2 bottom-flare bg-white/10 rounded-3xl">
            <div className=" w-full h-full bg-primary rounded-3xl"></div>
          </div>
          <div className="w-full my-10 flex items-center justify-center">
            <InfiniteScroll />
          </div>
        </div>
      </section>

      <section className="w-full py-24 flex flex-col gap-5 bg-white justify-center items-center">
        <div className="w-full max-w-screen-xl px-5 md:px-10 flex flex-col lg:flex-row gap-5 lg:gap-10 items-start justify-center">
          <EmbedYouTube start={19} end={177} />
          <div className=" space-y-8">
            <h4 className=" text-4xl leading-normal font-bold text-transparent bg-sctn-two-text-gradient bg-clip-text">
              We automate healthcare so you can focus on what matters most –
              your patients.
            </h4>
            <p className=" text-gray-700">
              African healthcare providers waste countless hours on manual
              processes, paperwork, and disconnected systems. 7thCare eliminates
              operational friction so you can deliver exceptional patient care
            </p>
            <div className=" flex items-center justify-between">
              {[
                {
                  id: 1,
                  value: "2.5hrs",
                  label: "Saved daily",
                  icon: <ClockIcon className=" size-7" />,
                  textClassName: "text-[#00359E]",
                  bgClassName: "bg-[#00359E]/10",
                },
                {
                  id: 2,
                  value: "40%",
                  label: "Revenue Increase",
                  icon: <ChartIcon className=" size-7" />,
                  textClassName: "text-[#66C61C]",
                  bgClassName: "bg-[#66C61C]/10",
                },
                {
                  id: 3,
                  value: "15k+",
                  label: "Patients served",
                  icon: <UserIcon className=" size-7" />,
                  textClassName: "text-[#36BFFA]",
                  bgClassName: "bg-[#36BFFA]/10",
                },
              ].map((item) => (
                <div
                  key={item?.id}
                  className={cn(
                    " flex flex-col items-center gap-3",
                    item?.textClassName
                  )}
                >
                  <div className={cn(" rounded-full p-3", item?.bgClassName)}>
                    {item?.icon}
                  </div>
                  <span className=" font-bold text-2xl">{item?.value}</span>
                  <p className=" text-gray-700">{item?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS*/}
      <section className="w-full bg-white py-24 flex flex-col gap-5 bg-how-it-works-gradient justify-center items-center">
        <HowItWorks />
      </section>
      {/* EVERYTHING HEALTH */}
      <section className="w-full bg-white py-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className="text-4xl font-bold leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Everything your healthcare facility needs
            </h4>
            <p className=" text-gray-700">
              From small clinics to large hospital networks, our modular
              platform scales with your needs
            </p>
          </div>
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Hospital Management System",
                description:
                  "Complete operational control with patient flow, staff scheduling, and resource optimization",
                icon: <Building />,
                textClassName: "text-[#36BFFA]",
                bgClassName: "bg-[#36BFFA]/10",
              },
              {
                id: 2,
                title: "Pharmacy Management",
                description:
                  "Complete pharmacy operations with inventory control and prescription management",
                icon: <HandHeart />,
                textClassName: "text-[#66C61C]",
                bgClassName: "bg-[#66C61C]/10",
              },
              {
                id: 3,
                title: "Electronic Medical Records",
                description:
                  "Secure, intelligent patient records with AI-powered insights and seamless sharing",
                icon: <StickyNote />,
                textClassName: "text-[#36BFFA]",
                bgClassName: "bg-[#36BFFA]/10",
              },
              {
                id: 4,
                title: "Financial Management",
                description:
                  "Automated billing, insurance processing, and comprehensive financial analytics",
                icon: <Banknote />,
                textClassName: "text-[#66C61C]",
                bgClassName: "bg-[#66C61C]/10",
              },
              {
                id: 5,
                title: "Laboratory Management",
                description:
                  "Streamlined lab operations with automated workflows and real-time result tracking",
                icon: <FlaskConical />,
                textClassName: "text-[#36BFFA]",
                bgClassName: "bg-[#36BFFA]/10",
              },
              {
                id: 6,
                title: "Administrative Suite",
                description:
                  "Comprehensive admin tools for compliance, reporting, and operational excellence",
                icon: <UserLock />,
                textClassName: "text-[#66C61C]",
                bgClassName: "bg-[#66C61C]/10",
              },
            ].map((item) => (
              <FacilitiesCard {...item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
      <AutomotateStats />

      {/* Testimonials */}
      <section className="w-full bg-white py-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-bold leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
              The all-in-one platform for modern clinics
            </h4>
            <p className=" text-gray-700">Real practitioners, real results</p>
          </div>
          <Testimonials testimonials={TestimonialsDataset} />
        </div>
      </section>
    </div>
  );
}
