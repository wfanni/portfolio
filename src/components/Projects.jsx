import { forwardRef } from 'react';
import preview from '../assets/preview.png';
import ClientShowcase from './ClientShowcase';

const Projects = forwardRef(function Projects({}, ref) {
    return (
        <section ref={ref} className="bg-projects xs:bg-cover lg:bg-[length:100%] bg-no-repeat xs:bg-[left_top_-7rem] lg:bg-top min-h-screen h-fit pt-16 w-full flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">Projects</h2>
            <h3 className="xs:w-4/5 lg:w-3/5 text-center text-lg">In my current job, I have worked with some of the biggest insurance companies, but as I cannot really showcase those projects here, I started developing Demo apps.</h3>
            <ClientShowcase />
            <h2 className="text-[2rem] text-center xs:mb-2 lg:mb-8">My Demo Apps</h2>
            <section className="relative xs:w-4/5 lg:w-3/4 flex xs:flex-col-reverse lg:flex-row xs:justify-center xs:items-center lg:justify-between xs:gap-8 lg:gap-0">
                <div className="flex flex-col gap-6 xs:items-center lg:items-start">
                    <h3 className="xs:text-xl sm:text-2xl"><span className="text-orange text-sm font-bold">WIP</span> Project Management App</h3>
                    <div className="flex gap-6">
                        <a className="flex items-center gap-4 cursor-default" href="https://wfanni.github.io/project-management-app/" target="_blank">Check it out live: <i className="cursor-pointer hover:text-orange duration-200 transition-all fa-solid fa-globe text-xl"></i></a>
                        <a className="hover:text-orange duration-200 transition-all" href="https://github.com/wfanni/project-management-app" target="_blank"><i className="fa-brands fa-github text-xl"></i></a>
                    </div>
                    <p className="xs:w-full lg:w-3/4 text-justify">This is a small Project Manager Application, where you can add personal projects you're currently working on or planning to start in the future. You can add/remove task items and track what tasks have been finished already.</p>
                    <p className="xs:w-full lg:w-3/4 text-justify">I went for a rather minimalistic, but colorful and playful design, also made sure you can easily use the App on mobile and smaller devices.</p>
                    <p className="xs:w-full lg:w-3/4 text-justify">You will also be able to see if a project's deadline is approaching and database will also be set up. It is still in progress, I'm happy to take feedback!</p>
                </div>
                <img className="xs:w-full lg:w-3/5 rotate-2 xs:-mr-4 lg:-mr-12" src={preview} alt="work-desktop" />
            </section>
        </section>
    )
})

export default Projects