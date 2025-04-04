import { useState } from "react";

// import Reels from "./Reels2";
import slides from "../json/reelsSlides";

export default function ReelsGallery({ pathname }) {

    const handleStartVideo = (e) => {
        // console.log(e);
        if (e.target.nodeName === "DIV") {
            console.log("div");
            e.target.lastChild.play();
            e.target.lastChild.setAttribute("controls", true);
            e.target.classList.add("hover:after:hidden");
            e.target.firstChild.classList.add("hidden");
        }
        else if (e.target.nodeName === "I") {
            console.log("icon");
            e.target.nextSibling.play();
            e.target.nextSibling.setAttribute("controls", true);
            e.target.parentElement.classList.add("hover:after:hidden");
            e.target.classList.add("hidden");
        }
    }
    return (
        <div className="max-w-4/5 flex flex-wrap justify-around items-start gap-10">
            {slides && slides.map((slide, index) => {
                return (
                    <div key={index} onClick={(e) => handleStartVideo(e)} className="[&:nth-child(2)]:mt-[30rem] [&:nth-child(3)]:-mt-[30rem] [&:nth-child(5)]:-mt-[30rem] [&:nth-child(7)]:-mt-[30rem] [&:nth-child(9)]:-mt-[30rem]
                    group w-[400px] relative cursor-pointer after:content-[''] after:opacity-0 after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:w-full after:h-full after:bg-black/25 after:z-[9] hover:after:opacity-[100] after:transition-all after:duration-[0.35s]">
                        <i onClick={(e) => handleStartVideo(e)} className="fa-solid fa-play text-white text-[4rem] opacity-0 group-hover:opacity-100 absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-200"></i>
                        <video
                        src={slide.sources.src}
                        type={slide.sources.type}
                        poster={slide.poster}
                        width="200px"
                        height="355px"
                        onClick={(e) => e.target.setAttribute("controls", true)}
                        className={`
                            ${slide.position ? slide.position : ""}
                            relative z-1 bg-white min-w-[400px] max-h-[711px] min-h-[711px] object-cover group-hover:z-[8] transition-all duration-[0.35s]
                            `}
                        />
                    </div>
                )
            }
            )}
        </div>
    )
}