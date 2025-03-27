import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import UIShowcase from "./UIShowcase";
import PhotoShowcase from "./PhotoShowcase";

export default function WorkDetails ({ details, link, openPanel, pathname }) {

    return (
        <section className="panel-content w-full flex flex-col items-end gap-10">
            <div className={`${pathname.includes("works") ? "w-2/3" : "w-4/5"} mr-60 mt-12 flex flex-col justify-start items-start gap-10`}>
                <h2 className="text-[2rem]">{details.title}</h2>
                <p>{details.desc}</p>
                <p>{details.desc2}</p>
                <Link 
                    to={`${link === "uiWorks" ? "/works/design" : link === "photoWorks" ? "/works/photography" : link === "socialWorks" ? "/works/social-media-content-creation" : null}`}
                    className="max-w-fit py-2 px-4 rounded-lg bg-orange text-white hover:bg-orange/75 transition-all dfuration-200">
                        {link === "photoWorks" ? "See more photos..." : link === "socialWorks" ? "See some reels..." : "Read more..."}
                </Link>
            </div>
            {openPanel === 1 ? <UIShowcase /> : openPanel === 2 ? <PhotoShowcase /> : null}
            
        </section>
    )
};