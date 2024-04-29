import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants/languages";
import { useTranslation } from "react-i18next";

export default function Menu({ scrollPosition, sections, changeLanguage, lang }) {
  const { i18n, t } = useTranslation();
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
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  function toggleHamMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function menuItemClick() {
    if (checkboxRef.current) {
      checkboxRef.current.click();
    }
  }


  return (
    <div className="xs:fixed lg:static w-full xs:z-20 lg:z-0">
      <div
        className={`${scrollStylesHamMenu} xs:block lg:hidden fixed top-2 right-0 z-30 ham-menu w-fit p-6 py-4 rounded-full rounded-r-none transition-all duration-200`}
      >
        <input
          ref={checkboxRef}
          onChange={toggleHamMenu}
          type="checkbox"
          id="checkbox4"
          className="checkbox4 visuallyHidden"
        />
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
      <nav className="relative w-full h-[64px]">
        <ul
          className={`${scrollStylesUl} ${
            isMenuOpen
              ? "xs:translate-y-0 xs:pt-20 lg:pt-0"
              : "xs:-translate-y-[100vh] lg:translate-y-0"
          } xs:min-h-[100vh] lg:min-h-16 w-full xs:z-60 lg:z-10 xs:absolute lg:fixed top-0 flex xs:flex-col lg:flex-row xs:justify-start lg:justify-center items-center xs:gap-12 lg:gap-16 transition-all duration-200`}
        >
          <li className="flex gap-2 text-[1rem] mx-[0.2rem] pt-2 px-4 pb-[0.3rem]">
            <div className="flex justify-center items-center gap-2 after:content-['•'] after:w-2 after:h-full">
              <input className="hidden peer" type="radio" onChange={changeLanguage} id="english" name="lang-switcher" value="en" />
              <label htmlFor="english" className={`cursor-pointer border-b-[2.5px] border-transparent leading-4 ${lang === "en" ? "text-orange" : null} peer-checked:text-orange transition-all duration-200 hover:text-orange hover:border-orange`}>EN</label>
            </div>
            <div className="flex justify-center items-center">
              <input className="hidden peer" type="radio" onChange={changeLanguage} id="spanish" name="lang-switcher" value="es" />
              <label htmlFor="spanish" className={`cursor-pointer border-b-[2.5px] border-transparent leading-4 peer-checked:text-orange transition-all duration-200 hover:text-orange hover:border-orange`}>ES</label>
            </div>
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.about), menuItemClick();
            }}
            className="text-[1rem] cursor-pointer menu-item"
          >
            {t("menuAbout")}
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.skills), menuItemClick();
            }}
            className="text-[1rem] cursor-pointer menu-item"
          >
            {t("menuSkills")}
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.projects), menuItemClick();
            }}
            className="text-[1rem] cursor-pointer menu-item"
          >
            {t("menuProjects")}
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.design), menuItemClick();
            }}
            className="text-[1rem] cursor-pointer menu-item"
          >
            {t("menuDesign")}
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.contact), menuItemClick();
            }}
            className="text-[1rem] cursor-pointer menu-item"
          >
            {t("menuContact")}
          </li>
        </ul>
      </nav>
    </div>
  );
}

{/* <select
              defaultValue={"en"}
              onChange={onChangeLang}
              className="xs:text-2xl lg:text-lg cursor-pointer menu-item outline-none border-none bg-transparent "
            >
              {LANGUAGES.map(({ code }) => (
                <option key={code} value={code} className="bg-transparent">
                  {code}
                </option>
              ))}
            </select> */}
