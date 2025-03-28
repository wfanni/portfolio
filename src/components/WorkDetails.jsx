import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import UIShowcase from "./UIShowcase";
import PhotoShowcase from "./PhotoShowcase";
import PhotoGallery from "./PhotoGallery";


export default function WorkDetails ({ details, link, openPanel, pathname }) {

    return (
        <section className="panel-content w-full flex flex-col items-end gap-10">
            <div className={`w-full mt-12 flex flex-col justify-start items-start gap-10`}>
                <h2 className="text-[2rem]">{details.title}</h2>
                <p>{details.desc}</p>
                <p>{details.desc2}</p>
                <Link 
                    to={`${link === "uiWorks" ? "/works/design" : link === "photoWorks" ? "/works/photography" : link === "socialWorks" ? "/works/social-media-content-creation" : null}`}
                    className="max-w-fit py-2 px-4 rounded-lg bg-orange text-white hover:bg-orange/75 transition-all dfuration-200">
                        {link === "photoWorks" ? "See more photos..." : link === "socialWorks" ? "See some reels..." : "Read more..."}
                </Link>
            </div>
            {openPanel === 1 ? <UIShowcase pathname={pathname} /> : openPanel === 2 ? <PhotoGallery pathname={pathname} /> : null}
            
        </section>
    )
};