import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";

const DesignDetails = forwardRef(function Design({ details }, ref) {

    return (
        <section className="panel-content flex flex-col gap-10">
            <div className="flex flex-col gap-10">
                <h2 className="text-[2rem]">{details.title}</h2>
            </div>
            {details.img3 ? 
            <div className="flex flex-col justify-between">
                <p>{details.desc}</p>
                <img src={details.img1} className="w-1/2 bg-contain self-end" />
                <div className="flex justify-between gap-10">
                    <img src={details.img3} className="w-1/2 bg-contain" />
                    <img src={details.img2} className="w-1/2 bg-contain" />
                </div>
            </div>
            : 
            <div className="flex justify-between">
                <p>{details.desc}</p>
                <img src={details.img1} className="w-1/2 bg-contain" />
            </div>}
            
        </section>
    )
});

export default DesignDetails