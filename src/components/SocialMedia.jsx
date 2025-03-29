import { useState } from "react";
import { useTranslation } from "react-i18next";
import designDetails from "../json/designdetails.json";
import social from "../assets/social-hero.svg";
import carjourney from "../assets/car-design1.svg";
import traveljourney from "../assets/travel-design4.svg";
import petjourney from "../assets/pet-design3.svg";
import DesignDetails from "./DesignDetails";
// import SocialGallery from "./SocialGallery";

export default function SocialMedia ({ pathname }) {
  const { t } = useTranslation();
  const [openPanel, setOpenPanel]= useState(0);
  console.log(openPanel);
  return (
    <section
      className="min-h-screen h-fit w-full pb-40 flex flex-col justify-center items-end">
      <div className="w-2/3 mr-60 flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={social} className="w-full h-[550px] scale-[106%] object-cover -mt-0 -mr-28"/>
          <h2 className="w-fit -mr-24 mt-8 xs:text-[2rem] sm:text-[2.6rem] uppercase">
            Social Media Content Creation & Marketing
          </h2>
        </div>
        <div className="w-full max-w-3/4 -mr-28 flex justify-around items-start ">
          {/* <SocialGallery pathname={pathname} /> */}
        </div>
      </div>
    </section>
  );
};
