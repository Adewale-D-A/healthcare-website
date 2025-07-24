import StarIcon from "@/assets/icons/star";
import BlurAndGradient from "@/components/animations/blur-and-gradient";
import InfiniteScroll from "@/components/animations/image-infinite-scroll";
import RequestADemoButton from "@/components/buttons/request-a-demo";
import NavMenu from "@/components/layout/nav-menu";

export default function Home() {
  return (
    <div className="w-full flex bg-[#102a56e6] flex-col justify-center items-center">
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
          <h1 className="z-10 text-white text-7xl leading-tight font-bold text-center max-w-screen-md">
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
    </div>
  );
}
