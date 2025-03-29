import { useState } from "react";
import { useTranslation } from "react-i18next";
import workDetails from "../json/workdetails.json";
import photo from "../assets/photo-hero.svg";
import carjourney from "../assets/car-design1.svg";
import traveljourney from "../assets/travel-design4.svg";
import petjourney from "../assets/pet-design3.svg";
import PhotoDetails from "./PhotoDetails";
// import PhotoAlbum from "./PhotoAlbum";
import PhotoGallery from "./PhotoGallery";



export default function Photography ({ pathname }) {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-screen h-fit w-full pb-40 flex flex-col justify-center items-end">
      <div className="w-full flex flex-col gap-20 justify-start items-center">
        <div className="w-full flex flex-col justify-center items-center ">
          <img src={photo} className="w-full h-[570px] object-cover"/>
          <h2 className="w-fit mt-2 xs:text-[2rem] sm:text-[3rem] uppercase">
            Photography
          </h2>
        </div>
        <div className="w-full flex justify-around items-start ">
          <PhotoGallery pathname={pathname} />
        </div>
      </div>
    </section>
  );
};
