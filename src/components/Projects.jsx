import { forwardRef } from 'react';
import preview from '../assets/preview.png';

const Projects = forwardRef(function Projects({}, ref) {
    return (
        <section ref={ref} className="h-screen w-full pt-44 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] -mt-16 uppercase">Projects</h2>
            <section className="relative w-3/4 flex justify-between">
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl"><span className="text-orange text-sm font-bold">WIP</span> Project Management App</h3>
                    <div className="flex gap-6">
                        <a className="flex items-center gap-4 cursor-default" href="https://wfanni.github.io/project-management-app/" >Check it out live: <i className="cursor-pointer hover:text-orange transition-200 transition-all fa-solid fa-globe text-xl"></i></a>
                        <a className="hover:text-orange transition-200 transition-all" href="https://github.com/wfanni/project-management-app" ><i className="fa-brands fa-github text-xl"></i></a>
                    </div>
                    <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img className="w-3/5 rotate-2 -mr-12" src={preview} alt="work-desktop" />
            </section>
        </section>
    )
})

export default Projects