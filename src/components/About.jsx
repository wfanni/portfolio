import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import me from "../assets/about-img.png";
import cvEN from "../assets/CV-Fanni-Wihl-ENG.pdf";
import cvES from "../assets/CV-Fanni-Wihl-ES.pdf";
import { Link } from "react-router-dom";

const About = forwardRef(function About({ lang }, ref) {
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className="h-fit w-2/3 ml-auto mr-28 flex flex-col justify-end items-start gap-12">
      <h2 className="text-[3rem] font-abril">{t("aboutTitle")}</h2>
      <div className="flex justify-start items-center lg:gap-24 xs:gap-12 xs:flex-col-reverse lg:flex-row">
        <div className="xs:w-4/5 lg:w-3/4 text-justify flex flex-col gap-4">
          <p>{t("aboutContent1")}</p>
        </div>
      </div>
    </section>
  );
});

export default About;
