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
import {
  Banknote,
  Building,
  FlaskConical,
  HandHeart,
  StickyNote,
  UserLock,
} from "lucide-react";
import TestimonialsDataset from "@/assets/testimonials.json";
import OurStats from "@/components/cards/our-stats";
import ContactForm from "@/components/contactForm";
import Image from "next/image";
import { Button } from "@/components/buttons/button";
import DesignedFor from "@/components/animations/designed-for";

export default function Home() {
  return (
    <div className="w-full flex bg-[#102a56e6] flex-col justify-center items-center">
      {/* HERO */}
      <section className="top-flare relative min-h-screen space-y-24 w-full flex flex-col items-center bg-primary ">
        <NavMenu variant={2} />
        <div className="w-full h-full max-w-screen-xl pb-28 px-5 md:px-10 flex flex-col gap-6 items-center justify-center">
          <div className="w-full  overflow-hidden absolute top-[80px] z-[-5] left-0  flex justify-center">
            <BlurAndGradient />
          </div>
          <p className="border border-white/50 text-center  bg-white/5 flex text-sm items-center gap-2 p-2 rounded-lg text-white px-5">
            <StarIcon className=" size-4" />
            Product updates - AnonymizedCare now available!
          </p>
          <h1 className="z-10 text-white text-6xl lg:text-7xl leading-tight lg:leading-normal font-bold text-center max-w-screen-md">
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
          <div className=" space-y-6">
            <h4 className=" text-4xl leading-tight lg:leading-normal font-semibold text-transparent bg-sctn-two-text-gradient bg-clip-text">
              We automate healthcare so you can focus on what matters most –
              your patients.
            </h4>
            <p>
              Healthcare providers across Africa lose valuable hours daily to
              manual processes, endless paperwork, and disconnected systems. Our
              solutions eliminate operational bottlenecks, streamline workflows,
              and empower your team to deliver exceptional patient care
              efficiently and confidently.
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
                <OurStats {...item} key={item?.id} />
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
        <div className="w-full flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className="text-4xl font-semibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
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
        <div className="w-full flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-emibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
              The all-in-one platform for modern clinics
            </h4>
            <p>Real practitioners, real results</p>
          </div>
          <Testimonials testimonials={TestimonialsDataset} />
        </div>
      </section>

      {/* Contact */}
      <section className="w-full flex flex-col lg:flex-row items-stretch justify-center bg-white py-16 gap-10">
        <div className=" w-full text-7xl font-semibold flex flex-col items-center lg:items-end px-5 py-24 lg:p-16 justify-center gap-3 text-white rounded-none bg-right bg-no-repeat bg-cover bg-secondary bg-[url('/assets/pattern.png')] rounded-r-[36px]">
          <span className=" flex items-center gap-2">
            <Image
              src={"/assets/contact/heart_hand.jpg"}
              className=" rounded-full w-32 h-14 object-cover"
              alt="hear-hand"
              height={150}
              width={150}
            />{" "}
            Let&apos;s
          </span>{" "}
          <span className=" flex items-center gap-2">
            work{" "}
            <Image
              src={"/assets/contact/type_hand.jpg"}
              className=" rounded-full w-28 h-14 object-cover"
              alt="hear-hand"
              height={150}
              width={150}
            />{" "}
          </span>
          <span>together</span>
        </div>
        <div className=" w-full">
          <div className="w-full p-5 lg:p-0 max-w-[580px]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Targeted Users */}
      <section className="w-full bg-white bg-how-it-works-gradient pt-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-xl flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className=" text-4xl font-emibold leading-tight lg:leading-normal text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Designed for clinicians, by clinicians.
            </h4>
            <p>
              Let us handle the admin work so you can focus on your patients.
              Reclaim your time, your attention, and your care.
            </p>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-2">
            <Button className=" w-fit">Request a Demo</Button>
            <div className="w-full text-center lg:text-start flex items-center flex-col justify-center lg:flex-row ml-0 lg:ml-96">
              <svg
                width="102"
                height="63"
                viewBox="0 0 102 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.68772 1.66847C6.65472 1.29853 6.32807 1.0254 5.95814 1.0584C5.58821 1.0914 5.31507 1.41805 5.34807 1.78798L6.68772 1.66847ZM62.1709 26.269L62.4955 25.6801L62.4954 25.68L62.1709 26.269ZM35.946 50.5987L36.5782 50.3694L36.5782 50.3693L35.946 50.5987ZM101.465 39.9834C101.655 39.6643 101.55 39.2516 101.231 39.0615C100.912 38.8715 100.499 38.9761 100.309 39.2953L101.465 39.9834ZM0.405162 7.3213C0.186307 7.62137 0.252145 8.04204 0.552215 8.26089C0.852285 8.47975 1.27296 8.41391 1.49181 8.11384L0.405162 7.3213ZM5.89084 0.941149L6.21464 0.35175C5.91816 0.188877 5.54685 0.271577 5.34752 0.544877L5.89084 0.941149ZM13.0992 5.46928C13.4415 5.61341 13.8359 5.45276 13.98 5.11046C14.1241 4.76816 13.9635 4.37384 13.6212 4.22971L13.0992 5.46928ZM6.0179 1.72822C5.34807 1.78798 5.3481 1.78834 5.34815 1.78884C5.34818 1.78921 5.34824 1.78986 5.34831 1.79059C5.34844 1.79206 5.34863 1.79413 5.34887 1.79679C5.34936 1.80211 5.35007 1.8098 5.35102 1.81983C5.35291 1.83988 5.35573 1.86929 5.35955 1.90777C5.36719 1.98472 5.37883 2.09797 5.39503 2.24531C5.42744 2.53998 5.4781 2.97106 5.55146 3.52087C5.69818 4.62038 5.9358 6.19541 6.3001 8.10443C7.02833 11.9205 8.26462 17.0811 10.2977 22.4497C14.3493 33.1481 21.6442 44.8713 34.5877 48.1746L34.754 47.523L34.9203 46.8714C22.6389 43.7371 15.5658 32.5629 11.5555 21.9733C9.55771 16.698 8.33964 11.6169 7.62123 7.85231C7.26221 5.97101 7.02845 4.42097 6.88461 3.34298C6.8127 2.80405 6.76328 2.38327 6.73194 2.09828C6.71627 1.95579 6.70512 1.84725 6.69793 1.77488C6.69434 1.73869 6.69174 1.71155 6.69006 1.69372C6.68922 1.68481 6.68861 1.67822 6.68822 1.674C6.68803 1.67189 6.68789 1.67037 6.68781 1.66945C6.68777 1.66898 6.68774 1.66874 6.68772 1.66851C6.68771 1.66841 6.68772 1.66847 6.0179 1.72822ZM34.754 47.523L34.5877 48.1746C47.4233 51.4503 56.9602 47.4124 62.0514 41.7615C64.5861 38.9481 66.0337 35.714 66.1895 32.7824C66.3465 29.8284 65.1814 27.1609 62.4955 25.6801L62.1709 26.269L61.8462 26.858C64.0003 28.0456 64.9812 30.1737 64.8464 32.711C64.7104 35.2707 63.4285 38.2236 61.0521 40.8613C56.3211 46.1125 47.3096 50.0333 34.9203 46.8714L34.754 47.523ZM62.1709 26.269L62.4954 25.68C59.8943 24.247 56.4631 23.9809 52.9475 24.6149C49.4206 25.2509 45.7356 26.8041 42.572 29.1064C36.2376 33.7164 31.9024 41.4235 35.3138 50.828L35.946 50.5987L36.5782 50.3693C33.4275 41.6838 37.3648 34.5595 43.3635 30.1939C46.3664 28.0085 49.863 26.5378 53.1861 25.9385C56.5204 25.3373 59.6076 25.6246 61.8464 26.858L62.1709 26.269ZM35.946 50.5987L35.3138 50.8279C37.0415 55.5928 41.1324 58.928 46.4273 60.8484C51.7214 62.7686 58.2769 63.3006 65.0854 62.4344C78.6926 60.7033 93.4998 53.3585 101.465 39.9834L100.887 39.6393L100.309 39.2953C92.607 52.2291 78.2227 59.4073 64.9157 61.1002C58.2672 61.9461 51.935 61.4154 46.8858 59.5841C41.8375 57.753 38.1296 54.6478 36.5782 50.3694L35.946 50.5987ZM0.948487 7.71757L1.49181 8.11384L6.43417 1.33742L5.89084 0.941149L5.34752 0.544877L0.405162 7.3213L0.948487 7.71757ZM5.89084 0.941149C5.56705 1.53055 5.56708 1.53056 5.56713 1.53059C5.56718 1.53062 5.56725 1.53066 5.56735 1.53071C5.56754 1.53082 5.56782 1.53097 5.56819 1.53117C5.56893 1.53158 5.57003 1.53218 5.57148 1.53298C5.57439 1.53458 5.57871 1.53695 5.5844 1.54007C5.59578 1.54632 5.61266 1.55558 5.63472 1.56768C5.67884 1.59186 5.74367 1.62739 5.82668 1.6728C5.99271 1.76363 6.23148 1.89404 6.52273 2.05251C7.10513 2.36941 7.89777 2.79875 8.73827 3.24828C10.4027 4.13846 12.3033 5.13412 13.0992 5.46928L13.3602 4.8495L13.6212 4.22971C12.8969 3.92475 11.0628 2.96624 9.37258 2.06228C8.53578 1.61473 7.74612 1.18701 7.16556 0.871111C6.87532 0.713186 6.63744 0.583266 6.47219 0.492861C6.38956 0.447659 6.3251 0.41234 6.28133 0.388341C6.25944 0.376342 6.24273 0.367173 6.23151 0.361014C6.2259 0.357935 6.22166 0.355608 6.21884 0.354057C6.21742 0.353281 6.21637 0.352699 6.21566 0.352314C6.21531 0.352121 6.21505 0.351978 6.21488 0.351884C6.21479 0.351837 6.21473 0.351803 6.21469 0.35178C6.21465 0.351759 6.21464 0.35175 5.89084 0.941149Z"
                  fill="#181D27"
                />
              </svg>
              <p className=" text-lg max-w-sm font-caveat">
                Join thousands of clinicians building smarter, faster care
                systems.🚀
              </p>
            </div>
            <div className=" w-full overflow-x-hidden">
              <DesignedFor />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
