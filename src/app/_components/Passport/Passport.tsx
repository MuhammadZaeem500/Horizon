import React from "react";
import Image from 'next/image';

import PassportImage from '../../_assets/Passport.svg';
import Button from "@/app/_components/Button/Button";

const Passport = () => {
   return (
      <div className="w-[100%] h-[420px] md:h-[500px] bg-[#DFE5ED] pt-[50px] md:pt-[81px] pl-[12px] md:pl-[100px] lg:pl-[150px] pr-[12px] md:pr-[100px] lg:pr-[150px] mt-[50px] md:mt-[100px]">
         <div
            className="text-left w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71]"
         ></div>
         <div className="mt-[34px]">
            <Image
               src={PassportImage}
               alt="Passport"
               // width={400}
               // height={500}
               className="w-[260px] md:w-[400px]"
            />
         </div>
         <div className="md:w-[95%] h-[1px] mt-[22px] md:mt-[32px] bg-[#0E2A3F] transform scale-x-[1.] "></div>
         <div className=" mt-[20px] md:mt-[35px] text-left font-montserrat text-[14px] md:text-[16px] font-medium leading-[28px] max-w-[529px] text-[#0E2A3F] ">
            Analyze the scope of your passport with our interactive index. Find out which destinations you can visit without restrictions and how it compares to other global passports.
         </div>
         <div className="flex justify-end mt-[22px] md:mt-[7px]">
            <Button
               text="Know more"
               backgroundColor="#0E2A3F"
               className="text-white w-[125px] h-[35px] text-[14px] font-semobold leading-[17.63px] tracking-[0.02em] text-center"
            />
         </div>
      </div>
   );
};

export default Passport;
