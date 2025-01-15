import React from "react";
import Button from "@/app/_components/Button/Button";
import Image from "next/image";
import Recurso32 from "@/app/_assets/Recurso32.svg";

const PassportClassification = () => {
  return (
    <div className="bg-[#DFE5ED] py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-left"> {/* Align everything to left */}
        {/* Decorative Icon */}
        <div className="flex justify-start mb-4"> {/* Align the icon to left */}
          <span className="text-[#B69F71] flex items-center w-[15px] h-[15px] font-bold">
            ◆
          </span>
        </div>

        {/* Heading */}
        <div className="flex justify-start mb-6">
          <Image 
            src={Recurso32} 
            alt="Passport Classification" 
            width={500} // Adjust width as needed
            height={100} // Adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Divider */}
        <div className="border-t my-6 w-full mx-auto border-[#0E2A3F]"></div>

        {/* Description */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full mt-[20px]">
          {/* Paragraph */}
          <p className="text-gray-600 text-sm md:text-base lg:text-base leading-[28px] font-Montserrat font-medium tracking-[0.02em] text-left mb-8 w-full">
            Analyze the scope of your passport with our 
            <span className="font-semibold"> interactive index</span>.
            <span className="block mt-2">Find out which destinations you can visit without restrictions</span>
            <span className="block mt-2">and how it compares to other global passports.</span>
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-end w-full md:w-auto ml-auto">
            <Button 
              text="Know more" 
              backgroundColor="#0E2A3F" 
              className="text-white text-[12px] font-medium leading-[14.63px] tracking-[0.02em] text-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PassportClassification;
