import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Skills = forwardRef(function Skills({}, ref) {
  const { t } = useTranslation();

  const skills = [
    "Node.js",
    "Git",
    "TailwindCSS",
    "Figma",
    "Browserstack",
    "Jira",
    "MongoDB",
    "Postman",
    "Vite",
    "Express.js",
    "Illustrator",
    "VS Code",
    "Confluence",
    "Wordpress",
    "Azure DevOps",
    "Jest",
    "Webpack",
    "SourceTree",
    "WooCommerce",
    "Docker",
  ];

  return (
    <section
      ref={ref}
      className="bg-skills xs:bg-cover lg:bg-[length:100%] bg-no-repeat xs:bg-[center_bottom_-26rem] md:bg-[center_bottom_-20rem] lg:bg-bottom min-h-screen h-fit xs:pt-16 lg:pt-0 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] uppercase">{t("skillsTitle")}</h2>
      <div className="xs:w-4/5 lg:w-3/4 mx-auto flex justify-between items-center xs:flex-col lg:flex-row xs:gap-16 lg:gap-0">
        <div className="w-full flex flex-col items-center justify-start xs:gap-8 lg:gap-12">
          <label className="w-full flex">
            <span className="min-w-[85px]">HTML</span>
            <progress className="ml-4 w-full" value="90" max="100"></progress>
          </label>
          <label className="w-full flex">
            <span className="min-w-[85px]">SCSS</span>
            <progress className="ml-4 w-full" value="90" max="100"></progress>
          </label>
          <label className="w-full flex">
            <span className="min-w-[85px]">JS</span>
            <progress className="ml-4 w-full" value="60" max="100"></progress>
          </label>
          <label className="w-full flex">
            <span className="min-w-[85px]">REACT</span>
            <progress className="ml-4 w-full" value="50" max="100"></progress>
          </label>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-12">
          <div className="xs:w-full lg:w-3/4 flex flex-wrap items-center justify-center gap-4">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <span key={index}>
                    <label>{skill}</label>
                    <i className="ml-4 text-[0.5rem] leading-[inherit] text-orange fa-solid fa-circle"></i>
                  </span>
                );
              })}
          </div>
        </div>
      </div>
      <p className="xs:w-4/5 lg:w-full flex flex-col gap-4 items-center justify-center">
        <span className="min-w-[200px] w-[200px] text-center border-b-2 border-orange">
          {t("goalsTitle")}
        </span>
        <span className="text-center">{t("goalsContent")}</span>
      </p>
    </section>
  );
});

export default Skills;
