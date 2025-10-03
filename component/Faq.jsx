"use client";
import styles from "@/styles/style";
import greyGroup from "../public/images/greyGroup.png";
import React, { act, useEffect, useState } from "react";
import Image from "next/image";
import Title from "./Title";

const Accordion = () => {
  const [lang, setLang] = useState("ar");

  // Sync language with localStorage and global event
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("lang");
    if (stored === "ar" || stored === "en") setLang(stored);

    const onLangChange = (e) => {
      if (e?.detail?.lang) setLang(e.detail.lang);
    };
    window.addEventListener("languageChange", onLangChange);
    return () => window.removeEventListener("languageChange", onLangChange);
  }, []);

  const t =
    lang === "en"
      ? {
          title: "Frequently Asked Questions",
          items: [
            {
              header: "Is the card sent immediately?",
              text: "Yes, the digital card is sent to the recipient within seconds of order confirmation.",
            },
            {
              header: "What payment methods are available?",
              text: "What payment methods are available?",
            },
            {
              header: "How does the card reach the recipient?",
              text: "How does the card reach the recipient?",
            },
            {
              header: "Does the app work outside Saudi Arabia?",
              text: "Does the app work outside Saudi Arabia?",
            },
            {
              header: "Can I send a card to more than one person?",
              text: "Can I send a card to more than one person?",
            },
          ],
          
        }
      : {
          title: "الأسئلة الشائعة",
          items: [
            {
              header: "هل يتم إرسال البطاقة فورًا؟",
              text: "نعم، يتم إرسال البطاقة الرقمية للمستلم خلال ثوانٍ من تأكيد الطلب.",
            },
            {
              header: "ما طرق الدفع المتوفرة؟",
              text: "ما طرق الدفع المتوفرة؟",
            },
            {
              header: "كيف تصل البطاقة إلى المستلم؟",
              text: "كيف تصل البطاقة إلى المستلم؟",
            },
            {
              header: " هل التطبيق يعمل خارج السعودية؟",
              text: " هل التطبيق يعمل خارج السعودية؟",
            },
            {
              header: "هل يمكن إرسال بطاقة لأكثر من شخص؟",
              text: "هل يمكن إرسال بطاقة لأكثر من شخص؟",
            },
          ],
        };

  return (
    <section dir={lang === "en" ? "ltr" : "rtl"} className={`relative z-20 overflow-hidden bg-white ${styles.padding}`}>
    <div className="absolute -z-10 hidden lg:block -bottom-8 right-0 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[206px] h-auto opacity-100">
    <svg
    viewBox="0 0 206 288"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    >
    <path
      d="M144.459 146.982L36.8573 171.761L56.6807 257.843C58.8713 267.355 64.7511 275.608 73.0265 280.785C81.3019 285.963 91.2951 287.641 100.808 285.45L172.542 268.931M144.459 146.982L172.542 268.931M144.459 146.982L129.591 82.4213M144.459 146.982L33.2706 172.587C27.5631 173.902 21.5672 172.895 16.6019 169.789C11.6367 166.682 8.10884 161.731 6.79447 156.023L1.83862 134.503C0.524247 128.795 1.53102 122.799 4.63746 117.834C7.74389 112.869 12.6955 109.341 18.4031 108.027L129.591 82.4213M144.459 146.982L252.06 122.203L271.884 208.284C274.074 217.797 272.396 227.79 267.219 236.065C262.042 244.341 253.789 250.22 244.276 252.411L172.542 268.931M144.459 146.982L255.647 121.377C261.355 120.063 266.306 116.535 269.413 111.57C272.519 106.604 273.526 100.608 272.211 94.9009L267.256 73.3806C265.941 67.673 262.413 62.7214 257.448 59.615C252.483 56.5085 246.487 55.5017 240.779 56.8161L129.591 82.4213M129.591 82.4213L121.332 46.5542M129.591 82.4213L93.7241 90.6811C84.2116 92.8717 74.2184 91.1937 65.943 86.0163C57.6676 80.8389 51.7878 72.5862 49.5972 63.0736C47.4066 53.5611 49.0845 43.5679 54.2619 35.2925C59.4393 27.0171 67.6921 21.1374 77.2046 18.9467C81.9148 17.8621 86.7924 17.7157 91.5591 18.5161C96.3258 19.3165 100.888 21.0479 104.986 23.6115C109.083 26.1751 112.636 29.5206 115.44 33.4571C118.245 37.3936 120.247 41.844 121.332 46.5542M129.591 82.4213L165.458 74.1616C174.971 71.971 183.224 66.0912 188.401 57.8158C193.579 49.5404 195.256 39.5472 193.066 30.0347C190.875 20.5221 184.995 12.2694 176.72 7.09197C168.445 1.91458 158.452 0.236626 148.939 2.42725C139.426 4.61787 131.174 10.4976 125.996 18.773C120.819 27.0484 119.141 37.0416 121.332 46.5542"
      stroke="#222A40"
      strokeOpacity="0.2"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    </svg>
    </div>

      <div className={`flex flex-col justify-center items-center max-w-7xl mx-auto`}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[720px] text-center lg:mb-20">
            <Title
            text={t.title}
            mt="mt-0"
            textColor="text-blue"
            svgColor="#A3262A"
            />
                    
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {t.items.map((it, idx) => (
              <AccordionItem key={`${lang}-${idx}`} header={it.header} text={it.text} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text, lang }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  const rowDir = lang === "en" ? "flex-row text-left" : "flex-row-reverse text-right";
  const iconMargin = lang === "en" ? "mr-5" : "ml-5";
  const headerAlign = lang === "en" ? "text-left" : "text-right";
  const textAlign = lang === "en" ? "text-left" : "text-right";

  return (
    <div
      className={`mb-8 min-w-[100%] md:min-w-[500px] lg:min-w-[896px] rounded-[16px] bg-white px-4 py-3 sm:px-4 sm:py-4 
                  ${active ? "border-2 min-h-[162px]" : "min-h-[122px]"}`}
      style={{
        boxSizing: 'border-box',
        boxShadow: '0px 6px 16px rgba(34, 42, 64, 0.18)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button className={`faq-btn flex w-full ${rowDir}`} onClick={handleToggle}>
        <div
          className={`${iconMargin} ${lang === "en" ? "rotate-180" : "rotate-0"} 
                     flex h-6 lg:h-10 w-6 lg:w-10 shrink-0 items-center justify-center rounded-full bg-primary/5 text-[#0C0B0B]`}
        >
          {active ? (
            <svg width="full" height="full" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25.3309" cy="25.3309" r="25.3309" transform="matrix(-1 0 0 1 50.6602 0)" fill="#A3262A"/>
              <path d="M33.5859 22.2212L25.3293 30.4405L17.0728 22.2212" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="full" height="full" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25.3309" cy="25.3309" r="25.3309" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 50.6602 51.3232)" fill="#A3262A"/>
              <path d="M28.439 34.249L20.2197 25.9924L28.439 17.7358" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>

        <div className={`w-full ${headerAlign}`}>
          <h4 className="text-[16px] lg:text-[20px] font-bold text-[#0C0B0B]">{header}</h4>
        </div>
      </button>

      <div className={`${textAlign} duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="text-[16px] lg:text-[18px] font-normal leading-relaxed text-[#7E7E7E]">{text}</p>
      </div>
    </div>
  );
};
