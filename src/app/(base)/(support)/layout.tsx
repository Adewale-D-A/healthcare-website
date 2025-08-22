import BarGraphIcon from "@/assets/icons/bar";
import MailIcon from "@/assets/icons/mail";
import PhoneIcon from "@/assets/icons/phone";
// import BlurAndGradient from "@/components/animations/blur-and-gradient";
// import RequestADemoButton from "@/components/buttons/request-a-demo";
// import FAQSearch from "@/components/faq-search";
import NavMenu from "@/components/layout/nav-menu";
import SupportTabs from "@/components/support-tabs";
import { cn } from "@/utils/cn";
import {
  RequestADemoButton,
  BlurAndGradient,
  FAQSearch,
} from "@/components/dynamic-imports";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex bg-primary top-flare flex-col justify-center items-center">
      <NavMenu variant={2} />
      <section className="relative space-y-24  pt-16 lg:pt-24 pb-16 w-full flex flex-col items-center">
        <div className="w-full h-full max-w-screen-xl px-5 md:px-10 flex flex-col gap-6 items-center justify-center">
          <div className="w-full  overflow-hidden absolute bottom-[-150px] z-[-5] left-0  flex justify-center">
            <BlurAndGradient />
          </div>
          <h1 className="z-10 text-white text-5xl lg:text-7xl leading-none lg:leading-tight font-bold text-center max-w-screen-md">
            Support center
          </h1>
          <p className=" text-white text-base">
            Find answers and get help fast
          </p>
          <div className=" w-full max-w-screen-sm mt-16">
            <FAQSearch />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-24 flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex max-w-screen-lg px-5 lg:px-0 flex-col justify-center items-center gap-16">
          <div className="w-full flex flex-col gap-4 max-w-[500px] text-center items-center">
            <h4 className="text-4xl font-semibold leading-none lg:leading-tight text-transparent bg-sctn-two-text-gradient bg-clip-text">
              Frequently Asked Questions
            </h4>
          </div>
          <div className=" lg:px-10">
            <SupportTabs />
          </div>
          {children}
        </div>
      </section>

      <section className="w-full bg-white flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <div className=" w-full grid grid-col-1 lg:grid-cols-3 gap-5 items-stretch">
            <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer flex flex-col items-center">
              <div
                className={cn(
                  " rounded-full w-fit p-3 text-secondary bg-secondary/10"
                )}
              >
                <PhoneIcon />
              </div>
              <div className=" space-y-2">
                <h4 className=" font-bold text-lg text-gray_text-700 text-center">
                  Mobile support
                </h4>
                <p className=" text-gray_text-500">
                  Speak to our support agents
                </p>
              </div>
              <div className=" text-center">
                <h4 className=" font-bold text-2xl text-secondary">
                  +143 735 034 53
                </h4>
                <h4 className=" font-bold text-2xl text-secondary">
                  +234 911 688 9215
                </h4>
                <p className=" text-gray_text-400">Mon-Fri , 8AM -6PM PST</p>
              </div>
            </div>
            <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer flex flex-col items-center">
              <div
                className={cn(
                  " rounded-full w-fit p-3 text-secondary bg-secondary/10"
                )}
              >
                <MailIcon />
              </div>
              <div className=" space-y-2">
                <h4 className=" font-bold text-lg text-gray_text-700 text-center">
                  Email support
                </h4>
                <p className=" text-gray_text-500">
                  Speak to our support agents
                </p>
              </div>
              <div className=" text-center">
                <h4 className=" font-bold text-2xl text-secondary">
                  support@7thcare.com
                </h4>
                <p className=" text-gray_text-400">Response within 24 hours</p>
              </div>
            </div>
            <div className=" w-full rounded-lg border border-gray-100 p-7 space-y-8 hover:border-secondary hover:cursor-pointer flex flex-col items-center">
              <div
                className={cn(
                  " rounded-full w-fit p-3 text-secondary bg-secondary/10"
                )}
              >
                <BarGraphIcon />
              </div>
              <div className=" space-y-2">
                <h4 className=" font-bold text-lg text-gray_text-700 text-center">
                  In person support
                </h4>
                <p className=" text-gray_text-500">
                  Visit any of our locations
                </p>
              </div>
              <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className=" text-center">
                  <h4 className=" font-bold text-2xl text-secondary">
                    CANADA:
                  </h4>
                  <p className=" text-gray_text-400">
                    Unit 302, 2221 Yonge Street, Toronto ON, M4S 0B8.
                  </p>
                </div>
                <div className=" text-center">
                  <h4 className=" font-bold text-2xl text-secondary">
                    NIGERIA:
                  </h4>
                  <p className=" text-gray_text-400">
                    167, St. James House, Off Adetokunbo Admola Crescent, Wuse
                    II, Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  bg-[url('/assets/pattern.png')] bg-secondary rounded-none bg-right bg-no-repeat bg-cover flex flex-col gap-5 justify-center items-center">
        <div className="w-full py-24 flex max-w-screen-xl px-5 lg:px-0 flex-col justify-center items-center gap-8">
          <h4 className="text-4xl text-center text-white font-semibold leading-none lg:leading-tight text-transparent bg-sctn-two-text-gradient bg-clip-text">
            Still need help?
          </h4>
          <p className=" text-gray-200">
            Our support team is standing by to help you succeed with 7thCare.
          </p>
          <RequestADemoButton className=" bg-white text-secondary hover:bg-gray-200" />
        </div>
      </section>
    </main>
  );
}
