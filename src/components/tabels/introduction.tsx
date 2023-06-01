import styles from "@/styles/vishal.module.css";
import CheckItOut from "./CheckItOut";
import ScrollAnimation from "../animation/animations";
import WebLines from "@/helpers/Lines";
export default function Introduction_Part() {
  return (
    <>
      <main className="bg-zinc-900" id="Introduction">
        <ScrollAnimation>
          <div >
            <h2 className="text-center font-sans text-5xl font-bold">
              <span className="text-white text-lg">{WebLines.Heading.Intro}</span>
            </h2>
            <div className="grid bg-zinc-900 sm:grid-cols-1 md:grid-cols-2 md:gap-40 ">
              <div className=" mt-auto rounded-lg sm:ml-20 md:ml-36">
                <div className="mt-28 rounded-full ">
                  <div className="relative">
                    <img
                      className={`${styles.IntroImage} `}
                      src="https://plotfolio-website.vercel.app/images/Vishal.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="abolute ml-20 flex"></div>
              </div>
              <div>
                <div className=" sm:mt-12 md:mr-32 md:mt-28">
                  <p className="mt-3 text-lg text-gray-400 sm:text-center ">
                    {WebLines.Introduction.Para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </main>
    </>
  );
}
