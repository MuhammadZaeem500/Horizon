import React from "react";
import Image from 'next/image';

import Button from "@/app/_components/Button/Button";
import Capa from '../../../_assets/Capa 3.png'

const AboutUs = () => {
   return (
      <div className="mt-[50px] lg:mt-[127px] md:mt-[80px] ">
         <div className="text-center font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#B69F71]">
            ABOUT US
         </div>
         <div className="flex justify-center w-full mt-[17px]">
            <Image src={Capa} alt="Investment"
               className="max-w-[30px] max-h-[30px]"
            />
         </div>
         <div className="flex mt-[15px] justify-center items-center p-[10px] md:p-[12px] text-center font-montserrat text-[18px] md:text-[25px] font-semibold leading-[35px] max-w-[492px] text-[#1C3661] mx-auto">
            Empowering individuals to achieve citizenship and residency with confidence and integrity.
         </div>
         <div className="flex mt-[0px] md:mt-[52px] p-[10px] md:p-[12px] justify-center items-center text-center font-montserrat.--font-monserrat text-[13px] md:text-[14px] font-medium leading-[22px] max-w-[532px] text-[#0E2A3F] mx-auto">
            At Horizon, we offer more than a program; we provide a comprehensive solution that transforms your freedom of mobility and global opportunities. Our approach is designed specifically for forward-thinking individuals who seek security, stability and unique advantages for themselves and their families.
         </div>
         <div className="flex justify-center mt-[20px] md:mt-[40px]">
            <Button
               text="Know more"
               backgroundColor="#0E2A3F"
               className="text-white w-[100px] h-[25px] text-[12px] font-medium leading-[14.63px] tracking-[0.02em] text-center"
            />
         </div>
      </div>
   );
};

export default AboutUs;