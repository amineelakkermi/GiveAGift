import Image from "next/image";

/* Shapes Part */
import arrow from "../public/images/arrow.png";
import arrow2 from "../public/images/arrow2.png";
import group from "../public/images/group.png";
import group2 from "../public/images/group2.png";

/* Mockups */
import mockup1 from "../public/images/mockup1.png";
import mockup11 from "../public/images/mockup11.png";
import mockup2 from "../public/images/mockup2.png";
import mockup3 from "../public/images/mockup3.png";

import styles from "@/styles/style";
import Title from "./Title";

export default function Hero({ lang = "ar" }) {
  const t =
    lang === "en"
      ? {
        title: "Send the most beautiful gifts instantly",
        paragraph1:
          "With GiveAGift, sending gifts has never been easier. Choose the gift, add your touch, and let us take care of the rest — anytime, anywhere.",
      }
      : {
          title: "أرسل أجمل الهدايا في لحظة",
          paragraph1:
            "مع GiveAGift، أصبح إرسال الهدايا أسهل من أي وقت مضى. اختر الهدية، أضف لمستك، ودعنا نهتم بالباقي أينما كنت، وفي أي وقت.",
        };

  return (
    <section
      id="hero"
      className="relative bg
        flex justify-center items-center w-full h-screen overflow-y-hidden lg:px-12 px-6 lg:pt-12 pt-6 pb-0"
    >
      {/* Container */}
      <div className="relative h-full max-w-7xl mx-auto z-40 flex gap-8 sm:gap-0 flex-col justify-center items-center text-center">
        
        {/* Title */}
        <Title
        text={t.title}
        mt="mt-24"
        textColor="text-white"
        svgColor="#fff"
        />

        {/* Paragraph */}
        <p className={`${styles.paragraph} text-center max-w-[480px] text-gray-200`}>
          {t.paragraph1}
        </p>

        {/* Shapes */}
        <div className="shapes_container hidden lg:block">
          {/* Left */}
          <div className="absolute top-[25%] right-0">
            <Image src={group} className="w-[100px] h-[100px]" alt="group" />
          </div>
          <div className="absolute top-[45%] right-10">
            <Image src={arrow} className="w-[100px] h-[100px]" alt="arrow" />
          </div>

          {/* Right */}
          <div className="absolute top-[15%] -left-36">
            <Image src={group2} className="w-[200px] h-[200px]" alt="group2" />
          </div>
          <div className="absolute top-[45%] -left-5">
            <Image
              src={arrow2}
              className="w-[100px] h-[100px] rotate-[360deg]"
              alt="arrow2"
            />
          </div>
        </div>

        {/* Mockups */}
        <div dir="rtl" className="absolute bottom-0 flex translate-y-4 justify-center items-center mt-4 mb-0 relative">
          {/* Left Mockup */}
          <Image
            src={mockup2}
            alt="App Screen 2"
            className={`object-cover -z-10 translate-y-28 -translate-x-8
              w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] xl:max-w-[300px] 
              -ml-[10%]`}
          />

          {/* Center Mockup responsive */}
          <picture>
            <source srcSet={mockup11.src} media="(min-width: 640px)" />
            <Image
              src={mockup1}
              alt="App Screen 1"
              className="w-full  object-cover translate-y-20 sm:translate-y-16 xl:translate-y-4 
                z-30 max-w-[180px] sm:max-w-[280px] lg:max-w-[300px] xl:max-w-[350px]"
            />
          </picture>

          {/* Right Mockup */}
          <Image
            src={mockup3}
            alt="App Screen 3"
            className={`object-cover -z-10 translate-y-28  translate-x-8 
              w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[240px] xl:max-w-[300px] 
              -mr-[10%]`}
          />
        </div>
      </div>
    </section>
  );
}
