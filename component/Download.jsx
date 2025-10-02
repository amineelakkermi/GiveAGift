"use client";
// components/Download.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import appStore from "../public/images/appStore.svg";
import playStore2 from "../public/images/playStore2.png";
import styles from "@/styles/style";
import Title from "./Title";


export default function Download({ lang = "ar" }) {
  
 

  const t =
    lang === "en"
      ? {
          title: " Download the app now and start your experience",
          p1: "Join thousands of users who have chosen comfort and professionalism.",
          p2: "Whether you're a customer looking for premium service, or a barber looking to expand your business — our app is built for you.",
        }
      : {
          title: "حمّل تطبيق  GiveAGift الآن",
          p1: "استمتع بتجربة إهداء سريعة، آمنة، وممتعة — كل ذلك من هاتفك.",
          p2: "استمتع بتجربة إهداء سريعة، آمنة، وممتعة — كل ذلك من هاتفك. اختر البطاقة، أضف لمستك، وأرسلها فورًا!",
        };

  return (
    <section
      id="download"
      className={`lg:px-12 px-6 lg:pb-12 pb-6 bg-white flex justify-center items-center`}
    >
      {/* Container */}
      <div className={`${styles.marginY} relative  w-full max-w-[1250px] flex flex-col gap-5
      justify-center items-center text-center rounded-[40px]
      bg px-6 py-6 md:px-12 lg:py-8
      overflow-hidden`}>
        
      <div className="absolute hidden lg:block bottom-0 right-5 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[247px] h-auto opacity-100">
      <svg
      viewBox="0 0 247 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      >
      <path
      d="M130.271 131.817L33.5609 154.088L51.3777 231.456C53.3466 240.006 58.6312 247.423 66.069 252.076C73.5067 256.73 82.4884 258.238 91.0381 256.269L155.511 241.422M130.271 131.817L155.511 241.422M130.271 131.817L116.908 73.7909M130.271 131.817L30.3372 154.83C25.2074 156.012 19.8184 155.107 15.3557 152.315C10.8931 149.523 7.7223 145.072 6.54097 139.943L2.08676 120.601C0.905426 115.471 1.81029 110.082 4.60229 105.619C7.3943 101.156 11.8447 97.9856 16.9746 96.8043L116.908 73.7909M130.271 131.817L226.981 109.546L244.798 186.914C246.767 195.464 245.259 204.445 240.605 211.883C235.952 219.321 228.535 224.605 219.985 226.574L155.511 241.422M130.271 131.817L230.205 108.803C235.334 107.622 239.785 104.451 242.577 99.9887C245.369 95.5261 246.274 90.1371 245.092 85.0072L240.638 65.6652C239.457 60.5354 236.286 56.085 231.823 53.293C227.361 50.501 221.972 49.5961 216.842 50.7774L116.908 73.7909M116.908 73.7909L109.485 41.5542M116.908 73.7909L84.6716 81.2146C76.1219 83.1834 67.1402 81.6753 59.7025 77.022C52.2647 72.3687 46.9801 64.9513 45.0112 56.4016C43.0423 47.8519 44.5504 38.8702 49.2038 31.4324C53.8571 23.9947 61.2745 18.7101 69.8242 16.7412C74.0576 15.7663 78.4415 15.6348 82.7257 16.3541C87.01 17.0735 91.1105 18.6297 94.7933 20.9338C98.4761 23.2379 101.669 26.2448 104.19 29.7828C106.711 33.3209 108.51 37.3208 109.485 41.5542M116.908 73.7909L149.145 66.3672C157.695 64.3983 165.112 59.1137 169.765 51.6759C174.419 44.2382 175.927 35.2565 173.958 26.7068C171.989 18.1571 166.704 10.7397 159.267 6.08637C151.829 1.43303 142.847 -0.0750798 134.298 1.89381C125.748 3.86269 118.33 9.14729 113.677 16.5851C109.024 24.0228 107.516 33.0045 109.485 41.5542"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      />
      </svg>
      </div>

      <Title
      text={t.title}
      mt="mt-0"
      textColor="text-white"
      svgColor="#fff"
      />
        
      <p className={`${styles.paragraph} max-w-[650px] z-20 text-white`}>{t.p1}</p>
      <p className={`${styles.paragraph} max-w-[650px] z-20 text-white`}>{t.p2}</p>

        {/* Download Buttons */}
        <div className="flex gap-4 flex-wrap justify-center z-20">
          <a
            href="#"
            className="block duration-300 hover:scale-105 transition-transform"
          >
            <Image
              src={playStore2}
              alt="Google Play"
              className="h-12 w-auto md:h-[44px]"
            />
          </a>
          <a
            href="#"
            className="block duration-300 hover:scale-105 transition-transform"
          >
            <Image
              src={appStore}
              alt="App Store"
              className="h-12 w-auto md:h-[44px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

