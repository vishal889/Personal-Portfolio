import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0 && window.innerWidth > 768) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  function scrollToDiv(string : any) {
    const div = document.getElementById(string);
    div?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`w-full bg-transparent shadow-lg text-lg font-bold text-white ${
          navbar
            ? "fixed top-[10px] rounded-xl bg-[rgba(255,255,255,0.11)] backdrop-filter backdrop-blur-lg shadow"
            : "fixed bg-transparent"
        }`}
      >
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w">
          <div>
            <div className="flex items-center justify-between py-3 md:block ">
              <a href="#">
                <img
                  src="/Vishal.png"
                  className="left-0 rounded-full w-[40px] md:w-[50px]"
                  alt="Vishal"
                />
                {/* <h2 className="text-2xl font-bold text-white">Vishal</h2> */}
              </a>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <a onClick={() => scrollToDiv("Home")} className="cursor-pointer">
                    Home
                  </a>
                </li>
                <li className="text-white">
                  <a
                    onClick={() => scrollToDiv("Introduction")}
                    className="cursor-pointer"
                  >
                    Intro
                  </a>
                </li>
                <li className="text-white">
                  <a onClick={() => scrollToDiv("Skills")} className="cursor-pointer">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
