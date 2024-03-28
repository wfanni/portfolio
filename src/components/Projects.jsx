import desktop from '../assets/project-management-app-desktop.png';
import mobile from '../assets/project-management-app-mobile.PNG';
import mobile2 from '../assets/project-management-app-mobile2.jpg';

export default function Projects() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] -mt-16 uppercase">Projects</h2>
            <section className="relative w-3/4 flex gap-12">
                <div className="flex flex-col gap-12">
                    <h3 className="text-2xl">Project Management App</h3>
                    <p classNae="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img className="w-1/2 rotate-2" src={desktop} alt="work-desktop" />
                <img className="w-48 absolute right-[30rem] top-36 -rotate-2" src={mobile2} alt="work-mobile" />
            </section>
        </section>
    )
}