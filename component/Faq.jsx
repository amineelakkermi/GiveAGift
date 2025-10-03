"use client";
import styles from "@/styles/style";
import React, { useEffect, useState } from "react";
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
            header: "1. Is the card sent immediately?",
            text: "Yes, the digital card is sent to the recipient within seconds of confirming the order.",
          },
          {
            header: "2. What payment methods are available?",
            text: "You can pay using the available electronic payment methods or cash if supported.",
          },
          {
            header: "3. How does the card reach the recipient?",
            text: "The card is delivered digitally to the recipient via the application.",
          },
          {
            header: "4. Does the app work outside Saudi Arabia?",
            text: "Yes, the app is available internationally depending on the service terms.",
          },
          {
            header: "5. Can I send a card to more than one person?",
            text: "Yes, you can send cards to multiple recipients using the app.",
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
    <section dir={lang === "en" ? "ltr" : "rtl"} className={`relative z-20  overflow-hidden bg-white ${styles.padding}`}>
      <div className={`${styles.marginY} flex flex-col justify-center items-center max-w-7xl mx-auto`}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* Titre */}
                  <Title
                    text={t.title}
                    mt="mt-0"
                    textColor="text-blue"
                    svgColor="#A3262A"
                  />
            
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
    <div className={`mb-8 ${active ? "min-h-[162.66px]" : "min-h-[122px]"} w-[99%] xl:min-w-[896px] rounded-[16px] bg-white pr-6 py-4
      ${active ? "border-2 border-[#1E2330]" : ""}
      sm:p-4 lg:px-4 xl:px-4`}
    style={{boxSizing: 'border-box', boxShadow: '0px 6px 16px rgba(34, 42, 64, 0.18)' , display: 'flex', justifyContent: 'center' , alignItems: 'start' ,   flexDirection: 'column', gap: '10px'}}>
      <button className={`faq-btn flex w-full ${rowDir}`} onClick={handleToggle}>
        <div className={`${iconMargin} ${lang === "en" ? "rotate-180" : "rotate-0"}  flex h-10 w-10 shrink-0 items-center justify-center rounded-full`}>
          {active ? (
           <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="25.3309" cy="25.3309" r="25.3309" transform="matrix(-1 0 0 1 50.6602 0)" fill="#A3262A"/>
           <path d="M33.5859 22.2212L25.3293 30.4405L17.0728 22.2212" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           
          ) : (
            <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25.3309" cy="25.3309" r="25.3309" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 50.6602 51.3232)" fill="#A3262A"/>
            <path d="M28.439 34.249L20.2197 25.9924L28.439 17.7358" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          )}
        </div>

        <div className={`w-full ${headerAlign}`}>
          <h4 className="text-[20px] font-bold text-[#170F49]">{header}</h4>
        </div>
      </button>

      <div className={`${textAlign} duration-200 ease-in-out ${active ? "block" : "hidden"}`}>
        <p className="text-[18px] font-normal leading-relaxed text-[#686868]">{text}</p>
      </div>
    </div>
  );
};