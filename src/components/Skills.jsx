import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ui from "../assets/ui-ux-card.svg";
import social from "../assets/social-card.svg";
import photo from "../assets/photo-card.svg";


const Skills = forwardRef(function Skills({}, ref) {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className="py-10 h-fit flex flex-col justify-center items-center gap-12"
    >
      <h2 className="text-[2rem]">{t("CTATitle")}</h2>
      <div className="xs:w-4/5 lg:w-3/4 mx-auto flex justify-between items-center xs:flex-col lg:flex-row xs:gap-16 lg:gap-0">
        <div className="w-full flex items-center justify-between xs:gap-8 lg:gap-12">
          <div className="group relative overflow-hidden cta-card max-w-80 min-h-80 p-4 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200">
            <img src={ui} className="absolute top-0 left-8 scale-125 translate-x-4 -translate-y-2 rotate-[-3deg] opacity-50 group-hover:opacity-100 transition-all duration-200"/>
            <h3 className="text-[1.6rem] mb-4">UI/UX Design & Development</h3>
          </div>
          <div className="group relative overflow-hidden cta-card max-w-80 min-h-80 p-4 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200">
            <img src={photo} className="absolute -top-20 -left-4 scale-[80%] translate-x-5 opacity-50 group-hover:opacity-100 transition-all duration-200"/>
            <h3 className="text-[1.6rem] mb-4">Photography, Photo & Video Editing</h3>
          </div>
          <div className="group relative overflow-hidden cta-card max-w-80 min-h-80 p-4 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200">
            <img src={social} className="absolute -top-16 -left-4 scale-[85%] translate-x-4 -translate-y-2 rotate-[3deg] opacity-50 group-hover:opacity-100 transition-all duration-200"/>
            <h3 className="text-[1.6rem] mb-4">Social Media Content Creation & Marketing</h3>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
