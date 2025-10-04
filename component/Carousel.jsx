"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "@/styles/style";
import Title from "./Title";


import greyGroup from "../public/images/greyGroup.png";
import carousel1 from "../public/images/carousel1.png";
import carousel2 from "../public/images/carousel2.png";
import carousel3 from "../public/images/carousel3.png";
import carousel4 from "../public/images/carousel4.png";

import { useLanguage } from "./LanguageProvider";
import CarouselNavigation from "./CarouselNavigation";

export default function Carousel() {
  const { lang } = useLanguage();
  const t = lang === "en"
    ? { title: "Get to know GiveAGift" }
    : { title: "تعرف على GiveAGift" };

  const images = [carousel1, carousel2, carousel3 , carousel4 , carousel1 , carousel2];

  return (
    <section
      id="about"
      className={`w-full relative min-h-[100vh]
      flex flex-col gap-8 justify-center items-center
      bg-gradient-to-b from-[#1E2330] to-[#161A27]
      ${styles.padding}`}
    >
      <div className="absolute bottom-0 right-8 w-[200px] h-[200px]">
      <svg width="full" height="full" viewBox="0 0 286 239" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.649 153.562L38.3403 179.425L59.0309 269.272C61.3173 279.2 67.4543 287.814 76.0917 293.218C84.7291 298.622 95.1594 300.373 105.088 298.087L179.96 280.845M150.649 153.562L179.96 280.845M150.649 153.562L135.131 86.1765M150.649 153.562L34.5967 180.287C28.6395 181.659 22.3813 180.608 17.1989 177.366C12.0164 174.123 8.33427 168.955 6.9624 162.998L1.78976 140.536C0.417894 134.579 1.46871 128.321 4.71103 123.138C7.95336 117.956 13.1216 114.274 19.0788 112.902L135.131 86.1765M150.649 153.562L262.957 127.698L283.648 217.545C285.934 227.474 284.183 237.904 278.779 246.542C273.375 255.179 264.761 261.316 254.833 263.602L179.96 280.845M150.649 153.562L266.701 126.836C272.658 125.464 277.826 121.782 281.069 116.6C284.311 111.417 285.362 105.159 283.99 99.202L278.817 76.7403C277.445 70.7831 273.763 65.6148 268.581 62.3725C263.398 59.1302 257.14 58.0794 251.183 59.4512L135.131 86.1765M135.131 86.1765L126.51 48.7404M135.131 86.1765L97.6947 94.7976C87.766 97.084 77.3357 95.3327 68.6983 89.9288C60.0609 84.5249 53.924 75.9112 51.6375 65.9825C49.3511 56.0538 51.1024 45.6235 56.5063 36.9861C61.9102 28.3487 70.5239 22.2117 80.4526 19.9253C85.3688 18.7931 90.4598 18.6404 95.435 19.4758C100.41 20.3112 105.172 22.1183 109.449 24.7941C113.726 27.4698 117.434 30.9617 120.361 35.0704C123.288 39.1791 125.378 43.8242 126.51 48.7404M135.131 86.1765L172.567 77.5555C182.496 75.269 191.109 69.1321 196.513 60.4947C201.917 51.8573 203.669 41.4269 201.382 31.4983C199.096 21.5696 192.959 12.9558 184.321 7.55194C175.684 2.14806 165.254 0.396711 155.325 2.68316C145.396 4.96961 136.782 11.1066 131.379 19.744C125.975 28.3814 124.223 38.8117 126.51 48.7404" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      </div>
      <Title text={t.title} mt="mt-0" textColor="text-white" svgColor="#fff" />

      <div dir="rtl" className={`lg:mb-16 mb-6 relative w-full max-w-7xl mx-auto`}>
      <Swiper
      effect="coverflow"
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      breakpoints={{
      480: {
      slidesPerView: 2,
      },
      1060: {
      slidesPerView: 3,
      },
      }}
      coverflowEffect={{
      rotate: 0,
      stretch: 60,
      depth: 200,
      modifier: 1,
      slideShadows: false,
      }}
      navigation={{
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
      }}
      modules={[EffectCoverflow, Navigation]}
      className="w-full">

          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="mb-16 w-[200px]  sm:w-[300px] md:w-[340px] flex justify-center"
            >
              <div className="relative w-full h-[350px] md:h-[500px]">
                <Image
                  src={img}
                  alt={`carousel-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

        {/* Boutons de navigation custom en bas */}
        <CarouselNavigation />
      </div>
    </section>
  );
}
