import Image from "next/image";
import styles from "@/styles/vishal.module.css";
import tableWrapper from "../tabels/tableWrapper";
import TableWrapper from "../tabels/tableWrapper";
import Navbar from "../navbar/navbar";
import WebLines from "@/helpers/Lines";
export default function HomeWrapper() {
  return (
    <>
      <>
        <div className="fixed top-0 z-10">
          <Navbar />
        </div>
        <main
          className=" h-auto scale-100 animate-bg-images bg-cover bg-center bg-no-repeat"
          id="Home"
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-1">
            <div className="h-auto ">
              {/**div as container for text */}
              <div className=" mt-28">
                <h2 className="text-center font-sans text-5xl font-bold">
                  <span className="text-white-400 ">
                    {WebLines.Home.HellowLines}
                  </span>
                  <p className="mt-2 text-2xl">{WebLines.Home.IAmLine}</p>
                </h2>
                <p className="mt-4 text-center text-3xl text-green-400">
                  Web Developer
                </p>
              </div>
              <div className="mb-80 flex justify-center">
                <div className="mt-14 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900">
                  <svg
                    className="h-6 w-6 animate-bounce text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>{" "}
              <br />
              <div>
                <svg
                  className={`${styles.darksvg} fill relative w-max fill-zinc-900 `}
                  x="0px"
                  y="0px"
                  viewBox="0 186.5 1920 113.5"
                >
                  <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </>
      <TableWrapper />
    </>
  );
}
