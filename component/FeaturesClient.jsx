import Image from "next/image";
import mockup4 from "../public/images/mockup4.png";
import greyGroup from "../public/images/greyGroup.png";

import styles, { layout } from "@/styles/style";
import Title from "./Title";
import { useLanguage } from "./LanguageProvider";

// Composants SVG pour les icônes
const SearchIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.5C2 8.729 2 6.843 3.172 5.672C4.344 4.501 6.229 4.5 10 4.5H14C17.771 4.5 19.657 4.5 20.828 5.672C21.999 6.844 22 8.729 22 12.5V14.5C22 18.271 22 20.157 20.828 21.328C19.656 22.499 17.771 22.5 14 22.5H10C6.229 22.5 4.343 22.5 3.172 21.328C2.001 20.156 2 18.271 2 14.5V12.5Z" stroke="#A3262A" strokeWidth="1.5"/>
<path opacity="0.5" d="M7 4.5V3M17 4.5V3M2.5 9.5H21.5" stroke="#A3262A" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M18 17.5C18 17.7652 17.8946 18.0196 17.7071 18.2071C17.5196 18.3946 17.2652 18.5 17 18.5C16.7348 18.5 16.4804 18.3946 16.2929 18.2071C16.1054 18.0196 16 17.7652 16 17.5C16 17.2348 16.1054 16.9804 16.2929 16.7929C16.4804 16.6054 16.7348 16.5 17 16.5C17.2652 16.5 17.5196 16.6054 17.7071 16.7929C17.8946 16.9804 18 17.2348 18 17.5ZM18 13.5C18 13.7652 17.8946 14.0196 17.7071 14.2071C17.5196 14.3946 17.2652 14.5 17 14.5C16.7348 14.5 16.4804 14.3946 16.2929 14.2071C16.1054 14.0196 16 13.7652 16 13.5C16 13.2348 16.1054 12.9804 16.2929 12.7929C16.4804 12.6054 16.7348 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5ZM13 17.5C13 17.7652 12.8946 18.0196 12.7071 18.2071C12.5196 18.3946 12.2652 18.5 12 18.5C11.7348 18.5 11.4804 18.3946 11.2929 18.2071C11.1054 18.0196 11 17.7652 11 17.5C11 17.2348 11.1054 16.9804 11.2929 16.7929C11.4804 16.6054 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.6054 12.7071 16.7929C12.8946 16.9804 13 17.2348 13 17.5ZM13 13.5C13 13.7652 12.8946 14.0196 12.7071 14.2071C12.5196 14.3946 12.2652 14.5 12 14.5C11.7348 14.5 11.4804 14.3946 11.2929 14.2071C11.1054 14.0196 11 13.7652 11 13.5C11 13.2348 11.1054 12.9804 11.2929 12.7929C11.4804 12.6054 11.7348 12.5 12 12.5C12.2652 12.5 12.5196 12.6054 12.7071 12.7929C12.8946 12.9804 13 13.2348 13 13.5ZM8 17.5C8 17.7652 7.89464 18.0196 7.70711 18.2071C7.51957 18.3946 7.26522 18.5 7 18.5C6.73478 18.5 6.48043 18.3946 6.29289 18.2071C6.10536 18.0196 6 17.7652 6 17.5C6 17.2348 6.10536 16.9804 6.29289 16.7929C6.48043 16.6054 6.73478 16.5 7 16.5C7.26522 16.5 7.51957 16.6054 7.70711 16.7929C7.89464 16.9804 8 17.2348 8 17.5ZM8 13.5C8 13.7652 7.89464 14.0196 7.70711 14.2071C7.51957 14.3946 7.26522 14.5 7 14.5C6.73478 14.5 6.48043 14.3946 6.29289 14.2071C6.10536 14.0196 6 13.7652 6 13.5C6 13.2348 6.10536 12.9804 6.29289 12.7929C6.48043 12.6054 6.73478 12.5 7 12.5C7.26522 12.5 7.51957 12.6054 7.70711 12.7929C7.89464 12.9804 8 13.2348 8 13.5Z" fill="#A3262A"/>
</svg>

);

const ReserveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12.0001H2M12 2.00012V22.0001M13 12.0001C13 13.061 13.4214 14.0784 14.1716 14.8285C14.9217 15.5787 15.9391 16.0001 17 16.0001M11 12.0001C11 13.061 10.5786 14.0784 9.82843 14.8285C9.07828 15.5787 8.06087 16.0001 7 16.0001" stroke="#A3262A" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.9988 10.0356C11.9994 9.31154 12.2417 8.6084 12.6873 8.03775C13.133 7.46709 13.7564 7.0616 14.4588 6.88559C16.0618 6.48559 17.5148 7.93759 17.1138 9.54159C16.9378 10.2439 16.5323 10.8674 15.9616 11.313C15.391 11.7587 14.6878 12.001 13.9638 12.0016H11.9988M11.9988 10.0356V12.0016M11.9988 10.0356C11.9982 9.31154 11.7559 8.6084 11.3102 8.03775C10.8646 7.46709 10.2411 7.0616 9.53879 6.88559C7.93579 6.48559 6.48279 7.93759 6.88379 9.54159C7.05979 10.2439 7.46529 10.8674 8.03594 11.313C8.6066 11.7587 9.30973 12.001 10.0338 12.0016H11.9988" stroke="#A3262A" strokeWidth="1.5"/>
<path d="M2 12.0001C2 7.28612 2 4.92912 3.464 3.46412C4.93 2.00012 7.286 2.00012 12 2.00012C16.714 2.00012 19.071 2.00012 20.535 3.46412C22 4.93012 22 7.28612 22 12.0001C22 16.7141 22 19.0711 20.535 20.5351C19.072 22.0001 16.714 22.0001 12 22.0001C7.286 22.0001 4.929 22.0001 3.464 20.5351C2 19.0721 2 16.7141 2 12.0001Z" stroke="#A3262A" strokeWidth="1.5"/>
</svg>

);

const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.875 4.50012H4.125C3.08947 4.50012 2.25 5.33959 2.25 6.37512V17.6251C2.25 18.6607 3.08947 19.5001 4.125 19.5001H19.875C20.9105 19.5001 21.75 18.6607 21.75 17.6251V6.37512C21.75 5.33959 20.9105 4.50012 19.875 4.50012Z" stroke="#A3262A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25 7.50012L12 12.7501L18.75 7.50012" stroke="#A3262A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_68_507)">
<path d="M12 0.000244141C18.6276 0.000244141 24 5.37264 24 12.0002C24 18.6278 18.6276 24.0002 12 24.0002C5.3724 24.0002 0 18.6278 0 12.0002C0 5.37264 5.3724 0.000244141 12 0.000244141ZM12 1.67424C9.26137 1.67424 6.63492 2.76216 4.69842 4.69866C2.76191 6.63516 1.674 9.26162 1.674 12.0002C1.674 14.7389 2.76191 17.3653 4.69842 19.3018C6.63492 21.2383 9.26137 22.3262 12 22.3262C14.7386 22.3262 17.3651 21.2383 19.3016 19.3018C21.2381 17.3653 22.326 14.7389 22.326 12.0002C22.326 9.26162 21.2381 6.63516 19.3016 4.69866C17.3651 2.76216 14.7386 1.67424 12 1.67424ZM10.884 6.69744C11.346 6.69744 11.7204 7.07304 11.7204 7.53504V13.3958H17.5812C17.7977 13.404 18.0026 13.4958 18.1529 13.6519C18.3032 13.808 18.3871 14.0162 18.3871 14.2328C18.3871 14.4495 18.3032 14.6577 18.1529 14.8138C18.0026 14.9699 17.7977 15.0616 17.5812 15.0698H10.884C10.662 15.0692 10.4494 14.9808 10.2924 14.8238C10.1355 14.6669 10.047 14.4542 10.0464 14.2322V7.53624C10.0464 7.07304 10.4208 6.69744 10.884 6.69744Z" fill="#A3262A"/>
</g>
<defs>
<clipPath id="clip0_68_507">
<rect width="24" height="24" fill="white" transform="translate(0 0.000244141)"/>
</clipPath>
</defs>
</svg>

);

function FeatureCard({ icon, title, text}) {
    const { lang } = useLanguage();
  
  return (
    <div
      className="group relative 
      flex flex-row items-center 
      max-w-full xl:w-[646px] h-[129px] 
      px-4 sm:px-6 md:px-2 
      gap-3 sm:gap-5 md:gap-6 
      bg-[#F6F6F6] border border-[#EEEEEE] rounded-[14px] 
      transition-all duration-700 ease-in-out 
      cursor-pointer hover:bg-white justify-between"
    >
      {/* Icône */}
      <div
        className="relative
        w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] shrink-0 
        flex justify-center items-center 
        rounded-full bg-white border border-[#EEEEEE] 
        transition-colors duration-700 ease-in-out
        group-hover:bg-[#F5F5F5]"
      >
        {icon}
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-4 flex-1 transition-colors duration-700 ease-in-out">
        <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#000]">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#686868] leading-snug">
          {text}
        </p>
      </div>
      {/* Groupe décoratif */}
       <div
       className={`absolute bottom-0 pointer-events-none opacity-0 group-hover:opacity-100
       transition-opacity duration-700 ease-in-out flex justify-end items-end
       ${lang === "en" ? "right-0" : "left-0"}`}
       >
       <Image 
       src={greyGroup}
       className="w-[90px] h-[90px] opacity-70"
       alt="decoration"
  />
</div>

        
    </div>
  );
}

export default function FeaturesClient({ lang = "ar" }) {

  const t =
    lang === "en"
      ? {
          heading: " Why Choose GiveAGift ?",
          searchTitle: "Search easily",
          searchText: "View the list of barbers by location, rating, or type of service.",
          reserveTitle: "Book within seconds",
          reserveText: "Choose a date that suits you and pay online securely.",
          truckTitle: "Mobile service",
          truckText: " Ask for a barber to be delivered to your door or location.",
          starTitle: "Trusted Reviews",
          starText: "Read user experiences to choose with confidence.",
        }
      : {
          heading: "لماذا تختار GiveAGift ؟",
          searchTitle: "مناسب لكل المناسبات",
          searchText: "عيد، نجاح، شكر، تهنئة؟ لدينا بطاقة تناسب كل لحظة.",
          reserveTitle: "تجربة إهداء عصرية بالكامل",
          reserveText: "ودّع الطرق التقليدية، واهْدِ بطريقة ذكية وسريعة.",
          truckTitle: "إرسال فوري 100%",
          truckText: "أرسل البطاقة فورًا إلى بريد أو هاتف المستلم.",
          starTitle: "متوفر على مدار الساعة",
          starText: "التطبيق يعمل 24/7 — أرسل هديتك حتى في آخر لحظة!",
        };

  return (
    <section
      id="featuresClient"
      className={`relative overflow-hidden w-full min-h-[100vh] ${styles.padding} bg-[#fff]`}
    >
      <div
        className={`flex flex-col  lg:mt-0 mt-6
        max-w-7xl mx-auto z-40 
        flex justify-center items-center gap-16 lg:gap-8 relative`}
      >
       
        {/* Title */}
        <Title
        text={t.heading}
        mt="mt-0"
        textColor="text-[#1E2330]"
        svgColor="#A3262A"
        />
       
      
      <div className={`${layout.sectionRow} relative gap-16`}>
       {/* Mockup */}
       <div className={`flex-1 flex ${styles.flexCenter}  relative`}>
          <div
            className="relative mx-auto 
            flex justify-center 
            w-[300px] xs:w-[350px] sm:w-[400px] lg:w-[450px] 
            h-[350px] xs:h-[400px] sm:h-[450px] lg:h-[500px] 
            "
          >
            <Image
              src={mockup4}
              alt="App Screen 3"
              className="absolute -bottom-16 lg:-bottom-76 object-contain 
              w-[250px] xs:w-[300px] sm:w-[350px] lg:w-[488px] 
              h-[450px] xs:h-[500px] sm:h-[550px] lg:h-[1012px]"
              priority
            />
          </div>
      </div>
        {/* Texte */}
        <div className={`${layout.sectionInfo} flex-col gap-5`}>
          <div className="flex flex-col gap-4 mt-8">
            <FeatureCard icon={<SearchIcon />} title={t.searchTitle} text={t.searchText} />
            <FeatureCard icon={<ReserveIcon />} title={t.reserveTitle} text={t.reserveText} />
            <FeatureCard icon={<TruckIcon />} title={t.truckTitle} text={t.truckText} />
            <FeatureCard icon={<StarIcon />} title={t.starTitle} text={t.starText} />
          </div>
        </div>
      </div>

       
      </div>
    </section>
  );
}
