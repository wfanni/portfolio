import { forwardRef } from "react";

const Skills = forwardRef(function Skills({}, ref) {
    return (
        <section ref={ref} className="h-screen pt-12 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">Skills</h2>
            <div className="w-3/4 mx-auto flex flex-col items-center justify-center gap-12">
                <div className="relative w-full h-12 bg-slate-200 text-white leading-[3rem] before:content-['HTML'] before:absolute before:h-12 before:w-[95%] before:pl-4 before:bg-orange"></div>
                <div className="relative w-full h-12 bg-slate-200 text-white leading-[3rem] before:content-['CSS'] before:absolute before:h-12 before:w-[95%] before:pl-4 before:bg-orange"></div>
                <div className="relative w-full h-12 bg-slate-200 text-white leading-[3rem] before:content-['JS'] before:absolute before:h-12 before:w-[80%] before:pl-4 before:bg-orange"></div>
                <div className="relative w-full h-12 bg-slate-200 text-white leading-[3rem] before:content-['REACT'] before:absolute before:h-12 before:w-[70%] before:pl-4 before:bg-orange"></div>
            </div>
        </section>
    )
})

export default Skills