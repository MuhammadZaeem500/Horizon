import React from 'react'
import Image from 'next/image';
import Capa6 from "../../../_assets/Capa6.svg";


const CitizenshipByInvestment = () => {
  return (
    <div className="bg-[#DFE5ED] py-8 md:py-16 lg:py-16 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Text Content */}
      <div className="md:w-1/2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4 justify-center md:justify-center lg:justify-start">
          <h4 className="text-[#5774A1] font-montserrat  text-[32px] md:text-[45px] font-medium leading-[54.86px] tracking-[0.02em] text-left">
            1
            <hr className="border-t-2 border-[#5774A1] w-6 md:w-8 mb-2 md:mb-4" />
          </h4>
        </div>

        {/* Main Title */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={Capa6}
            alt="Experience"
            className="w-full h-full object-cover max-w-[200px] md:max-w-full mb-4 md:mb-6 mt-4"
          />
        </div>

        {/* Description */}
        <p className="text-[#0E2A3F] leading-relaxed font-montserrat  text-sm md:text-base font-medium tracking-wide text-center md:text-left">
          The Investor Program in Peru is specifically designed to attract foreign nationals, providing a pathway to obtain Peruvian citizenship and a passport within approximately two years through a selection of approved investment options.
        </p>
      </div>
    </div>
  )
}

export default CitizenshipByInvestment;
