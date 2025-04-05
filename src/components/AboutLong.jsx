import { useTranslation } from "react-i18next";
import me from '../assets/new-prof-pic2.png';
// import cvEN from '../assets/CV-Fanni-Wihl-ENG.pdf';
// import cvES from '../assets/CV-Fanni-Wihl-ES.pdf';


export default function AboutLong ({ lang, pathname }) {
  const { t } = useTranslation();
    return (
        <section className="min-h-[125vh] h-fit -mt-28 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">{t("aboutTitle")}</h2>
            <div className="flex justify-end items-center gap-24 flex-row">
                <div className="w-2/5 text-justify justify-start flex flex-col gap-4">
                    <h2 className="text-[2rem] -mt-40 mb-10">👋 Hi there!</h2>
                    <p>{t("aboutContent1")}</p>
                    {/* <p>{t("aboutContent2")}</p>
                    <p>{t("aboutContent3")}</p>
                    <p>{t("aboutContent4")}</p>
                    <p>{t("aboutContent5")}</p> */}
                    {/* <a download href={lang === "en" ? cvEN : cvES} alt="download my cv" className="w-fit py-2 px-4 bg-orange text-white rounded-lg transition-all duration-200 hover:bg-orange/75">{t("CVcta")}</a> */}
                </div>
                <div className="relative xs:w-4/5 lg:w-1/3">
                    <img src={me} alt="image-of-me" className="w-full -mt-28" />
                </div>
            </div>
        </section>
    )
};