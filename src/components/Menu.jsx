import { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/myLogo2025_white.svg";

export default function Menu({
  scrollPosition,
  selectedLanguage,
  pathname
}) {
  const { t } = useTranslation();
  const [menuSelected, setMenuSelected] = useState("home");
  const [subMenuOpen, setIsSubMenuOpen] = useState(false);
  
  function setLanguage() {
    langSelected === selectedLanguage;
    console.log(selectedLanguage)
  }
  console.log(subMenuOpen)

  return (
    <div className={`${pathname === "/" ? "" : "bg-gradient-to-r from-white via-white/65 to-transparent"} fixed z-10 top-0 h-screen w-[235px] p-2 pr-6 pt-6 text-dark transition-all duration-200`}>
      <nav className={`py-4 h-fit px-4 flex flex-col justify-start items-start gap-4 transition-all duration-200`}>
            <Link
              onClick={() => setMenuSelected("home")}
              to="/"
              className="block w-20 z-10 ml-4 hover:scale-110 transition-all duration-200"
            >
              <img src={logo} alt="wfanni logo" />
            </Link>
        <ul
          className={`relative h-fit w-fit pl-6 flex flex-col justify-start items-start transition-all duration-200`}
        >
          <li className={`${menuSelected === "works" ? "selected" : null} menu-link relative text-[1rem] cursor-pointer flex flex-col gap-4 items-start uppercase`}
          >
          <a 
            onClick={() => setIsSubMenuOpen(prev => !prev)}
            to="/works"
            className={`inline-block`}>{t("menuWorks")}
            <i className={`${subMenuOpen ? "fa-angle-up" : "fa-angle-down"} fa-solid ml-2`}></i></a>
            <ul className={`${subMenuOpen ? "translate-x-0 opacity-100 z-10" : "opacity-0 z-[-1] translate-x-[-100%]"} absolute top-10 left-2 flex flex-col gap-4 ml-4 transition-all duration-700`}>
              <li className={`${menuSelected === "design" | pathname === "/works/design" ? "selected" : null} menu-link w-fit`}>
                <Link 
                onClick={() => setMenuSelected("design")}
                to="/works/design"
                className={`w-fit`}
                >UI/UX</Link>
              </li>
              <li className={`${menuSelected === "photo" | pathname === "/works/photography" ? "selected" : null} menu-link w-fit`}>
                <Link 
                onClick={() => setMenuSelected("photo")}
                to="/works/photography"
                className={`w-fit`}
                >Photography</Link>
              </li>
              <li className={`${menuSelected === "social" | pathname === "/works/social-media-content-creation" ? "selected" : null} menu-link w-fit mb-4`}>
                <Link 
                onClick={() => setMenuSelected("social")}
                to="/works/social-media-content-creation"
                className={` w-fit`}
                >Social Media</Link>
              </li>
            </ul>
          </li>
          <li className={`${menuSelected === "about" | pathname === "/about" ? "selected" : null} ${subMenuOpen ? "mt-36" : "mt-4"} menu-link mb-4 relative text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-700`}>
            <Link 
              onClick={() => setMenuSelected("about")}
              to="/about" 
              className="inline-block mt-[1px]">{t("menuAbout")}</Link>
          </li>
          <li className={`${menuSelected === "contact" | pathname === "/contact" ? "selected" : null} menu-link mb-4 relative text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-700`}>
            <Link 
              onClick={() => setMenuSelected("contact")}
              to="/contact"
              className="inline-block">{t("menuContact")}</Link>
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