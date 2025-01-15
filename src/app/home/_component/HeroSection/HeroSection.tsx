import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/_components/Navbar/Navbar';
import Capa from '../../../_assets/Capa.svg'
import Button from '@/app/_components/Button/Button';
import Arrow from '../../../_assets/arrow.svg';

export default function HeroSection() {
  return (
    <div className="w-[100%] h-auto  bg-[#0E2A3F]">
      <Navbar />
      <div>
        <div
          className="mt-[6px] lg:mt-[96px] md:mt-[96px] w-[80%] h-[80%]  lg:w-[567px] lg:h-[192px] md:w-[467px] md:h-[152px] 
        
        lg:ml-[153px] md:ml-[90px] ml-[12px]
             border border-black 
             shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <Image
            src={Capa}
            alt="Capa"
            className="w-[100%] h-[90%] md:w-[467px] md:h-[152px]  lg:w-[567px] lg:h-[192px]"
          />
        </div>
      </div>

      <Button
        text={
          <div className="flex  items-center justify-center gap-2">
            <span>Review your case</span>
            <Image src={Arrow} alt="arrow" className="w-25 h-4" />
          </div>
        }
        className="w-[200px] mt-[51px] ml-[12px] lg:ml-[150px] md:ml-[90px] mb-[52px]  md:mb-[82px]"
      />
    </div>

  )
}

