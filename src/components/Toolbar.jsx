import { useRef, useState } from "react";

export default function Toolbar({ scrollPosition, sections }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const checkboxRef = useRef();
    let scrollStylesUl = "";
    let scrollStylesHamMenu = "";
    if (scrollY === 0) {
        scrollStylesUl = "lg:bg-transparent xs:bg-white/90";
        scrollStylesHamMenu = "bg-transparent";
    } else {
        scrollStylesUl = "lg:bg-white xs:bg-white/90 lg:shadow-lg";
        scrollStylesHamMenu = "bg-white/50";
    }

    function scrollToSection(section) {
        section.current.scrollIntoView({behavior: 'smooth'});
    }

    function toggleHamMenu() {
        setIsMenuOpen(prev => !prev);
    }
    
    function menuItemClick() {
        if (checkboxRef.current) {
            checkboxRef.current.click();
        }
    }
    return (
        <div className="xs:fixed lg:static w-full xs:z-20 lg:z-0">
            <div className={`${scrollStylesHamMenu} xs:block lg:hidden fixed top-2 right-0 z-30 ham-menu w-fit p-6 py-4 rounded-full rounded-r-none transition-all duration-200`}>
                <input ref={checkboxRef} onChange={toggleHamMenu} type="checkbox" id="checkbox4" className="checkbox4 visuallyHidden" />
                <label htmlFor="checkbox4">
                    <div className="hamburger hamburger4">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                        <span className="bar bar5"></span>
                    </div>
                </label>
            </div>
            <ul className={`${scrollStylesUl} ${isMenuOpen ? 'xs:translate-y-0 xs:pt-20 lg:pt-0' : 'xs:-translate-y-[100vh] lg:translate-y-0'} xs:min-h-[100vh] lg:min-h-16 w-full xs:z-60 lg:z-10 xs:absolute lg:fixed top-0 flex xs:flex-col lg:flex-row xs:justify-start lg:justify-center items-center xs:gap-12 lg:gap-24 transition-all duration-200`} >
                <li onClick={() => {scrollToSection(sections.about), menuItemClick()}} className="xs:text-2xl lg:text-lg cursor-pointer menu-item">About</li>
                <li onClick={() => {scrollToSection(sections.skills), menuItemClick()}} className="xs:text-2xl lg:text-lg cursor-pointer menu-item">Skills</li>
                <li onClick={() => {scrollToSection(sections.projects), menuItemClick()}} className="xs:text-2xl lg:text-lg cursor-pointer menu-item">Projects</li>
                <li onClick={() => {scrollToSection(sections.design), menuItemClick()}} className="xs:text-2xl lg:text-lg cursor-pointer menu-item">Design</li>
                <li onClick={() => {scrollToSection(sections.contact), menuItemClick()}} className="xs:text-2xl lg:text-lg cursor-pointer menu-item">Contact</li>
            </ul>
        </div>
    )
}