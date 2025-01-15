import React from "react";
import Image from "next/image";
import PexelsImage from "../../../_assets/pexels-johanna-m-jaramillo-536425062-20865533 4.svg";
import Group from "../../../_assets/Group.svg";
import Capa4 from "../../../_assets/Capa4.svg";
import Recurso3 from "@/app/_assets/Recurso3.svg";

const OurServices = () => {
  return (
    <div className="bg-[#F3F5F8] mt-[140px] md:mt-[150px] lg:mt-[180px] py-12 md:py-16 lg:py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center md:items-start overflow-x-hidden">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4 justify-center md:justify-start  ">
          <Image src={Capa4} alt="Experience" className="w-8 h-8" />
          <h4 className="text-[#B69F71] font-montserrat font-semibold text-base md:text-xl ">
            OUR SERVICES
          </h4>
        </div>

        {/* Main Title */}
        <div className="flex justify-center md:justify-start ">
          <Image
            src={Recurso3}
            alt="Experience"
            className="w-full h-full object-cover max-w-[200px] md:max-w-full mb-6 mt-4"
          />
        </div>

        {/* Description */}

        <p className="text-[#0E2A3F]  leading-relaxed font-montserrat text-xs font-medium tracking-wide ">
          At Horizon, we offer more than a program; we provide a comprehensive
          solution that transforms your freedom of mobility and global
          opportunities. Our approach is designed specifically for
          forward-thinking individuals who seek security, stability, and unique
          advantages for themselves and their families.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
