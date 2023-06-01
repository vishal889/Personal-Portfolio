import WebLines from "@/helpers/Lines";
import styles from "@/styles/vishal.module.css";
import { FaGithub } from "react-icons/fa";
export default function GetOwnPortfolio() {
  return (
    <main>
      <div
        className="ml-[10%] mt-[6%] grid"
        style={{ gridTemplateColumns: "40% 50%" }}
      >
        <div>
          <div className="flex items-center justify-center">
            <h1 className="relative text-lg font-bold text-pink-400">
              {WebLines.Heading.CheckItOut}
            </h1>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <p className="line-clamp-2">{WebLines.Tables.CheckItOut.Para}</p>
          </div>
          <div className="ml-auto mt-3 flex  items-center justify-center">
            <button className={`flex items-center ${styles.Button}` }>
           <a href="/Github"> GitHub</a>
            </button>
          </div>
        </div>
        <div className="mb-9 mr-[10%] flex justify-end">
          <span className="inline-block h-[200px] w-[200px] animate-ball rounded-[50%] bg-gradient-to-b from-pink-500 to-blue-600"></span>
        </div>
      </div>
    </main>
  );
}
