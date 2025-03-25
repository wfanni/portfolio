import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DesignDetails ({ details }) {

    return (
        <section className="panel-content flex-col gap-10">
            <div className="flex gap-10">
                <div className="flex flex-col gap-10">
                    <h2 className="min-w-fit text-[2rem]">{details.title}</h2>
                    <div className="flex flex-col gap-10">
                        <p className="text-justify">{details.desc}</p>
                        <p className="text-justify">{details.desc2}</p>
                        <p className="text-justify">{details.desc3}</p>
                    </div>
                </div>
                <img src={details.img1} className="w-[450px] h-fit" />

            </div>
            {details.img3 && 
            <div className="mt-10 flex flex-col justify-between">
                <div className="flex gap-10">
                    <img src={details.img3} className="w-[450px] h-fit" />
                    <img src={details.img2} className="w-[450px] h-fit" />
                </div>
            </div>}
            
        </section>
    )
};