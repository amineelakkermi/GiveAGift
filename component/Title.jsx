import styles from "@/styles/style";
import { useLanguage } from "./LanguageProvider";

export default function Title({
  
  text,
  textColor = "text-black",   
  svgColor = "#A3262A",     
  mt = "mt-24",  
}) {
  const { lang } = useLanguage();
  return (
    <div
      className={`${styles.title} ${mt} text-center relative flex justify-center items-center relative`}
    >
      {/* SVG */}
      <div className={`w-[40px] md:w-[73px] h-[40px] md:h-[73px] flex ${lang === "en" ? "rotate-230" : "rotate-0"}
      justify-center items-center`}>
        <svg
          width="full"
          height="full"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.0032 67.3019C33.5422 68.758 36.9141 69.7232 48.3597 71.4604C60.4766 73.2914 63.2161 73.2544 63.1403 71.4233C63.0052 68.9066 34.8095 64.9661 34.0032 67.3019Z"
            fill={svgColor}
          />
          <path
            d="M37.7479 13.3207C33.3033 12.255 32.5491 12.8799 27.3102 21.9415C21.8893 31.2952 21.232 33.1968 22.9008 34.3578C25.9352 36.4507 28.1646 34.4338 35.4466 23.1986C40.8144 14.9065 41.0284 14.1073 37.7479 13.3207Z"
            fill={svgColor}
          />
          <path
            d="M58.6556 34.4928C55.4699 33.6842 54.1536 34.0401 49.4779 36.9253C35.6405 45.5367 25.0733 50.5901 31.3058 52.0398C33.8456 52.6487 36.5831 51.3132 53.1038 41.7785C62.2114 36.4645 62.9105 35.6026 58.6556 34.4928Z"
            fill={svgColor}
          />
        </svg>
      </div>

      {/* Texte */}
      <h1
        className={`${textColor} text-[24px] sm:text-[28px] lg:text-[32px] font-bold`}
      >
        {text}
      </h1>
    </div>
  );
}
