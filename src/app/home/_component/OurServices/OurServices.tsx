import React from "react";
import Image from 'next/image';

import Investment from '../../../_assets/Investment.png';
import Citizenship from '../../../_assets/Citizenship.png';
const OurServices = () => {
   return (
      <div className="w-[100%]">
         <div className="pl-[20px]  lg:pl-[40px] md:pl-[40px] sm:pl-[20px]  max-w-[1100px] mx-auto flex items-center  mb-[19px] ">
            <div
               className="w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71] mr-[21px]"
            ></div>
            <div
               className="text-left font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#B69F71]"
            >
               ABOUT OUR SERVICES
            </div>
         </div>
         <div className="bg-[#5774A11F] w-[100%] h-auto p-[0px] ">
            <div
               className="pl-[20px] pr-[20px] lg:pl-[40px] md:pl-[40px] sm:pl-[20px] max-w-[1150px] mx-auto flex "
            >
               <div className="text-left text-[#0E2A3F] font-montserrat  text-[13px] md:text-[14px] font-medium leading-[22px] max-w-[410px] mt-[30px]">
                  At Horizon, we offer more than a program; we provide a comprehensive solution that transforms your freedom of mobility and global opportunities. Our approach is designed specifically for forward-thinking individuals who seek security, stability and unique advantages for themselves and their families.
               </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-[30px] md:mt-[90px] gap-[20px] ">
               {/* Citizenship Image */}
               <div className="sm:mr-4 mb-0 md:mb-[30px] ">
                  <Image src={Citizenship} alt="Citizenship"
                  className="cursor-pointer hover:brightness-75 transition-all duration-300  lg:mb[0px] w-[300px] h-[400px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[500px]" />
               </div>

               {/* Investment Image */}
               <div className="sm:ml-4  mb-10 md:mb-[30px]">
                  <Image src={Investment} alt="Investment" 
                  className="cursor-pointer hover:brightness-75 transition-all duration-300 w-[300px] h-[400px] md:w-[320px] md:h-[420px] lg:w-[400px] lg:h-[500px] " />
               </div>
            </div>

         </div>
      </div>
   );

}

export default OurServices;