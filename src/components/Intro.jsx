import logo from '../assets/logo.png';

export default function Intro() {
    return (
        <section className="h-screen relative flex flex-col items-center justify-center">
            <img className="mt-[-8rem]" src={logo} alt="logo" />
            <h1 className="relative w-full mt-[6rem] flex flex-col items-center justify-center">
                <span className="absolute translate-x-[-260px] text-[5rem] uppercase">Hi, I'm Fanni</span>
                <span className="absolute translate-x-[293px] translate-y-[3.5rem] text-[3rem] text-orange uppercase">Frontend Developer</span>
            </h1>
        </section>
    )
}