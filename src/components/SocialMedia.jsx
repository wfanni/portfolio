import { useState } from "react";
import { useTranslation } from "react-i18next";
import designDetails from "../json/designdetails.json";
import design from "../assets/uiux-hero.svg";
import carjourney from "../assets/car-design1.svg";
import traveljourney from "../assets/travel-design4.svg";
import petjourney from "../assets/pet-design3.svg";
import DesignDetails from "./DesignDetails";

export default function SocialMedia ({}) {
  const { t } = useTranslation();
  const [openPanel, setOpenPanel]= useState(0);
  console.log(openPanel);
  return (
    <section
      className="min-h-screen h-fit w-full  flex flex-col justify-center items-end">
      <div className="w-2/3 mr-60 flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={design} className="w-full -mt-16 -mr-28"/>
          <h2 className="w-fit -mr-24 -mt-8 xs:text-[2rem] sm:text-[2.6rem] uppercase">
            Social Media Content Creation & Marketing
          </h2>
        </div>
        <div className="w-full max-w-3/4 -mr-28 flex justify-around items-start ">
          <article className="design-panel flex flex-col justify-center gap-10 ">
            <div onClick={() => setOpenPanel(1)} className={`${openPanel === 1 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200`}>
              <div className="max-h-32 absolute top-0 w-full h-fit ">
                <img src={carjourney} className={`${openPanel === 1 ? "opacity-100" : "opacity-50"} absolute -top-6 right-10 scale-[150%] group-hover:opacity-100 transition-all duration-200`}/>
              </div>
              <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                <h3 className="text-[1.5rem] text-center">Car Insurance B2C Journey</h3>
              </div>
            </div>
          </article>
          <article className="design-panel flex flex-col justify-center gap-10 ">
            <div onClick={() => setOpenPanel(2)} className={`${openPanel === 2 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
              <div className="max-h-32 absolute top-0 w-full h-fit ">
                <img src={traveljourney} className={`${openPanel === 2 ? "opacity-100" : "opacity-50"} absolute top-2 left-10 scale-[155%] group-hover:opacity-100 transition-all duration-200`}/>
              </div>
              <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                <h3 className="text-[1.5rem] text-center">Travel Insurance B2C Journey</h3>
              </div>
            </div>
          </article>
          <article className="design-panel flex flex-col justify-center gap-10 ">
            <div onClick={() => setOpenPanel(3)} className={`${openPanel === 3 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
              <div className="max-h-32 absolute top-0 w-full h-fit ">
                <img src={petjourney} className={`${openPanel === 3 ? "opacity-100" : "opacity-50"} absolute -top-2 left-8 scale-[160%] group-hover:opacity-100 transition-all duration-200`}/>
              </div>
              <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                <h3 className="text-[1.5rem] text-center">Pet Insurance B2C Journey</h3>
              </div>
            </div>
          </article>
        </div>
        <div className="w-full mb-40 -mr-28 flex justify-start">
          {openPanel === 1 ? <DesignDetails details={designDetails.car} /> : null}
          {openPanel === 2 ? <DesignDetails details={designDetails.travel} /> : null}
          {openPanel === 3 ? <DesignDetails details={designDetails.pet} /> : null}
        </div>
      </div>
    </section>
  );
};
