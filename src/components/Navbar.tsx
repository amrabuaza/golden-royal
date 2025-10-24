import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    // Update document direction
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="transition-transform hover:scale-105 duration-300">
              <Logo className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-md  font-bold text-gray-800 hover:text-gold-600 transition-colors lg:text-2xl">
                {t("navbar.companyName")}
              </span>
              <span className="text-xs text-gray-600">
                {t("navbar.companySubtitle")}
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              {t("navbar.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              {t("navbar.about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              {t("navbar.gallery")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-sm border border-gray-300 rounded-lg hover:border-gold-500 hover:bg-gold-50"
            >
              <Globe className="w-4 h-4" />
              <span className={`${i18n.language === "ar" ? "h-[15px]" : ""}`}>{i18n.language === "ar" ? "EN" : "عربي"}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gold-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              {t("navbar.home")}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              {t("navbar.about")}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              {t("navbar.gallery")}
            </button>

            {/* Language Toggle Button for Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300 border border-gray-300"
            >
              <Globe className="w-5 h-5" />
              <span>{i18n.language === "ar" ? "EN" : "عربي"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
