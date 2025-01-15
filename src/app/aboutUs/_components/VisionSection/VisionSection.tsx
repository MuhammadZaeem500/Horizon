import React from "react";
import Image from "next/image";
import Video from "../../../_assets/VIDEO.svg";
import Recurso from "../../../_assets/Recurso6.svg";
import Recurso1 from "../../../_assets/Recurso7.svg";

const VisionSection = () => {
  return (
    <div
      className="bg-[#5774A11F]  mt-[70px] md:mt-[90px] lg:mt-[100px] px-6 md:px-12 lg:px-24 "
    >
      <div className="flex flex-col md:flex-row lg:flex-row mt-[16px] gap-8 lg:gap-16 ">
        {/* Left Video/Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className=" overflow-hidden mt-[50px] md:mt-[80px] mb-[10px] md:mb-[70px]">
            <Image
              src={Video} // Replace with the actual image path
              alt="Experience"
              className="max-w-[209px] md:max-w-[309px] lg:max-w-[309px] max-h-[349px] md:max-h-[449px] lg:max-h-[499px]"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 space-y-12 flex flex-col items-center lg:items-start justify-center ">
          {/* Mission Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl w-[15px] flex items-center space-x-2">
              <span className="text-[#B69F71] flex items-center space-x-2">
                ◆
              </span>
              <Image
                src={Recurso} // Replace with the actual image path
                alt="Experience"
                className="max-w-[80px] md:max-w-[100px] lg:max-w-[150px] max-h-[20px] md:max-h-[30px] lg:max-h-[35px]"
              />
            </h3>
            <p className="text-[#0E2A3F] font-medium text-xs md:text-sm leading-5.5 mt-[20px] md:mt-[37px] max-w-[400px] mb-[10px]  md:mb-[20px]">
              To help our clients access a future without limits through
              personalized citizenship and residency by investment programs in
              Peru.
            </p>
          </div>

          {/* Styled hr */}
          <hr className="w-full border-t-4 border-[#5774A1]" />

          {/* Vision Section */}
          <div className="text-center lg:text-left ">
            <h3 className="text-2xl w-[15px] flex items-center space-x-2 mt-[10px] md:mt-[20px]">
              <p className="text-[#B69F71] flex items-center space-x-2">
                ◆
              </p>
              <Image
                src={Recurso1} // Replace with the actual image path
                alt="Experience"
                className="max-w-[80px] md:max-w-[100px] lg:max-w-[150px] max-h-[20px] md:max-h-[30px] lg:max-h-[35px]"
              />
            </h3>
            <p className="text-[#0E2A3F] font-medium text-sm leading-5.5  max-w-[400px] mt-[20px] md:mt-[37px] mb-[20px]  md:mb-[0px]">
              To become the global reference for citizens seeking new mobility
              and investment opportunities, establishing connections between
              opportunities in Peru and the rest of the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
