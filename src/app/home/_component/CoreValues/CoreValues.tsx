import React from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from "react-icons/ai";

import FeatureItem from '@/app/_components/FeatureItem/FeatureItem';
import Write from '../../../_assets/write.png';
import Legal from '../../../_assets/Legal.svg';
import HomeHorizon from '../../../_assets/HomeHorizon.svg';

const CoreValues = () => {
   return (
      <div className="max-w-[100%] ">
         <Image
            src={HomeHorizon}
            alt="Home Horizon"
            height={500}
            className="mx-auto w-full object-cover"
         />
         <FeatureItem
            icon1={<AiOutlineGlobal />}
            imageSrc={Write}       
            image1Src={Legal}      
            title1="Global Mobility Experts" 
            title2="Transparent Processes"   
            title3="Legality & Security"    
         />
      </div>
   );
};

export default CoreValues;
