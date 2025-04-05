import { useTranslation } from "react-i18next";
import EmailForm from "./EmailForm";
import contact from "../assets/contact.svg";
import iphone from "../assets/iphone-mockup-flat3.svg";

export default function Contact ({ pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className={`${pathname === "/contact" ? "mt-20" : null} contact relative w-full h-[145vh] flex flex-col justify-start items-center gap-12`}
    >
      <img src={iphone} className="absolute -top-10 left-72 w-[450px] z-1" />
      <div className="w-3/4 flex justify-between items-start gap-10">
        <div className="w-1/2 order-2 flex flex-col justify-start items-start gap-2">
          <h2 className="w-1/2 ml-10 text-[3rem] font-abril">{t("contactTitle")}</h2>
          <img src={contact} className="-mt-4 min-w-[125%]"/>
        </div>
        <div className="relative w-1/2 flex xs:flex-col lg:flex-row justify-start items-start gap-12 overflow-visible">
          <div className="h-full">
            <EmailForm />
          </div>
          
        </div>
      </div>
    </section>
  );
};