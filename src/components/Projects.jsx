import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import preview from "../assets/preview.png";
import ClientShowcase from "./ClientShowcase";

const Projects = forwardRef(function Projects({ feedbackRef, lang }, ref) {
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className="bg-projects xs:bg-cover lg:bg-[length:100%] bg-no-repeat xs:bg-[left_top_-7rem] lg:bg-top min-h-screen h-fit pt-16 w-full flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[3rem] uppercase">{t("projectsTitle")}</h2>
      <h3 className="xs:w-4/5 lg:w-3/5 text-center text-lg">
        {t("projectsIntro")}
      </h3>
      <ClientShowcase />
      <h2 className="text-[2rem] text-center xs:mb-2 lg:mb-8">
        {t("projectsDemoTitle")}
      </h2>
      <section className="relative xs:w-4/5 lg:w-3/4 flex xs:flex-col-reverse lg:flex-row xs:justify-center xs:items-center lg:justify-between xs:gap-8 lg:gap-0">
        <div className="flex flex-col gap-6 xs:items-center lg:items-start">
          <h3 className="xs:text-[1.3rem] sm:text-2xl">
            <span className="text-orange text-sm font-bold">WIP</span> Project
            Management App
          </h3>
          <div className="flex flex items-center gap-6">
            <span className={`text-orange font-bold ${lang === "es" ? "text-[1rem]" : null}`}>{t("projectDemoCTA")}</span>
            <a
              href="https://wfanni.github.io/project-management-app/"
              target="_blank"
            >
              <i className="hover:text-orange duration-200 transition-all fa-solid fa-globe text-[1.6rem]"></i>
            </a>
            <a
              href="https://github.com/wfanni/project-management-app"
              target="_blank"
            >
              <i className="hover:text-orange duration-200 transition-all fa-brands fa-github text-[1.7rem]"></i>
            </a>
          </div>
          <p className="xs:w-full lg:w-3/4 text-justify">
            {t("projectDemo1Content1")}
          </p>
          <p className="xs:w-full lg:w-3/4 text-justify">
            {t("projectDemo1Content2")}
          </p>
          <p className="xs:w-full lg:w-3/4 text-justify">
            {t("projectDemo1Content3")}
            <span
              className="text-orange underline cursor-pointer hover:text-[#D32E00] transition-all duration-200"
              onClick={() => {
                feedbackRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("projectDemo1FeedbackCTA")}
            </span>
          </p>
        </div>
        <img
          className="xs:w-full lg:w-3/5 rotate-2 xs:-mr-4 lg:-mr-12"
          src={preview}
          alt="work-desktop"
        />
      </section>
    </section>
  );
});

export default Projects;
