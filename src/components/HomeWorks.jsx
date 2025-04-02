import { useTranslation } from "react-i18next";
import { useState } from "react";
import ui from "../assets/ui-ux-card.svg";
import social from "../assets/social-card.svg";
import photo from "../assets/photo-card.svg";
import { Link } from "react-router-dom";
import WorkDetails from "./WorkDetails";
import workDetails from "../json/workdetails.json";

export default function HomeWorks ({ pathname }) {
  const { t } = useTranslation();
  const [openPanel, setOpenPanel]= useState(0);


  return (
    <section
      className="py-10 h-fit w-full bg-white "
    >
      <div className="w-full flex flex-col justify-end items-center gap-12">
        <h2 className="text-[2rem]">{t("CTATitle")}</h2>
        <div className="w-full mx-auto flex justify-between items-center flex-row gap-0">
          <div className="w-full flex items-center justify-between gap-12">
            <Link onClick={() => setOpenPanel(1)}>
              <div className="group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={ui} className="absolute -top-2 -right-28 scale-[180%] opacity-50 group-hover:opacity-100 transition-all duration-200"/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-2">
                  <h3 className="text-[1.5rem] text-center">UI/UX Design & Development</h3>
                </div>
              </div>
            </Link>
            <Link onClick={() => setOpenPanel(2)}>
              <div className="group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={photo} className="absolute -top-4 right-0 scale-[100%] -rotate-3 opacity-50 group-hover:opacity-100 transition-all duration-200"/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-2">
                  <h3 className="text-[1.5rem] text-center">Photography, Photo & Video Editing</h3>
                </div>
              </div>
            </Link>
            <Link onClick={() => setOpenPanel(3)}>
              <div className="group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200">
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={social} className="absolute -top-6 right-0 scale-[100%] -rotate-3 opacity-50 group-hover:opacity-100 transition-all duration-200"/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-2">
                  <h3 className="text-[1.5rem] text-center">Social Media Content Creation & Marketing</h3>
                </div>
              </div>
              </Link>
          </div>
        </div>
        <div className="w-full mb-40 -mr-28 flex justify-start">
            {openPanel === 1 ? <WorkDetails link="uiWorks" details={workDetails.ui} openPanel={1} pathname={pathname} /> : null}
            {openPanel === 2 ? <WorkDetails link="photoWorks" details={workDetails.photo} openPanel={2} pathname={pathname} /> : null}
            {openPanel === 3 ? <WorkDetails link="socialWorks" details={workDetails.social} openPanel={3} pathname={pathname} /> : null}
        </div>
      </div>
    </section>
  );
};
