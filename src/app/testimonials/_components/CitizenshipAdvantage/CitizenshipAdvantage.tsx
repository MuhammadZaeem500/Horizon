import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

import play from '../../../_assets/play.svg';

interface CitizenshipAdvantageProps {
   data: Array<{
      image: string;
      text: string;
   }>;
}

export const CitizenshipAdvantage: React.FC<CitizenshipAdvantageProps> = ({ data }) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] lg:gap-[7%] justify-center mx-auto max-w-[1140px]
      pl-[14px] md:pl-[30px]  pr-[14px] md:pr-[30px]">
         {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center mb-[50px] lg:mb-[20px]  w-full mx-auto max-w-[500px]">
               {/* Title and Icon - Centered above the image */}
               <div className="flex flex-col justify-center items-center mb-4">
                  <FaQuoteLeft className="text-[40px] text-[#c2cbd5]" />
                  <h1 className="font-montserrat text-[20px] font-bold leading-[24px] text-[#1E3040] mt-2">
                     {item.text}
                  </h1>
               </div>

               {/* Image Container */}
               <div className="relative w-full max-w-[500px] h-[300px]">
                  {/* Image */}
                  <Image
                     src={item.image}
                     alt="Image"
                     layout="fill" 
                     objectFit='cover'
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#5774A159] z-10" />

                  {/* Play Button - Centered over the image */}
                  <div className="absolute inset-0 flex justify-center items-center z-30">
                     <div className="flex justify-center items-center w-[66.88px] h-[67px] bg-[#4C627580] rounded-full">
                        <Image
                           src={play}
                           alt="Play Button"
                           className="w-[20px] h-[26px]"
                        />
                     </div>
                  </div>

               </div>
            </div>
         ))}
      </div>
   );
};

export default CitizenshipAdvantage;
