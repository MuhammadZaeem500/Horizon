import React from "react";
import Image from "next/image";
import PexelsImage from "../../../_assets/pexels.svg";
import Group from "../../../_assets/Group.svg";
import Capa4 from "../../../_assets/Capa4.svg";

const AboutUsSection = () => {
  return (
    <div className="bg-[#FFFFFF] mt-[190px] md:mt-[240px] lg:mt-[280px] px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4 justify-center md:justify-start ">
          <Image src={Capa4} alt="Experience" className="w-8 h-8" />
          
          <h1 className="text-[#B69F71] font-montserrat font-semibold text-lg md:text-xl leading-[24px]">
            ABOUT US
          </h1>
        </div>

        {/* Main Title */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={Group}
            alt="Experience"
            className="w-full h-full object-cover max-w-[200px] md:max-w-full"
          />
        </div>

        {/* Description */}
        <p className="text-[#0E2A3F]  leading-[22px] font-montserrat text-sm font-medium tracking-wide">
          At Horizon, we offer more than a program; we provide a comprehensive
          solution that transforms your freedom of mobility and global
          opportunities. Our approach is designed specifically for
          forward-thinking individuals who seek security, stability, and unique
          advantages for themselves and their families.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-12 md:mt-1 md:pl-16 flex justify-center">
        <div className="relative w-full h-64 md:h-80 overflow-hidden shadow-lg">
          <Image
            src={PexelsImage}
            alt="City at Night"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
