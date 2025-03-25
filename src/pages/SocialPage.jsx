import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function SocialPage({ lang, changeLanguage }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <SocialMedia />
      <Footer />
    </div>
  );
}
