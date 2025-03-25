import { useTranslation } from "react-i18next";
import me from '../assets/new-prof-pic3.png';
import cvEN from '../assets/CV-Fanni-Wihl-ENG.pdf';
import cvES from '../assets/CV-Fanni-Wihl-ES.pdf';


export default function AboutLong ({lang}) {
  const { t } = useTranslation();
    return (
        <section className="min-h-screen h-fit py-16 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">{t("aboutTitle")}</h2>
            <div className="flex justify-end items-center lg:gap-24 xs:gap-12 xs:flex-col-reverse lg:flex-row">
                <div className="xs:w-4/5 lg:w-2/5 text-justify flex flex-col gap-4">
                    <p>{t("aboutContent1")}</p>
                    <p>{t("aboutContent2")}</p>
                    <p>{t("aboutContent3")}</p>
                    <p>{t("aboutContent4")}</p>
                    <p>{t("aboutContent5")}</p>
                    <a download href={lang === "en" ? cvEN : cvES} alt="download my cv" className="w-fit py-2 px-4 bg-orange text-white rounded-lg transition-all duration-200 hover:bg-orange/75">{t("CVcta")}</a>
                </div>
                <div className="relative xs:w-4/5 lg:w-1/3">
                    <img src={me} alt="image-of-me" className="rounded-full w-80 -mt-28" />
                </div>
            </div>
        </section>
    )
};