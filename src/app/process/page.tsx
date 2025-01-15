import React from 'react';
import Image from 'next/image';
import { AiOutlineGlobal } from "react-icons/ai";

import Navbar from '../_components/Navbar/Navbar';
import TitleSection from '../_components/BannerSection/BannerSection';
import FeatureItem from '../_components/FeatureItem/FeatureItem';
import InvestmentProcess from './InvestmentProcess/InvestmentProcess';
import Footer from '../_components/Footer/Footer';

import backgroundImage from '../_assets/HomeHorizon.svg';
import Write from '../_assets/write.png';
import Residency from '../_assets/Residency.svg';
import InvestProcess from '../_assets/InvestProcess.svg';
import InvestProcess1 from '../_assets/InvestmentProcess1.png'

const HomePage = () => {

  return (
    <div>
      <Navbar />
      <TitleSection
        backgroundImage={backgroundImage}
        title="Process"
      />
      <div className="mt-[119px] md:mt-[178px]">
        <FeatureItem
          icon1={<AiOutlineGlobal />}
          imageSrc={Write}
          image1Src={Residency}
          title1="Cityzenship by investment"
          title2="Residency by investment"
          title3="Get more information"
        />
      </div>
      <InvestmentProcess />
      <div>
        <Image
          src={InvestProcess}
          alt="Investment Process"
          className="mx-auto w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
        />
      </div>
      <InvestmentProcess />
      <div className='mb-[100px]'>
        <Image
          src={InvestProcess1}
          alt="Investment Process"
          className="mx-auto w-full h-[250px] md:h-[350px] lg:h-[500px] object-cover"
        />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage