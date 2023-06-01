import styles from "@/styles/vishal.module.css";
import { useState } from "react";
import GetOwnPortfolio from "./GetPortfolio";
import Project from "./Projects";
import Projects from "./Projects";
export default function CheckItOut() {
  /**1 : Languages , 2: WebLanguages , 3: Css Languages */
  const to_gray_900 = "to-gray-900";
  const Values = {
    Lang: {
      _1: {
        Name: "JavaScript",
        color: "from-yellow-500 ${to_gray_900}",
        percentage: "98%",
        TextColor: "yellow-500",
      },
      _2: {
        Name: "TypeScript",
        color: `from-blue-500 ${to_gray_900}`,
        percentage: "94%",
        TextColor: "blue-500",
      },
      _3: {
        Name: "Python",
        color: `from-green-500 ${to_gray_900}`,
        percentage: "92%",
        TextColor: "green-500",
      },
      _4: {
        Name: "Java",
        color: `from-orange-500 ${to_gray_900}`,
        percentage: "80%",
        TextColor: "orange-500",
      },
    },

    WebLangs: {
      _1: {
        Name: "Html, Css",
        color: `from-orange-600 ${to_gray_900}`,
        percentage: "98%",
        TextColor: "orange-600",
      },
      _2: {
        Name: "NextJs",
        color: `from-pink-800 ${to_gray_900}`,
        percentage: "92%",
        TextColor: "pink-400",
      },
      _3: {
        Name: "Express",
        color: `from-white ${to_gray_900}`,
        percentage: "90%",
        TextColor: "white",
      },
      _4: {
        Name: "NodeJs",
        color: `from-yellow-500 ${to_gray_900}`,
        percentage: "98%",
        TextColor: "yellow-500",
      },
    },

    StyleLangs: {
      _1: {
        Name: "Tailwind",
        color: `from-blue-500 ${to_gray_900}`,
        percentage: "97%",
        TextColor: "blue-500",
      },
      _2: {
        Name: "Chakra-ui",
        color: `from-green-400 ${to_gray_900}`,
        percentage: "97%",
        TextColor: "green-400",
      },
      _3: {
        Name: "NextUi",
        color: `from-pink-800 ${to_gray_900}`,
        percentage: "82%",
        TextColor: "black-800",
      },
      _4: {
        Name: "Css",
        color: `from-blue-800 ${to_gray_900}`,
        percentage: "99%",
        TextColor: "blue-800",
      },
    },
  };
  const boxValues = "h-[170px] w-[180px]";
  const boxValues_sm = "h-[140px] w-[140px]";
  const boxColor = "bg-zinc-800";
  const boxRadius = "rounded-xl";

  const [coding, setCoding] = useState("1");
  const [lang1, setLang1] = useState(Values.Lang._1.Name);
  const [lang2, setLang2] = useState(Values.Lang._2.Name);
  const [lang3, setLang3] = useState(Values.Lang._3.Name);
  const [lang4, setLang4] = useState(Values.Lang._4.Name);

  const [color1, setColor1] = useState(Values.Lang._1.color);
  const [color2, setColor2] = useState(Values.Lang._2.color);
  const [color3, setColor3] = useState(Values.Lang._3.color);
  const [color4, setColor4] = useState(Values.Lang._4.color);

  const [percentage1, setPercentage1] = useState(Values.Lang._1.percentage);
  const [percentage2, setPercentage2] = useState(Values.Lang._2.percentage);
  const [percentage3, setPercentage3] = useState(Values.Lang._3.percentage);
  const [percentage4, setPercentage4] = useState(Values.Lang._3.percentage);

  const [textColor1, setTextColor1] = useState(Values.Lang._1.TextColor);
  const [textColor2, setTextColor2] = useState(Values.Lang._1.TextColor);
  const [textColor3, setTextColor3] = useState(Values.Lang._1.TextColor);
  const [textColor4, setTextColor4] = useState(Values.Lang._1.TextColor);

  const [heading, setHeading] = useState("Coding Languages");

  const [disableButton1, setDisableButton1] = useState(false);
  const [disableButton2, setDisableButton2] = useState(false);
  const [disableButton3, setDisableButton3] = useState(false);
  // Output: yellow-500

  const handleChnage = () => {
    if (coding === "1") {
      setCoding("1");
    } else if (coding === "2") {
      setCoding("2");
    } else if (coding === "3") {
      setCoding("3");
    }
  };

  const Set_1 = () => {
    setCoding("1");
    setHeading("Main Coding Languages");

    setLang1(Values.Lang._1.Name);
    setLang2(Values.Lang._2.Name);
    setLang3(Values.Lang._3.Name);
    setLang4(Values.Lang._4.Name);

    setPercentage1(Values.Lang._1.percentage);
    setPercentage2(Values.Lang._2.percentage);
    setPercentage3(Values.Lang._3.percentage);
    setPercentage4(Values.Lang._4.percentage);

    setColor1(Values.Lang._1.color);
    setColor2(Values.Lang._2.color);
    setColor3(Values.Lang._3.color);
    setColor4(Values.Lang._4.color);

    setTextColor1(Values.Lang._1.TextColor);
    setTextColor2(Values.Lang._2.TextColor);
    setTextColor3(Values.Lang._3.TextColor);
    setTextColor4(Values.Lang._4.TextColor);

    setDisableButton1(true);
    setDisableButton2(false);
    setDisableButton3(false);
  };
  const Set_2 = () => {
    setCoding("2");
    setHeading("Web Languages & FrameWorks");

    setLang1(Values.WebLangs._1.Name);
    setLang2(Values.WebLangs._2.Name);
    setLang3(Values.WebLangs._3.Name);
    setLang4(Values.WebLangs._4.Name);

    setPercentage1(Values.WebLangs._1.percentage);
    setPercentage2(Values.WebLangs._2.percentage);
    setPercentage3(Values.WebLangs._3.percentage);
    setPercentage4(Values.WebLangs._4.percentage);

    setColor1(Values.WebLangs._1.color);
    setColor2(Values.WebLangs._2.color);
    setColor3(Values.WebLangs._3.color);
    setColor4(Values.WebLangs._4.color);

    setTextColor1(Values.WebLangs._1.TextColor);
    setTextColor2(Values.WebLangs._2.TextColor);
    setTextColor3(Values.WebLangs._3.TextColor);
    setTextColor4(Values.WebLangs._4.TextColor);

    setDisableButton1(false);
    setDisableButton2(true);
    setDisableButton3(false);
  };
  const Set_3 = () => {
    setCoding("3");
    setHeading("Styling Languages");

    setLang1(Values.StyleLangs._1.Name);
    setLang2(Values.StyleLangs._2.Name);
    setLang3(Values.StyleLangs._3.Name);
    setLang4(Values.StyleLangs._4.Name);

    setPercentage1(Values.StyleLangs._1.percentage);
    setPercentage2(Values.StyleLangs._2.percentage);
    setPercentage3(Values.StyleLangs._3.percentage);
    setPercentage4(Values.StyleLangs._4.percentage);

    setColor1(Values.StyleLangs._1.color);
    setColor2(Values.StyleLangs._2.color);
    setColor3(Values.StyleLangs._3.color);
    setColor4(Values.StyleLangs._4.color);

    setTextColor1(Values.StyleLangs._1.TextColor);
    setTextColor2(Values.StyleLangs._2.TextColor);
    setTextColor3(Values.StyleLangs._3.TextColor);
    setTextColor4(Values.StyleLangs._4.TextColor);

    setDisableButton1(false);
    setDisableButton2(false);
    setDisableButton3(true);
  };

  return (
    <main>
      <section className="h-auto">
        <h1 className="mt-8 text-center text-xl font-bold text-white">
          {heading}
        </h1>
        <div className="h-auto bg-gray-900 " id="Skills">
          <section className="mt-10 flex h-auto w-auto flex-row justify-center gap-20">
            <div className="button-container flex flex-wrap justify-center gap-10">
              <button
                className={`${styles.button} flex`}
                onClick={Set_1}
                disabled={disableButton1}
              >
                Main Languages
              </button>
              <button
                className={`${styles.button} flex`}
                onClick={Set_2}
                disabled={disableButton2}
              >
                Web Languages
              </button>
              <button
                className={`${styles.button} flex`}
                onClick={Set_3}
                disabled={disableButton3}
              >
                Styling Languages
              </button>
            </div>
          </section>

          <section className="mt-20 grid grid-cols-2 justify-center gap-11 overflow-hidden pb-[3px] text-center sm:grid-cols-2 md:grid-cols-4">
            <div
              className={`flex flex-wrap justify-center text-center ${boxColor} md:${boxValues} sm:${boxValues_sm} ${boxRadius} bg-gradient-to-b ${color1} rounded-xl bg-opacity-60 ${styles.res}`}
            >
              <div
                className={`m-[4px 4px 0px] mt-[2px] rounded-xl bg-zinc-900 p-[45px] sm:${styles.res}`}
              >
                <span className="justify-center text-start text-4xl">
                  {percentage1}
                </span>
                <p
                  className={`mr-[50%] justify-center font-serif text-${textColor1}`}
                >
                  {lang1}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-wrap justify-center text-center ${boxColor} md:${boxValues} sm:${boxValues_sm} ${boxRadius} bg-gradient-to-b ${color2} rounded-xl bg-opacity-60 ${styles.res}`}
            >
              <div
                className={`m-[4px 4px 0px] mt-[2px] rounded-xl bg-zinc-900 p-[45px] ${styles.res}`}
              >
                <span className="justify-center text-start text-4xl">
                  {percentage2}
                </span>
                <p
                  className={`mr-[50%] justify-center font-serif text-${textColor2}`}
                >
                  {lang2}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-wrap justify-center text-center ${boxColor} md:${boxValues} sm:${boxValues_sm} ${boxRadius} bg-gradient-to-b ${color3} rounded-xl bg-opacity-60 ${styles.res}`}
            >
              <div
                className={`m-[4px 4px 0px] mt-[2px] rounded-xl bg-zinc-900 p-[48px] ${styles.res}`}
              >
                <span className="justify-center text-start text-4xl">
                  {percentage3}
                </span>
                <p
                  className={`mr-[50%] justify-center font-serif text-${textColor3}`}
                >
                  {lang3}
                </p>
              </div>
            </div>

            <div
              className={`flex flex-wrap justify-center text-center ${boxColor} md:${boxValues} sm:${boxValues_sm} ${boxRadius} bg-gradient-to-b ${color4} rounded-xl bg-opacity-60 ${styles.res}`}
            >
              <div
                className={`m-[4px 4px 0px] mt-[2px] rounded-xl bg-zinc-900 p-[48px] ${styles.res}`}
              >
                <span className="justify-center text-start text-4xl">
                  {percentage4}
                </span>
                <p
                  className={`mr-[50%] justify-center font-serif text-${textColor4}`}
                >
                  {lang4}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>


      <section>
        <GetOwnPortfolio/>
      </section>
      <section>
        <Projects/>
      </section>
    </main>
  );
}
