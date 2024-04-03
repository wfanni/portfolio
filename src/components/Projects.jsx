import preview from '../assets/preview.png';

export default function Projects() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] -mt-16 uppercase">Projects</h2>
            <section className="relative w-3/4 flex gap-12">
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl"><span className="text-orange text-sm font-bold">WIP</span> Project Management App</h3>
                    <div className="flex gap-6">
                        <a className="hover:text-orange transition-200 transition-all" href="https://wfanni.github.io/project-management-app/" ><i className="fa-solid fa-globe text-xl"></i></a>
                        <a className="hover:text-orange transition-200 transition-all" href="https://github.com/wfanni/project-management-app" ><i className="fa-brands fa-github text-xl"></i></a>
                    </div>
                    <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img className="w-3/5 rotate-2 pr-6" src={preview} alt="work-desktop" />
            </section>
        </section>
    )
}