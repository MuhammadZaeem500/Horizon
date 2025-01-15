import React from 'react'

import Navbar from '../_components/Navbar/Navbar';
import TitleSection from '../_components/BannerSection/BannerSection';
import Button from '../_components/Button/Button';
import Footer from '../_components/Footer/Footer';

import backgroundImage from '../_assets/HomeHorizon.svg';
export const CaseReview = () => {
  return (
    <div>
      <Navbar />
      <TitleSection
        backgroundImage={backgroundImage}
        title="Review your case"
        
      />
      <div className=' mt-[175px] md:mt-[260px] lg:mt-[319px] w-full flex flex-col items-center justify-center'>
        <div className='font-monstserrat text-center text-[18px] md:text-[22px] lg::text-[25px] font-bold underline text-[#0E2A3F]'>
          Evaluation tool
        </div>
        <div className='mt-[30px] md:mt-[47px] px-3 max-w-[612px] font-monstserrat text-center text-[16px] md:text-[20px] font-semibold text-[#0E2A3F]'>
          We invite you to complete a complimentary assessment to identify the best immigration destination for your needs.
        </div>
        <div className='mt-[18px] font-monstserrat text-center text-[16px] md:text-[20px] font-semibold text-[#0E2A3F]'>
          Press &apos;Continue&apos; to begin.
        </div>
        <div className='mt-[30px] md:mt-[47px] max-w-[327px] font-monstserrat text-center text-[16px] md:text-[20px] font-bold text-[#5774A1]'>
          This process does not require you to provide personal information.
        </div>
        <div className='mt-[40px] md:mt-[55px] lg::mt-[75px] flex justify-center'>
          <Button
            text="Know more"
            backgroundColor="#0E2A3F"
            className="text-white text-[12px] font-normal leading-[14.63px] tracking-[0.02em] text-center"
          />
        </div>
      </div>
      <div className='mt-[50px] md:mt-[91px] lg:mt-[191px]'>
        <Footer />
      </div>
    </div>
  )
};

export default CaseReview;
