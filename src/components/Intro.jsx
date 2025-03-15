import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
// import designer from "../assets/designer-hero1.png";

export default function Intro() {
  const { t } = useTranslation();
  const [subtitleOpacity, setSubtitleOpacity] = useState(false);
  const typingText = useRef();
  useEffect(() => {
    const typed = new Typed(typingText.current, {
      strings: [
        "Social Media",
        "Photography",
        "Marketing",
        "Frontend"
      ],
      typeSpeed: 30,
      startDelay: 1000,
      backSpeed: 15,
      backdelay: 1000,
      loop: true,
      loopCount: Infinity,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 1000,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  setTimeout(() => {
    setSubtitleOpacity(true);
  }, 1700);
  return (
    <section className="bg-intro xs:bg-cover lg:bg-[length:150%] bg-no-repeat xs:bg-[center_bottom_-15rem] lg:bg-[center_top_-10rem]  xs:h-[100vh] sm:h-[120vh] relative flex flex-col items-end justify-start">
      <div className="relative w-fit flex flex-col top-28 -left-4 gap-10">
        <h1 className="relative w-[60vw] flex flex-col items-start justify-start">
          <span className="w-fit top-4 xs:text-[2.25rem] sm:text-[1.8rem] flex flex-col items-start ">
            <span className="block">{t("introHello1")}</span>
            <span className="block">{t("introHello2")}</span>
          </span>
        </h1>
        <h2
          className={`relative w-[60vw] flex flex-col items-start justify-start xs:text-[1.5rem] sm:text-[2.5rem]`}
        >
          <span className="w-fit xs:text-[2.25rem] sm:text-[1.8rem] flex items-start gap-4">
            <span className="w-fit">{t("introDesc1")}</span>
            <span className="text-orange font-bold w-fit">{t("introDesc2")}</span>
            <span className="w-fit">{t("introDesc3")}</span>
            <span className="text-orange text-center font-bold min-w-[200px] pl-2 pr-2" ref={typingText}></span>
            <span className="relative w-fit after:content-[''] after:w-[200px] after:h-[2px] after:bg-orange after:block after:absolute after:bottom-0 after:right-20">{t("introDesc4")}</span>
          </span>
        </h2>
      </div>
      {/* <img className="w-[40%]" src={designer} alt="designer illustration" /> */}
    </section>
  );
}

// attribute illustration: <a href="https://storyset.com/online">Online illustrations by Storyset</a>
