import EyeIcon from "@/assets/icons/eye";
import StarIcon from "@/assets/icons/star";
import TargetIcon from "@/assets/icons/target";
import OurGoalsCard from "@/components/cards/our-goals";
import DoctorOnMap from "@/components/doctor-on-map";
import NavMenu from "@/components/layout/nav-menu";
import Image from "next/image";
import leadership from "@/assets/team.json";
import Team from "@/components/cards/team";
// import InfiniteScroll from "@/components/animations/image-infinite-scroll";
// import RequestADemoButton from "@/components/buttons/request-a-demo";
// import OurJourneyAnimation from "@/components/animations/our-jouney";
// import SkewedInfiniteScroll from "@/components/animations/skewed-infinite-scroll";
import GraphLine from "@/components/animations/graph-line";
import type { Metadata } from "next";
import metadataContent from "@/assets/seo-meta-data.json";
import {
  RequestADemoButton,
  InfiniteScroll,
  OurJourneyAnimation,
  SkewedInfiniteScroll,
} from "@/components/dynamic-imports";

export const metadata: Metadata = metadataContent.aboutUs;
export default function AboutUs() {
  return (
    <div className="w-full bg-white bg-how-it-works-gradient">
      <NavMenu variant={1} />
      <section className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h2 className="text-6xl text-transparent bg-sctn-two-text-gradient bg-clip-text lg:text-7xl font-bold flex flex-col lg:flex-row items-center gap-4">
            We are{" "}
            <span className=" flex items-center gap-2">
              7thcar
              <div className="w-fit rounded-full bg-secondary p-3">
                <Image
                  src={"/assets/about_us/logo.png"}
                  alt="7thCare"
                  height={200}
                  width={200}
                  className=" h-8 lg:h-12 w-auto aspect-square"
                />
              </div>
            </span>
          </h2>
          <p className=" text-center max-w-xl text-lg">
            Our aim is to bring healthcare in Africa up to speed with
            well-connected data, improving patient care across the board.
          </p>
        </div>
        <DoctorOnMap />
      </section>
      <section className="w-full bg-white flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-16 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <p className=" text-center">
            Trusted by clinicians and healthcare staff worldwide efficiently and
            confidently.
          </p>
          <InfiniteScroll />
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5 items-center">
            {[
              {
                id: 1,
                title: "Our mission",
                description:
                  "Our aim is to ensure healthcare data are properly aggregated to enhance delivery of health services to patients across hospitals all over the African Continent.",
                icon: <TargetIcon className="size-5" />,
              },
              {
                id: 2,
                title: "Vision",
                description:
                  "Our long term goal is to make healthcare services accessible from all localities across Africa and ensure health data are secure, properly aggregated and available to relevant authorities to make informed decision.",
                icon: <EyeIcon className="size-5" />,
              },
              {
                id: 3,
                title: "Our Approach",
                description:
                  "Our flagship product is a world class health care automation system designed to meet the hospital management system (HMS) and operations needs of modern healthcare providers.",
                icon: <StarIcon className="size-5" />,
              },
            ].map((item) => (
              <OurGoalsCard {...item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-16 px-5 lg:px-10">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Our Journey{" "}
            </h4>
            <p>Key milestones in our mission to transform healthcare</p>
          </div>
          <OurJourneyAnimation />
        </div>
      </section>

      <section className="w-full bg-white pt-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-5 px-5 lg:px-10">
          <h4 className=" text-4xl font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Meet the team
          </h4>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {leadership.map(
              ({ id, image, name, position, linkedin, twitter }) => (
                <div key={id}>
                  <Team
                    id={id}
                    image={image}
                    position={position}
                    name={name}
                    linkedin={linkedin}
                    twitter={twitter}
                    email=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <section className="w-full   bg-primary flex flex-col gap-5 justify-center items-center pt-20 pb-16 lg:pb-36">
        <div className=" w-full flex flex-col lg:flex-row items-center justify-between max-w-screen-xl text-white px-5 lg:px-10">
          <h3 className=" text-3xl font-semibold">Implementation Flow</h3>
          <p className=" max-w-xs text-center lg:text-left">
            In five simple steps we able to implement our worldclass solution
            for your business
          </p>
        </div>
        <div className=" w-full max-h-[300px] lg:max-h-[1500px]">
          <GraphLine />
        </div>
        <SkewedInfiniteScroll />
      </section>
      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-center text-white font-semibold leading-tight lg:leading-snug text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Ready to transform your practice?
          </h4>
          <p className=" text-gray-200">
            Join thousands of healthcare providers who have modernized their
            practice with 7thCare
          </p>
          <RequestADemoButton className=" bg-white text-secondary" />
        </div>
      </section>
    </div>
  );
}
