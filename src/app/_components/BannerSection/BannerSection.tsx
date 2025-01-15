import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TitleSectionProps {
   backgroundImage: StaticImageData;
   title: string;
   dynamicOpacity?: number;
}


const TitleSection: React.FC<TitleSectionProps> = ({ backgroundImage, title, dynamicOpacity = 50 }) => {
   return (
      <div className="w-full relative">
         <div className="w-full h-[10px] bg-[#B69F71]"></div>

         {/* Background Image Section (behind content) */}
         <div className="absolute top-0 left-0 right-0 z-[-10]">
            <Image
               src={backgroundImage}
               alt="Background Image"
               className="mx-auto w-full h-[350px] md:h-[500px] object-cover"
               style={{ opacity: dynamicOpacity / 100 }}
            />
         </div>

         {/* Centered Section with Line and Title Box (Above the Background Image) */}
         <div className="mt-[91px] md:mt-[161px] flex justify-center items-center">
            <div className="w-[200px] md:w-[500px] h-[110px] md:h-[150px] bg-[#0E2A3F] flex flex-col  items-center">
               {/* Small Line inside the Box */}
               <div className="w-[35px] h-[1px] mt-[28px] bg-white mb-[8px]"></div>

               {/* Title Image */}
               <div className='mt-[12px] md:mt-[20px] text-[20px] md:text-[45px]  leading-[45px] font-poppins text-white '>
                  {title}

               </div>
            </div>
         </div>
      </div>
   );
};

export default TitleSection;
