import EyeIcon from "@/assets/icons/eye";
import StarIcon from "@/assets/icons/star";
import TargetIcon from "@/assets/icons/target";
import InfiniteScroll from "@/components/animations/image-infinite-scroll";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import OurGoalsCard from "@/components/cards/our-goals";
import DoctorOnMap from "@/components/doctor-on-map";
import NavMenu from "@/components/layout/nav-menu";
import Image from "next/image";
import leadership from "@/assets/team.json";
import Team from "@/components/cards/team";
import OurJourneyAnimation from "@/components/animations/our-jouney";

export default function AboutUs() {
  return (
    <div className="w-full">
      <section className="w-full bg-white flex flex-col gap-5 bg-how-it-works-gradient justify-center items-center">
        <NavMenu variant={1} />
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <div className=" flex items-center gap-2">
            <h2 className="text-6xl text-transparent bg-sctn-two-text-gradient bg-clip-text lg:text-7xl font-bold">
              We are 7thcar
            </h2>
            <div className="w-fit rounded-full bg-secondary p-3">
              <Image
                src={"/assets/about_us/logo.png"}
                alt="7thCare"
                height={200}
                width={200}
                className=" h-12 w-auto aspect-square"
              />
            </div>
          </div>
          <p className=" text-center max-w-xl text-lg">
            Our aim is to bring healthcare in Africa up to speed with
            well-connected data, improving patient care across the board.
          </p>
        </div>
        <DoctorOnMap />
      </section>
      <section className="w-full bg-white flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <p>
            Trusted by clinicians and healthcare staff worldwide efficiently and
            confidently.
          </p>
          <InfiniteScroll />
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5">
            {[
              {
                id: 1,
                title: "Our mission",
                description:
                  "Our aim is to ensure healthcare data are properly aggregated to enhance delivery of health services to patients across hospitals all over the African Continent.",
                icon: <TargetIcon />,
              },
              {
                id: 2,
                title: "Vision",
                description:
                  "Our long term goal is to make healthcare services accessible from all localities across Africa and ensure health data are secure, properly aggregated and available to relevant authorities to make informed decision.",
                icon: <EyeIcon />,
              },
              {
                id: 3,
                title: "Our Approach",
                description:
                  "Our flagship product is a world class health care automation system designed to meet the hospital management system (HMS) and operations needs of modern healthcare providers.",
                icon: <StarIcon />,
              },
            ].map((item) => (
              <OurGoalsCard {...item} key={item?.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-white pt-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-emibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Our Journey{" "}
            </h4>
            <p>Key milestones in our mission to transform healthcare</p>
          </div>
          <OurJourneyAnimation />
        </div>
      </section>

      <section className="w-full bg-white pt-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-5">
          <h4 className=" text-4xl font-emibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
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

      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-white font-semibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
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
