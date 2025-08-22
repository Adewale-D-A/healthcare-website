import AnonymousIcon from "@/assets/icons/anonymous";
import Desktop from "@/assets/icons/desktop";
import MouseIcon from "@/assets/icons/mouse";
import QuestionIcon from "@/assets/icons/question";
import StarIcon from "@/assets/icons/star";
import TeachIcon from "@/assets/icons/teach";
// import RequestADemoButton from "@/components/buttons/request-a-demo";
import ServicesHeroCards from "@/components/cards/services-hero";
import ServicesPlatformCard from "@/components/cards/services-platforms";
import NavMenu from "@/components/layout/nav-menu";
import { cn } from "@/utils/cn";
import { BarChart, Calendar, File, Users, Video, Wallet } from "lucide-react";
import type { Metadata } from "next";
import metadataContent from "@/assets/seo-meta-data.json";
import { RequestADemoButton } from "@/components/dynamic-imports";

export const metadata: Metadata = metadataContent.services;
export default function Services() {
  return (
    <div className="w-full bg-white bg-how-it-works-gradient">
      <NavMenu variant={1} />
      <section className="w-full flex flex-col gap-5  justify-center items-center">
        <div className="w-full pt-10 lg:pt-16 pb-20 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <p className="border text-center  flex text-sm items-center gap-2 p-2 rounded-lg text-secondary bg-[#91D9FF14] px-5">
            <StarIcon className=" size-4" />
            Our services
          </p>
          <h2 className="text-6xl lg:text-7xl text-secondary font-bold">
            Services
          </h2>
          <p className=" text-center max-w-xl text-lg">
            Comprehensive healthcare automation solutions designed to streamline
            your practice and improve patirnt care
          </p>
          <div className=" w-full space-y-5 mt-10">
            <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <MouseIcon className="size-6" />,
                  imgUrl: "/assets/services-hero/1.png",
                  title: "Implementation & integration",
                  bgClassName: "bg-[url('/assets/services-hero/1.png')]",
                  description:
                    "Seamlessly deploy, customize, and unify all modules within your 7thCare software suite.",
                },
                {
                  icon: <Desktop className="size-6" />,
                  imgUrl: "/assets/services-hero/2.png",
                  bgClassName: "bg-[url('/assets/services-hero/2.png')]",
                  title: "Custom development",
                  description:
                    "Build proprietary features tailored to your organization's specific needs.",
                },
                {
                  icon: <TeachIcon className="size-6" />,
                  imgUrl: "/assets/services-hero/3.png",
                  bgClassName: "bg-[url('/assets/services-hero/3.png')]",
                  title: "Training & Onboarding",
                  description:
                    "Build extra features, enhancements or proprietary modules tailored to your needs.",
                },
              ].map((item) => (
                <ServicesHeroCards key={item?.title} {...item} />
              ))}
            </div>
            <div className=" w-full flex flex-col lg:flex-row gap-5 items-stretch">
              {[
                {
                  icon: <QuestionIcon className="size-6" />,
                  title: "Support & maintenance",
                  imgUrl: "/assets/services-hero/4.png",
                  bgClassName: "bg-[url('/assets/services-hero/4.png')]",
                  description:
                    "Our team ensures continuous operational excellence with proactive monitoring, regular software updates, security upgrades, and 24/7 troubleshooting.",
                },
                {
                  icon: <AnonymousIcon className="size-6" />,
                  title: "Anonymized Care",
                  imgUrl: "/assets/services-hero/5.png",
                  bgClassName: "bg-[url('/assets/services-hero/5.png')]",
                  description:
                    "AnonymizedCare solution ensures secure data anonymization, enabling your hospital or research team to utilize patient data insights for research, AI training, and health outcome analytics without compromising confidentiality.",
                },
              ].map((item, index) => (
                <div
                  key={item?.title}
                  className={cn(
                    "w-full",
                    index === 0
                      ? " flex-1 lg:flex-[0.4]"
                      : " flex-1 lg:flex-[0.6]"
                  )}
                >
                  <ServicesHeroCards {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className="text-4xl font-semibold leading-none lg:leading-tight text-transparent bg-sctn-two-text-gradient bg-clip-text">
              The all-in-one platform
            </h4>
            <p className=" text-gray-700">
              From small clinics to large hospital networks, our modular
              platform scales with your needs
            </p>
          </div>
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Smart Scheduling",
                description:
                  "Automated appointment booking with intelligent conflict resolution and patient reminders.",
                features: [
                  "Online booking portal",
                  "Automated reminders",
                  "Waitlist management",
                  "Calendar integration",
                ],
                Icon: Calendar,
              },
              {
                title: "Patient Management",
                description:
                  "Comprehensive patient database with medical history, insurance, and communication tools.",
                features: [
                  "Digital patient records",
                  "Medical history tracking",
                  "Insurance verification",
                  "Communication portal",
                ],
                Icon: Users,
              },
              {
                title: "Electronic Medical Records",
                description:
                  "Secure, intelligent patient records with AI-powered insights and seamless sharing.",
                features: [
                  "Digital chart management",
                  "Lab results integration",
                  "Prescription tracking",
                  "Clinical notes",
                ],
                Icon: File,
              },
              {
                title: "Billing & Payments",
                description:
                  "Automated billing system with insurance claims processing and payment tracking.",
                features: [
                  "Automated billing",
                  "Insurance claims",
                  "Payment processing",
                  "Financial reporting",
                ],
                Icon: Wallet,
              },
              {
                title: "Telemedicine",
                description:
                  "HIPAA-compliant video consultations with integrated scheduling and documentation.",
                features: [
                  "HD video calls",
                  "Screen sharing",
                  "Digital prescriptions",
                  "Session recording",
                ],
                Icon: Video,
              },
              {
                title: "Analytics & Reporting",
                description:
                  "Comprehensive insights into practice performance, patient outcomes, and operational efficiency.",
                features: [
                  "Treatment insights",
                  "Financial analytics",
                  "Operational benchmarks",
                  "Custom reports",
                ],
                Icon: BarChart,
              },
            ].map((item) => (
              <ServicesPlatformCard key={item?.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-center text-white font-semibold leading-none lg:leading-tight text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Ready to transform your practice?
          </h4>
          <p className=" text-gray-200">
            Join thousands of healthcare providers who have modernized their
            practice with 7thCare
          </p>
          <RequestADemoButton className=" bg-white text-secondary hover:bg-gray-200" />
        </div>
      </section>
    </div>
  );
}
