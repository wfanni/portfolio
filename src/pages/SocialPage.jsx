import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function SocialPage({ lang, changeLanguage, pathname }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
        pathname={pathname}
      />
      <div className="mr-40 ml-60">
        <SocialMedia pathname={pathname}/>
        </div>
      <Footer pathname={pathname} />
    </div>
  );
}
