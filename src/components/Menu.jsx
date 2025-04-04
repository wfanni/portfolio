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
  const [isHomePage, setIsHomePage] = useState(false);
  const [menuSelected, setMenuSelected] = useState("home");
  
  function setLanguage() {
    langSelected === selectedLanguage;
    console.log(selectedLanguage)
  }

  function isItHomePage() {
    if (window.location.href === "http://localhost:5173/#/") {
      setIsHomePage(true);
    }
    else setIsHomePage(false);
    console.log(isHomePage);
  }

  function toggleHamMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div className={`fixed top-4 h-fit p-2 pr-6 bg-white/60 text-dark transition-all duration-200`}>
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
          <li className={`${menuSelected === "works" | pathname.includes("works") ? "selected" : null} menu-link relative text-[1rem] cursor-pointer flex gap-2 items-center uppercase`}
          >
          <Link 
            onClick={() => setMenuSelected("works")}
            to="/works"
            className="inline-block">{t("menuWorks")}</Link>
          </li>
          <li className={`${menuSelected === "about" | pathname === "/about" ? "selected" : null} menu-link relative text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-200`}>
            <Link 
              onClick={() => setMenuSelected("about")}
              to="/about" 
              className="inline-block">{t("menuAbout")}</Link>
          </li>
          <li className={`${menuSelected === "contact" | pathname === "/contact" ? "selected" : null} menu-link relative text-[1rem] cursor-pointer hover:text-orange uppercase transition-all duration-200`}>
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