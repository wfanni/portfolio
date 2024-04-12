import { useState } from 'react';
import logo from '../assets/myLogo24.svg';

export default function Intro() {
    const [subtitleOpacity, setSubtitleOpacity] = useState(false);

    setTimeout(() => {
        setSubtitleOpacity(true);
    }, 1700)
    return (
        <section className="xs:h-[100vh] sm:h-screen relative flex flex-col items-center justify-center">
            <img className="mt-[-8rem] w-20" src={logo} alt="logo" />
            <h1 className="relative w-full mt-[6rem] flex flex-col items-center justify-center">
                {/* <span className="absolute xs:translate-x-[-30px] sm:translate-x-[-30px] md:translate-x-[-100px] lg:translate-x-[-100px] xs:text-4xl sm:text-[4rem] uppercase xs:animate-fadeInLeftXS sm:animate-fadeInLeftS md:animate-fadeInLeft lg:animate-fadeInLeftLG">Hi, I'm Fanni</span>
                <span className={`absolute ${subtitleOpacity === false ? 'opacity-0' : 'opacity-100'} xs:translate-x-[25px] sm:translate-x-[25px] md:translate-x-[100px] lg:translate-x-[293px] translate-y-[3.5rem] xs:text-xl sm:text-[2.5rem] text-orange uppercase xs:animate-fadeInRightXS sm:animate-fadeInRightS md:animate-fadeInRight lg:animate-fadeInRightLG`}>Frontend Developer</span> */}
            <span className="absolute xs:text-[2.25rem] sm:text-[4rem] xl:translate-x-[-210px] uppercase animate-fadeInLeft xl:animate-fadeInLeftXL">Hi, I'm Fanni</span>
                <span className={`absolute ${subtitleOpacity === false ? 'opacity-0' : 'opacity-100'} xs:text-[1.25rem] sm:text-[2.5rem] translate-y-[3.5rem] xl:translate-x-[240px] text-orange uppercase animate-fadeInRight xl:animate-fadeInRightXL`}>Frontend Developer</span>
            </h1>
        </section>
    )
}