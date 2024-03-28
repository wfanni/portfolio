import me from '../assets/me2.jpg';

export default function About() {
    return (
        <section className="h-screen py-24 flex flex-col justify-center items-center gap-12">
            <h2 className="text-[3rem] uppercase">About Me</h2>
            <div className="flex justify-center items-center gap-24">
                <p className="w-1/3 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <img className="w-1/4" src={me} alt="image-of-me"/>
            </div>
        </section>
    )
}