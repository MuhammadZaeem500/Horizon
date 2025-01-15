import React from 'react';
import Image from 'next/image';

import Write from '../../../_assets/write.png'; 

interface SpotlightProps {
  spotlightData: {  
    imageSrc: string;
    title: string;
  }[];  // Array of spotlight items
}

export const Spotlight: React.FC<SpotlightProps> = ({ spotlightData }) => {
  return (
    <div>
      {/* Static part: "Spotlight" label and icon */}
      <div className="flex justify-center md:justify-start w-full">
        <div className="w-[30px] h-[12px]">
          <Image
            src={Write} 
            alt="Icon"
            width={20}
            height={12}
          />
        </div>
        <span className="ml-2 font-montserrat text-[#0E2A3F] text-[16px]">Spotlight</span>
      </div>
    <div className='flex flex-col justify-center md:justify-start ' >
      {/* Map through spotlightData and render dynamic items */}
      {spotlightData.map((item, index) => (
        <div className="mt-[30px] md:mt-[50px] text-center md:text-left" key={index}>
          <div className="flex justify-center md:justify-start">
          <Image
            src={item.imageSrc} 
            alt="Image"
            className="w-full md:w-[240px]  md:h-[174px] object-cover "
          />
          </div>
          <div className="w-full md:w-[240px] mt-[17px] font-montserrat text-[14px] font-semibold leading-[17px] text-[#0E2A3F]">
            {item.title}  
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Spotlight;
