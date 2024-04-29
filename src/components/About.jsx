import { forwardRef } from 'react';
import { useTranslation } from "react-i18next";
import me from '../assets/about-img.png';
import cvEN from '../assets/CV-Fanni-Wihl-ENG.pdf';
import cvES from '../assets/CV-Fanni-Wihl-ES.pdf';


const About = forwardRef(function About({lang}, ref) {
  const { t } = useTranslation();
    return (
        <section ref={ref} className="bg-about xs:bg-cover lg:bg-[length:100%] bg-no-repeat xs:bg-[center_top_-20rem] lg:bg-top min-h-screen h-fit pt-16 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">{t("aboutTitle")}</h2>
            <div className="flex justify-center items-center lg:gap-24 xs:gap-12 xs:flex-col-reverse lg:flex-row">
                <div className="xs:w-4/5 lg:w-2/5 text-justify flex flex-col gap-4">
                    <p>{t("aboutContent1")}</p>
                    <p>{t("aboutContent2")}</p>
                    <p>{t("aboutContent3")}</p>
                    <p>{t("aboutContent4")}</p>
                    <p>{t("aboutContent5")}</p>
                    <a download href={lang === "en" ? cvEN : cvES} alt="download my cv" className="w-fit mt-4 xs:mx-auto lg:mr-0 lg:ml-auto py-2 px-6 pt-[0.7rem] bg-orange text-white rounded-full shadow-xl transition-all duration-200 hover:scale-[1.1] hover:bg-[#fc7651]">{t("CVcta")}</a>
                </div>
                <div className="relative xs:w-4/5 lg:w-1/3">
                    <img src={me} alt="image-of-me"/>
                </div>
            </div>
        </section>
    )
})

export default About