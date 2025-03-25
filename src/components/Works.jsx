import { useTranslation } from "react-i18next";
import { useState } from "react";
import workDetails from "../json/workdetails.json";
import works from "../assets/works-pana2.svg";
import ui from "../assets/ui-ux-card.svg";
import social from "../assets/social-card.svg";
import photo from "../assets/photo-card.svg";
import WorkDetails from "./WorkDetails";

export default function Works ({}) {
      const [openPanel, setOpenPanel]= useState(0);
    return (
        <section className="min-h-screen h-fit w-full flex flex-col justify-start items-end">
            <img src={works} className="w-full h-[570px] -mr-28 object-[center_-36rem] object-cover"/>
            <div className="w-2/3 mr-36 flex flex-col gap-10 justify-start items-center">
                <div className="w-full flex flex-col justify-center items-center ">
                    <h2 className="w-fit mt-2 xs:text-[2rem] sm:text-[3rem] uppercase">Works</h2>
                </div>
                <p className="text-center">A collection of my work across UI/UX design, photo and video editing and content creation. From designing intuitive digital experiences to producing engaging visuals, photography, and video content, each project reflects my passion for creativity and storytelling.</p>
                <div className="w-full max-w-3/4 flex justify-around items-start ">
                    <article className="design-panel flex flex-col justify-center gap-10 ">
                    <div onClick={() => setOpenPanel(1)} className={`${openPanel === 1 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end justify-center transition-all duration-200`}>
                        <div className="max-h-32 absolute top-0 w-full h-fit ">
                        <img src={ui} className={`${openPanel === 1 ? "opacity-100" : "opacity-50"} absolute -top-10  scale-[105%] group-hover:opacity-100 transition-all duration-200`}/>
                        </div>
                        <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                        <h3 className="text-[1.2rem] text-center">UI/UX Design & Development</h3>
                        </div>
                    </div>
                    </article>
                    <article className="design-panel flex flex-col justify-center gap-10 ">
                    <div onClick={() => setOpenPanel(2)} className={`${openPanel === 2 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                        <div className="max-h-32 absolute top-0 w-full h-fit ">
                        <img src={photo} className={`${openPanel === 2 ? "opacity-100" : "opacity-50"} absolute -top-10 scale-[105%] group-hover:opacity-100 transition-all duration-200`}/>
                        </div>
                        <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                        <h3 className="text-[1.2rem] text-center">Photography, Photo & Video Editing</h3>
                        </div>
                    </div>
                    </article>
                    <article className="design-panel flex flex-col justify-center gap-10 ">
                    <div onClick={() => setOpenPanel(3)} className={`${openPanel === 3 ? "shadow-md shadow-orange/25 hover:shadow-orange/25" : ""} group relative overflow-hidden max-w-60 min-h-48 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-md flex items-end transition-all duration-200`}>
                        <div className="max-h-32 absolute top-0 w-full h-fit ">
                        <img src={social} className={`${openPanel === 3 ? "opacity-100" : "opacity-50"} absolute -top-6 scale-[110%] group-hover:opacity-100 transition-all duration-200`}/>
                        </div>
                        <div className="relative bg-white z-10 px-4 pb-2 pt-0">
                        <h3 className="text-[1.2rem] text-center">Social Media Content Creation & Marketing</h3>
                        </div>
                    </div>
                    </article>
                </div>
            </div>
            <div className="w-full mb-40 -mr-28 flex justify-start">
                {openPanel === 1 ? <WorkDetails link="uiWorks" details={workDetails.ui} /> : null}
                {openPanel === 2 ? <WorkDetails link="photoWorks" details={workDetails.photo} /> : null}
                {openPanel === 3 ? <WorkDetails link="socialWorks" details={workDetails.social} /> : null}
            </div>

        </section>
    )
};
