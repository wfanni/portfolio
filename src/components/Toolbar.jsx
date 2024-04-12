import { useEffect } from "react";

export default function Toolbar({ scrollPosition, sections }) {
    console.log(sections);
    let scrollStyles = "";
    console.log(window.scrollY);
    if (scrollY === 0) {
        scrollStyles = "bg-transparent";
    } else {
        scrollStyles = "bg-white shadow-lg";
    }

    function scrollToSection(section) {
        section.current.scrollIntoView({behavior: 'smooth'});
        console.log(section.current);
    }
    return (
        <ul className={`${scrollStyles} min-h-16 w-full z-10 fixed top-0 flex justify-center items-center xs:gap-2 sm:gap-24 transition-all duration-200`}>
            <li onClick={() => scrollToSection(sections.about)} className="xs:text-sm sm:text-lg cursor-pointer menu-item">About</li>
            <li onClick={() => scrollToSection(sections.skills)} className="xs:text-sm sm:text-lg cursor-pointer menu-item">Skills</li>
            <li onClick={() => scrollToSection(sections.projects)} className="xs:text-sm sm:text-lg cursor-pointer menu-item">Projects</li>
            <li onClick={() => scrollToSection(sections.design)} className="xs:text-sm sm:text-lg cursor-pointer menu-item">Design</li>
            <li onClick={() => scrollToSection(sections.contact)} className="xs:text-sm sm:text-lg cursor-pointer menu-item">Contact</li>
        </ul>
    )
}