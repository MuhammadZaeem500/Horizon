import React from "react";
import Navbar from "@/app/_components/Navbar/Navbar";
import MyImage from "@/app/_assets/HomeHorizon.svg";
import TitleSection from "../../../_components/BannerSection/BannerSection"

const HeroSection = () => {
   return (
      <div>
         <Navbar />
         <TitleSection
            backgroundImage={MyImage}
            title={"Programs"}
            
         />
        
      </div>
   );
};

export default HeroSection;