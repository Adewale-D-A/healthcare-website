import Link from "next/link";
import navList from "@/assets/navMenu/index";
export default function MobileNavItems() {
  return (
    <div className="flex flex-col gap-10">
      {navList.map((item) => {
        if (item?.isMobile) {
          return (
            <div
              key={item?.title}
              className={` flex items-center gap-4 group cursor-pointer relative`}
            >
              <Link
                href={item?.url}
                className="  group-hover:cursor-pointer transition-all z-10"
              >
                {item?.title}
              </Link>
              {/* {item?.subMenu && (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 group-hover:hidden  transition-all"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 hidden group-hover:block  transition-all"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )} */}
            </div>
          );
        } else return;
      })}
    </div>
  );
}
