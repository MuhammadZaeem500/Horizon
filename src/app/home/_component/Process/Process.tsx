import React from "react";
import Image from 'next/image';

import Button from "@/app/_components/Button/Button"; // Import the Button component
import Video from '../../../_assets/VIDEO.png';

const Process = () => {
   return (
      <div className="mt-[69px] lg:mt-[169px] md:mt-[100px]">
         <div className=" max-w-[1100px] mx-auto mb-[19px]">
            <div className="flex flex-col  md:flex-row justify-between">
               <div className="flex-1 pl-[20px] lg:pl-[40px] md:pl-[40px] sm:pl-[20px]">
                  {/* Left Side Content */}
                  <div className="flex">
                     <div className="w-[15px] h-[15px] rotate-[-45deg] bg-[#0E2A3F] mr-[21px]"></div>
                     <div className="text-left font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#0E2A3F] mt-[-4px]">
                        PROCESS
                     </div>
                  </div>
                  <div className="text-left pr-[10px]  md:pr-[0px] font-montserrat text-[18px] md:text-[25px] font-semibold leading-[35px] text-[#1E3040] tracking-[0.02em] mt-[12px] max-w-[460px]">
                     Unlock a future without limits with seamless and accessible citizenship services for everyone.
                  </div>
                  <div className="mt-[20px]">
                     <Button 
                        text="Know more" 
                        backgroundColor="#0E2A3F" 
                        className="text-white text-[12px] font-medium leading-[14.63px] tracking-[0.02em] text-center"
                     />
                  </div>
               </div>
               
               {/* Right Side Image */}
               <div className="flex-1 flex justify-end mt-4  md:mt-0  lg:justify-start">
                  <div className="flex justify-center w-full">
                     <Image src={Video} alt="Investment" 
                        className="max-w-[309px] max-h-[549px]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Process;
