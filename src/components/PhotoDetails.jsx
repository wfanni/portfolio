import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PhotoShowcase from "./PhotoShowcase";

export default function PhotoDetails ({ details, link }) {

    return (
        <section className="panel-content w-full flex flex-col items-end gap-10">
            <div className="w-2/3 mr-60 mt-12 flex flex-col justify-start items-start gap-10">
                <h2 className="text-[2rem]">{details.title}</h2>
                <p>{details.desc}</p>
                <Link 
                    to={`${link === "uiWorks" ? "/design" : link === "photoWorks" ? "/photography" : link === "socialWorks" ? "/social-media-content-creation" : null}`}
                    className="max-w-fit py-2 px-4 rounded-lg bg-orange text-white hover:bg-orange/75 transition-all dfuration-200">
                        Read more...
                </Link>
            </div>
            <PhotoShowcase />
            
        </section>
    )
};