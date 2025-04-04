import { useState } from "react";
import { useTranslation } from "react-i18next";
import designDetails from "../json/designdetails.json";
import design from "../assets/uiux-hero.svg";
import carjourney from "../assets/car-design1.svg";
import traveljourney from "../assets/travel-design4.svg";
import petjourney from "../assets/pet-design3.svg";
import uwjourney from "../assets/insurance-design1.svg";
import habitjourney from "../assets/calendar-design.svg";
import DesignDetails from "./DesignDetails";

export default function Design ({ pathname }) {
  const { t } = useTranslation();
  const [openPanel, setOpenPanel]= useState(0);
  console.log(openPanel);
  return (
    <section
      className="min-h-screen h-fit w-full pb-40 flex flex-col justify-center items-end">
      <div className="w-full flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={design} className="w-full max-h-[570px] object-cover"/>
          <h2 className="w-fit mt-2 sm:text-[3rem] uppercase">
            UI/UX Design & Development
          </h2>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex justify-center items-start gap-10">
            <article className="design-panel flex flex-col justify-center gap-10 ">
              <div onClick={() => setOpenPanel(1)} className={`${openPanel === 1 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200`}>
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={carjourney} className={`${openPanel === 1 ? "opacity-100" : "opacity-50"} absolute top-10 right-16 scale-[180%] group-hover:opacity-100 transition-all duration-200`}/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                  <h3 className="text-[1.5rem] text-center">Car Insurance B2C Journey</h3>
                </div>
              </div>
            </article>
            <article className="design-panel flex flex-col justify-center gap-10 ">
              <div onClick={() => setOpenPanel(2)} className={`${openPanel === 2 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={traveljourney} className={`${openPanel === 2 ? "opacity-100" : "opacity-50"} absolute top-6 left-12 scale-[155%] group-hover:opacity-100 transition-all duration-200`}/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                  <h3 className="text-[1.5rem] text-center">Travel Insurance B2C Journey</h3>
                </div>
              </div>
            </article>
            <article className="design-panel flex flex-col justify-center gap-10 ">
              <div onClick={() => setOpenPanel(3)} className={`${openPanel === 3 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={petjourney} className={`${openPanel === 3 ? "opacity-100" : "opacity-50"} absolute -top-2 left-8 scale-[160%] group-hover:opacity-100 transition-all duration-200`}/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                  <h3 className="text-[1.5rem] text-center">Pet Insurance B2C Journey</h3>
                </div>
              </div>
            </article>
          </div>
          <div className="w-full flex justify-center items-start gap-10">
            <article className="design-panel flex flex-col justify-center gap-10 ">
              <div onClick={() => setOpenPanel(4)} className={`${openPanel === 4 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={uwjourney} className={`${openPanel === 4 ? "opacity-100" : "opacity-50"} absolute top-0 scale-[109%] group-hover:opacity-100 transition-all duration-200`}/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                  <h3 className="text-[1.5rem] text-center">Underwriting B2B Journey</h3>
                </div>
              </div>
            </article>
            <article className="design-panel flex flex-col justify-center gap-10 ">
              <div onClick={() => setOpenPanel(5)} className={`${openPanel === 5 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-[300px] min-h-80 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                <div className="max-h-32 absolute top-0 w-full h-fit ">
                  <img src={habitjourney} className={`${openPanel === 5 ? "opacity-100" : "opacity-50"} absolute top-0 left-0 scale-[140%] group-hover:opacity-100 transition-all duration-200`}/>
                </div>
                <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                  <h3 className="text-[1.5rem] text-center">Habit Tracker App Design</h3>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="w-full flex justify-start">
          {openPanel === 1 ? <DesignDetails details={designDetails.car} openPanel={openPanel} /> : null}
          {openPanel === 2 ? <DesignDetails details={designDetails.travel} openPanel={openPanel} /> : null}
          {openPanel === 3 ? <DesignDetails details={designDetails.pet} openPanel={openPanel} /> : null}
          {openPanel === 4 ? <DesignDetails details={designDetails.uw} openPanel={openPanel} /> : null}
          {openPanel === 5 ? <DesignDetails details={designDetails.habit} openPanel={openPanel} /> : null}
        </div>
      </div>
    </section>
  );
};
