import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Design = forwardRef(function Design({}, ref) {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className="min-h-screen h-fit xs:pt-16 lg:pt-8 pb-8 flex flex-col justify-center items-center gap-12"
    >
      <h2 className="xs:text-[2rem] sm:text-[3rem] uppercase">
        Portfolio Design
      </h2>
      <div className="xs:w-4/5 lg:w-3/4 mx-auto flex flex-col justify-between items-center xs:gap-16 lg:gap-16">
        <div className="xs:text-justify lg:text-center">
          <h3 className="text-[1.6rem] uppercase mb-4 text-center">
            {t("designTitle1")}
          </h3>
          <p>{t("designContent1")}</p>
          <p className="m-auto w-fit relative xs:mt-4">
            {t("designContent2")}
            <i className="absolute xs:top-6 sm:-top-2 lg:top-0 lg:-right-12 pl-2 text-orange text-[2.25rem] fa-solid fa-wand-magic-sparkles"></i>
          </p>
        </div>
        <div className="w-full flex xs:flex-col lg:flex-row xs:gap-12 lg:gap-0 justify-between">
          <div className="xs:w-full lg:w-1/2 flex flex-col justify-center items-center xs:gap-8 lg:gap-4 text-center">
            <h3 className="text-[1.6rem] w-1/2 uppercase">
              {t("designTitle2")}
            </h3>
            <p className="xs:w-full lg:w-2/3">{t("designContent3")}</p>
            <div className="flex gap-4 xs:flex-wrap lg:flex-nowrap justify-center items-center">
              <span className="block w-[100px] h-[100px] bg-orange text-white flex justify-center items-center">
                #ff5d30
              </span>
              <span className="block w-[100px] h-[100px] bg-green text-black flex justify-center items-center">
                #6eeb83
              </span>
              <span className="block w-[100px] h-[100px] bg-dark text-white flex justify-center items-center">
                #20063b
              </span>
              <span className="block w-[100px] h-[100px] bg-white text-black flex justify-center items-center">
                #ffffff
              </span>
            </div>
          </div>
          <div className="xs:w-full lg:w-1/2 flex flex-col justify-center items-center xs:gap-8 lg:gap-4 xs:text-justify lg:text-center">
            <h3 className="text-[1.6rem] uppercase">{t("designTitle3")}</h3>
            <p>{t("designContent4")}</p>
            <span className="xs:text-[3rem] lg:text-[4.5rem]">
              Josefin Sans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Design;
