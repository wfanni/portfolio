import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin-logo.png";
import gitProfile from "../assets/new-prof-pic.png";
import linkedinProfile from "../assets/new-prof-pic.png";
import EmailForm from "./EmailForm";
import ContactCard from "./ContactCard";
import contact from "../assets/contact.svg";

const Contact = forwardRef(function Contact({}, ref) {
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className="contact mt-40 bg-contact bg-[top_left_-24rem] bg-[length:95%] bg-no-repeat w-full min-h-[120vh] flex flex-col justify-start items-center gap-12"
    >
      <div className="w-3/4 flex justify-between items-start gap-10">
        <div className="w-1/2 order-2 flex flex-col justify-start items-start ">
          <h2 className="w-1/2 ml-10 text-[3rem] font-abril">{t("contactTitle")}</h2>
          <img src={contact} className="-mt-4 min-w-[125%]"/>
        </div>
        <div className="relative xs:w-4/5 sm:w-1/2 xs:pb-8 mt-60 ml-2 flex xs:flex-col lg:flex-row justify-start items-start gap-12 overflow-visible">
          <div className="xs:full w-[450px] h-full">
            <EmailForm />
          </div>
          
        </div>
      </div>
        <div className="w-full font-normal text-gray-500 text-[1rem] absolute bottom-0 flex justify-between">
            <p className="ml-72">2025 | developed by wfanni</p>
            <p>illustrations from <a className="font-[500] underline" href="https://storyset.com/online">Storyset</a> | <a className="font-[500] underline" href="https://mockupbee.com/">MockupBee</a> | <a className="font-[500] underline" href="https://www.freepik.com/">Freepik</a></p>
            {/* <ContactCard
              logo={github}
              profile={gitProfile}
              link="https://github.com/wfanni"
              version="github"
            />
            <ContactCard
              logo={linkedin}
              profile={linkedinProfile}
              link="https://www.linkedin.com/in/fanni-wihl/"
              version="linkedin"
            /> */}
          </div>
    </section>
  );
});

export default Contact;
