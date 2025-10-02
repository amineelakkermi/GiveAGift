import Image from "next/image";
import { LanguageProvider } from "@/component/LanguageProvider";
import Navbar from "@/component/Navbar";
import HeroWrapper from "@/component/HeroWrapper";
import FeaturesClientWrapper from "@/component/FeaturesClientWrapper";
import Faq from "@/component/Faq";
import DownloadWrapper from "@/component/DownloadWrapper";
import Carousel from "@/component/Carousel";
import JoinUs from "@/component/JoinUs";

export default function Page() {
  return (
    <LanguageProvider>
      <main>
        
        <div className="relative">
         
          {/* Navbar + Hero */}
          <Navbar />
          <HeroWrapper />
        </div>

        <FeaturesClientWrapper />
        <Carousel />
        <JoinUs />
        <DownloadWrapper />
        <Faq />
      </main>
    </LanguageProvider>
  );
}
