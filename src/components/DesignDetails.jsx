import { useState } from "react";
import { useTranslation } from "react-i18next";
import PetGallery from "./PetGallery";
import HabitGallery from "./HabitGallery";


export default function DesignDetails ({ details, openPanel }) {

    return (
        <section className="w-full panel-content flex-col gap-10">
            <div className="w-full flex gap-10">
                <div className="flex flex-col gap-10">
                    <h2 className="min-w-fit text-[2rem]">{details.title}</h2>
                    <div className="flex flex-col gap-10">
                        <p className="text-justify">{details.desc}</p>
                        <p className="text-justify">{details.desc2}</p>
                        <p className="text-justify">{details.desc3}</p>
                        <p className="text-justify text-[1rem] text-orange/75">{details.desc4}</p>
                    </div>
                </div>
                {details.img3 ?
                <div className="w-full flex flex-col gap-0">
                    <img src={details.img1} className="relative -left-4 max-w-[450px] scale-105 h-fit" />
                    <img src={details.img2} className="relative -right-32 top-10 max-w-[450px] scale-105 h-fit" />
                </div>
                :
                <img src={details.img1} className="w-[450px] h-fit" />}

            </div>

            {details.img3 &&
            <div className="relative -left-48 -top-20 -mt-10 flex justify-center">
                <div className="">
                    <img src={details.img3} className="w-[750px] h-fit" />
                </div>
            </div>}

            {openPanel === 3 && <PetGallery />}
            {openPanel === 5 && <HabitGallery />}

        </section>
    )
};