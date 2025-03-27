import { useTranslation } from "react-i18next";

export default function About ({ lang, pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className="h-fit w-full bg-white pt-20">
        <div className="w-2/3 ml-auto mr-28 flex flex-col justify-end items-start gap-12">
          <h2 className="text-[3rem] font-abril">{t("aboutTitle")}</h2>
          <div className="flex justify-start items-center lg:gap-24 xs:gap-12 xs:flex-col-reverse lg:flex-row">
            <div className="xs:w-4/5 lg:w-3/4 text-justify flex flex-col gap-4">
              <p>{t("aboutContent1")}</p>
            </div>
          </div>
        </div>
    </section>
  );
};
