import { useEffect } from "react";

export default function Toolbar({ scrollPosition, sections }) {
    console.log(sections);
    let scrollStyles = "";
    console.log(window.scrollY);
    if (scrollY === 0) {
        scrollStyles = "bg-transparent";
    } else {
        scrollStyles = "bg-[#ffffff4d]";
    }

    function scrollToSection(section) {
        section.current.scrollIntoView({behavior: 'smooth'});
        console.log(section.current);
    }
    return (
        <ul className={`${scrollStyles} h-24 w-full z-10 fixed top-0 flex justify-center items-center gap-24 transition-all transition-200 bg-[#ffffff4d] hover:bg-[#ffffffeb]`}>
            <li onClick={() => scrollToSection(sections.about)} className="cursor-pointer menu-item">About</li>
            <li onClick={() => scrollToSection(sections.skills)} className="cursor-pointer menu-item">Skills</li>
            <li onClick={() => scrollToSection(sections.projects)} className="cursor-pointer menu-item">Projects</li>
            <li onClick={() => scrollToSection(sections.contact)} className="cursor-pointer menu-item">Contact</li>
        </ul>
    )
}