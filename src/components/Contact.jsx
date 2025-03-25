import { useTranslation } from "react-i18next";
import EmailForm from "./EmailForm";
import contact from "../assets/contact.svg";
import iphone from "../assets/iphone-mockup-2.svg";

export default function Contact ({}) {
  const { t } = useTranslation();
  return (
    <section
      className="contact relative mt-40 w-full h-[130vh] flex flex-col justify-start items-center gap-12"
    >
      <img src={iphone} className="absolute -top-10 -left-40 w-[75rem]" />
      <div className="w-3/4 flex justify-between items-start gap-10">
        <div className="w-1/2 order-2 flex flex-col justify-start items-start gap-2">
          <h2 className="w-1/2 ml-10 text-[3rem] font-abril">{t("contactTitle")}</h2>
          <img src={contact} className="-mt-4 min-w-[125%]"/>
        </div>
        <div className="relative w-1/2 flex xs:flex-col lg:flex-row justify-start items-start gap-12 overflow-visible">
          <div className=" h-full">
            <EmailForm />
          </div>
          
        </div>
      </div>
    </section>
  );
};