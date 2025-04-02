import { useTranslation } from "react-i18next";

export default function About ({ lang, pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className="h-fit w-full bg-white pt-20">
        <div className="w-full pr-40 pl-60 flex flex-col justify-end items-start gap-12">
          <h2 className="text-[3rem] font-abril">{t("aboutTitle")}</h2>
          <div className="flex justify-start items-center gap-24 flex-row">
            <div className="w-full text-justify flex flex-col gap-4">
              <p>{t("aboutContent1")}</p>
            </div>
          </div>
        </div>
    </section>
  );
};
