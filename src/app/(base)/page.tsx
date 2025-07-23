import NavMenu from "@/components/layout/nav-menu";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className=" h-screen w-full bg-primary">
        <NavMenu />
      </section>
    </div>
  );
}
