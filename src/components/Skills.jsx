import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import ui from "../assets/ui-ux-card.svg";
import social from "../assets/social-card.svg";
import photo from "../assets/photo-card.svg";
import { Link } from "react-router-dom";


const Skills = forwardRef(function Skills({}, ref) {
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className="py-10 h-fit w-2/3 ml-auto mr-28 flex flex-col justify-end items-center gap-12"
    >
      <h2 className="text-[2rem]">{t("CTATitle")}</h2>
      <div className="xs:w-4/5 lg:w-full mx-auto flex justify-between items-center xs:flex-col lg:flex-row xs:gap-16 lg:gap-0">
        <div className="w-full flex items-center justify-between xs:gap-8 lg:gap-12">
          <Link to="/design">
            <div className="group relative overflow-hidden min-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
              <div className="max-h-32 absolute top-0 w-full h-fit ">
                <img src={ui} className="absolute -top-2 -right-28 scale-[180%] opacity-50 group-hover:opacity-100 transition-all duration-200"/>
              </div>
              <div className="relative bg-white z-10 px-4 pb-2 pt-2">
                <h3 className="text-[1.5rem] ">UI/UX Design & Development</h3>
              </div>
            </div>
          </Link>
          <div className="group relative overflow-hidden min-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
            <div className="max-h-32 absolute top-0 w-full h-fit ">
              <img src={photo} className="absolute -top-4 right-0 scale-[100%] -rotate-3 opacity-50 group-hover:opacity-100 transition-all duration-200"/>
            </div>
            <div className="relative bg-white z-10 px-4 pb-2 pt-2">
              <h3 className="text-[1.5rem] ">Photography, Photo & Video Editing</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden min-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
            <div className="max-h-32 absolute top-0 w-full h-fit ">
              <img src={social} className="absolute -top-6 right-0 scale-[100%] -rotate-3 opacity-50 group-hover:opacity-100 transition-all duration-200"/>
            </div>
            <div className="relative bg-white z-10 px-4 pb-2 pt-2">
              <h3 className="text-[1.5rem] ">Social Media Content Creation & Marketing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
