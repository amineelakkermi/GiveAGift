"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "@/styles/style";
import { useLanguage } from "./LanguageProvider";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { lang, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
  
  }, [isOpen]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "en" ? "ltr" : "rtl";
    const html = document.documentElement;
    html.setAttribute("dir", dir);
    html.setAttribute("lang", lang);
  }, [lang]);

  const t =
    lang === "en"
      ? {
          features: "Application Features",
          joinUs: "Join from Zed stores",
          about: "Our App",
          joinUs: "Join",
      
          reviews: "Reviews",
          download: "Download the application",
          closeMenu: "Close menu",
        }
      : {
          features: "المميزات",
          joinUs: "انضم من متاجر زد",
          about: "تعرف على تطبيقنا",
          reviews: "التقييمات",
          download: "حمل تطبيقنا",
          closeMenu: "اغلاق القائمة",
        };

  const menuItems = [
    { id: "featuresClient", text: t.features },
    { id: "about", text: t.about },
    { id: "download", text: t.download },
    { id: "join", text: t.joinUs },

  ];


  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = menuItems
      .map((m) => document.getElementById(m.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    let currentActive = activeSection;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (id !== currentActive) {
            currentActive = id;
            setActiveSection(id);
          }
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    const next = lang === "ar" ? "en" : "ar";
    changeLanguage(next);
  };

  return (
    <header
      className={`fixed w-full flex justify-center items-center max-h-[80px] z-50 transition-all duration-300 ${styles.padding} ${
        isScrolled ? "shadow-md bg backdrop-blur" : "bg-transparent"
      } overflow-visible`}
    >
      <div className="container max-w-7xl mx-auto">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="shrink-0 font-bold text-white">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              aria-label={t.home}
            >
              <Image
                src={logo}
                alt="BarberApp Logo"
                width={140}
                height={40}
                priority
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="flex gap-8 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id ? "text-[#E1BD80]" : "text-white"
                } cursor-pointer text-base font-medium transition-colors hover:text-white`}
              >
                <span className={`${activeSection === item.id ? "nav-link nav-link--active" : "nav-link"}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="rounded-[36px] px-5 py-3 text-[14px] font-bold
              bg-white text-blue cursor-pointer transition-colors"
              aria-label={lang === "ar" ? "تغيير اللغة" : "Change language"}
              title={lang === "ar" ? "تغيير اللغة" : "Change language"}
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden py-3">
          <div className="flex items-center justify-between w-full">
            <a
              href="#hero"
              className="shrink-0 font-bold text-white"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              aria-label="الرئيسية"
            >
              <Image
                src={logo}
                alt="BarberApp Logo"
                width={96}
                height={28}
                priority
                className="h-7 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-2">
              
              
              {/* Language Button */}
              <button
              onClick={toggleLanguage}
              className="rounded-[36px] px-5 py-3 text-[14px] font-bold
              bg-white text-blue cursor-pointer transition-colors"
              aria-label={lang === "ar" ? "تغيير اللغة" : "Change language"}
              title={lang === "ar" ? "تغيير اللغة" : "Change language"}
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>
              {/* Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-white"
                aria-label={isOpen ? t.closeMenu : t.openMenu}
              >
                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-[9999]">
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              <div className="fixed right-0 top-0 h-screen w-80 max-w-[85vw] bg border-l border-white/10 p-6 shadow-2xl overflow-y-auto">
                <div className="flex items-center justify-between w-full">
                  <a
                    href="#hero"
                    className="shrink-0 font-bold text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("hero");
                    }}
                    aria-label={t.home}
                  >
                    <Image
                      src={logo}
                      alt="BarberApp Logo"
                      width={96}
                      height={28}
                      priority
                      className="h-7 w-auto object-contain"
                    />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full text-white"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col mt-10">
                  <div className="w-full space-y-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-right ${
                          activeSection === item.id ? "text-[#E1BD80]" : "text-white"
                        } py-3 px-2 rounded-lg transition-all duration-300 hover:bg-white/10`}
                      >
                        <span className={`${activeSection === item.id ? "nav-link nav-link--active" : "nav-link"}`}>
                          {item.text}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
