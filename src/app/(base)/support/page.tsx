import NavBar from "@/components/NavBar";
import ContactForm from "@/components/contactForm";
import Link from "next/link";

export default function Support() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className=" w-full min-h-screen h-full bg-[url('/support_bg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="webkit-sticky top-0 left-0 z-50">
          <NavBar />
        </div>
        <div className="w-full my-10 md:mt-16  flex justify-center items-center px-5 md:px-10">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row gap-6 justify-between items-center">
            <h1 className=" text-3xl md:text-6xl font-bold text-white capitalize max-w-xl md:leading-tight">
              TALK TO US ABOUT YOUR NEXT PROJECT OR QUESTIONS
            </h1>
            <div className="w-full rounded-2xl bg-white p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section className="w-full max-w-screen-xl flex flex-col gap-10 justify-center items-center my-16 px-5 md:px-10">
        <h3 className=" text-4xl font-bold">STAY IN TOUCH</h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-stretch">
          <div className=" border rounded-xl py-5 flex flex-col gap-10">
            <h3 className=" text-xl font-semibold text-center">
              OFFICE ADDRESS
            </h3>
            <div></div>
          </div>
          <div className=" border rounded-xl py-5 flex flex-col gap-10 items-center">
            <h3 className=" text-xl font-semibold text-center">CONTACT INFO</h3>{" "}
            <div className=" flex flex-col items-start flex-wrap gap-3 px-3">
              <div className="w-full flex items-center gap-3 border-b pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5  text-primary-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span>+234-901-160-444</span>
              </div>
              <Link
                href="mailto:infor@7thcare.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center gap-3  border-b pb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-primary-500"
                >
                  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                </svg>{" "}
                infor@7thcare.com
              </Link>
              <address className="flex items-center gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10  text-primary-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                167, St. James House, Off Adetokunbo Admola Crescent, Wuse II,
                Abuja, Nigeria
              </address>
            </div>
          </div>
          <div className=" border rounded-xl py-5 flex flex-col gap-10 items-center">
            <h3 className=" text-xl font-semibold text-center">
              OPENING HOURS
            </h3>
            <div className=" px-3 flex flex-col gap-5 items-center justify-center">
              <div className=" flex items-center gap-10 w-full border-b py-2">
                <span>MON - THU</span>
                <span>10:00 AM - 5:00 PM</span>
              </div>
              <div className=" flex items-center gap-10 w-full border-b py-2">
                <span>FRI - SAT</span>
                <span>11:00 AM - 6:00 PM</span>
              </div>
              <div className=" flex items-center border-b py-2">
                <span>SUNDAY OFF-DAY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
