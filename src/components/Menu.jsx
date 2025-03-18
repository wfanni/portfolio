import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LANGUAGES } from "../constants/languages";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import logo from "../assets/myLogo2025_white.svg";

export default function Menu({
  scrollPosition,
  sections,
  changeLanguage,
  lang,
  selectedLanguage
}) {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [langSelected, setLangSelected] = useState("en");
  const dropdownRef = useRef();
  
  useEffect(() => {
    document.addEventListener("click", handleBlur, true);
    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, []);
  
  function setLanguage() {
    langSelected === selectedLanguage;
    console.log(selectedLanguage)
  }
  function handleBlur(e) {
    if (dropdownRef && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  }
  function handleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }

  const checkboxRef = useRef();
  // let scrollStylesUl = "";
  // let scrollStylesHamMenu = "";
  // if (scrollY === 0) {
  //   scrollStylesUl = "lg:bg-transparent xs:bg-white/90";
  //   scrollStylesHamMenu = "bg-transparent";
  // } else {
  //   scrollStylesUl = "lg:bg-white xs:bg-white/90 lg:shadow-lg";
  //   scrollStylesHamMenu = "bg-white/50";
  // }

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
    <div className="xs:fixed lg:static w-full h-fit xs:z-20 lg:z-0">
      <nav className="h-fit lg:bg-gradient-to-r from-white to-transparent xs:min-h-[100vh] lg:min-h-screen w-80 pb-12 pt-12 lg:px-4 xs:z-60 lg:z-10 xs:absolute flex xs:flex-col lg:flex-col xs:justify-start lg:justify-start items-start xs:gap-12 lg:gap-12 transition-all duration-200">
            <Link
              to="/"
              className="xs:hidden lg:block w-20 z-10 ml-6 hover:scale-110 transition-all duration-200"
            >
              <img src={logo} alt="wfanni logo" />
            </Link>
        <ul
          className={`h-fit xs:min-h-[120vh] sm:min-h-[90vh] w-fit lg:px-4 xs:z-60 lg:z-10 xs:absolute lg:static flex xs:flex-col lg:flex-col xs:justify-start lg:justify-start items-start xs:gap-4 transition-all duration-200`}
        >
          <li
            ref={dropdownRef}
            onClick={handleDropdown}
            className={`group relative p-2 text-[1rem] cursor-pointer flex gap-2 items-center  uppercase`}
          >
            <span className="hover:text-orange transition-all duration-200">{t("menuWorks")}</span>
            <i className={`${
              isDropdownOpen ? "fa-angle-up text-orange" : "fa-angle-down"
            } fa-solid transition-all duration-200`}></i>
            <ul
            className={`${
              isDropdownOpen ? "opacity-100 translate-x-24" : "opacity-0 -translate-x-24"
            } absolute top-10 -left-20 min-w-40 flex flex-col gap-4 transition-all duration-700 ease-in-out`}
          >
            <li>
              <Link
                className={` ${isDropdownOpen ? "opacity-100" : "opacity-0"} w-full inline-block p-2 indent-4 hover:text-orange text-[1rem] uppercase group-hover:text-dark group-hover:hover:text-orange transition-all duration-400`}
                to="/design"
              >
                {t("subMenuUI")}
              </Link>
            </li>
            <li>
              <Link
                className={` ${isDropdownOpen ? "opacity-100" : "opacity-0"} w-full inline-block p-2 indent-4 hover:text-orange text-[1rem] uppercase group-hover:text-dark group-hover:hover:text-orange transition-all duration-400`}
                to="/social-media"
              >
                {t("subMenuSocial")}
              </Link>
            </li>
            <li>
              <Link
                className={` ${isDropdownOpen ? "opacity-100" : "opacity-0"} w-full inline-block p-2 indent-4 hover:text-orange text-[1rem] uppercase group-hover:text-dark group-hover:hover:text-orange transition-all duration-400`}
              >
                {t("subMenuPhoto")}
              </Link>
            </li>
            </ul>
          </li>
          <li className={`${
              isDropdownOpen ? "translate-y-36" : "translate-y-0"
            } relative p-2 text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-200`}>
            <Link to="/about" className="inline-block">{t("menuAbout")}</Link>
          </li>
          <li
            onClick={() => {
              scrollToSection(sections.contact), menuItemClick();
            }}
            className={`${
              isDropdownOpen ? "translate-y-36" : "translate-y-0"
            } relative p-2 text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-200`}
          >
            {t("menuContact")}
          </li>
        </ul>
      </nav>
    </div>
  );
}

{
  /* <select
              defaultValue={"en"}
              onChange={onChangeLang}
              className="xs:text-2xl lg:text-lg cursor-pointer menu-item outline-none border-none bg-transparent "
            >
              {LANGUAGES.map(({ code }) => (
                <option key={code} value={code} className="bg-transparent">
                  {code}
                </option>
              ))}
            </select> */
}


// <ul
//   className={`${scrollStylesUl} ${
//     isMenuOpen
//       ? "xs:translate-y-0 xs:pt-20 lg:pt-0"
//       : "xs:-translate-y-[100vh] lg:translate-y-0"
//   } xs:min-h-[100vh] lg:min-h-16 w-full pt-12 lg:px-4 xs:z-60 lg:z-10 xs:absolute flex xs:flex-col lg:flex-col xs:justify-start lg:justify-start items-start xs:gap-12 lg:gap-4 transition-all duration-200`}
// ></ul>


{/* <li className="flex justify-end gap-2 pl-1 text-[1rem] mx-[0.2rem] ">
            <div onClick={()=>{setLangSelected("es");setLanguage()}} className="flex justify-center items-center gap-2 after:content-['•'] after:w-2 after:h-full">
              <input
                className="hidden peer"
                type="radio"
                onChange={changeLanguage}
                id="english"
                name="lang-switcher"
                value="en"
              />
              <label
                htmlFor="english"
                className={`cursor-pointer border-b-[2px] border-transparent leading-4 ${
                  lang === "en" ? "text-orange font-[600]" : null
                } peer-checked:text-orange transition-all duration-200 hover:text-orange hover:border-orange`}
              >
                EN
              </label>
            </div>
            <div onClick={()=>{setLangSelected("es");setLanguage()}} className="flex justify-center items-center">
              <input
                className="hidden peer"
                type="radio"
                onChange={changeLanguage}
                id="spanish"
                name="lang-switcher"
                value="es"
              />
              <label
                htmlFor="spanish"
                className={`${
                  lang === "es" ? "text-orange font-[600]" : null
                } cursor-pointer border-b-[2px] border-transparent leading-4 peer-checked:text-orange transition-all duration-200 hover:text-orange hover:border-orange`}
              >
                ES
              </label>
            </div>
          </li> */}

          {/* <div
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
      </div> */}