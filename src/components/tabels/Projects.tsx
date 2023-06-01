import WebLines from "@/helpers/Lines";
import styles from "@/styles/vishal.module.css";

export default function Projects() {
  return (
    <main>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 justify-center ${styles.responseProjectTable}`}
      >
        <div className={`${styles.responseProjectTable} sm:justify-center sm:flex`}>
          <img
            src="/Projects.png"
            alt="Projects Svg"
            className="flex h-[350px] w-[350px] animate-WaveAnimation justify-center"
          />
        </div>

        <div>
          <div>
            <h1 className="text-bold mt-10 flex justify-center text-xl text-fuchsia-400">
              {WebLines.Heading.Projects}
            </h1>
            <p className={`sm:mr-20 sm:ml-20 text-base `}>{WebLines.Tables.Projects.Para}</p>
            <div className="flex justify-center ">
              <button className={`${styles.B_P}`}>Projects</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
