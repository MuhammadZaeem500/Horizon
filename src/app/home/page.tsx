import React from 'react';

import HeroSection from './_component/HeroSection/HeroSection';
import CoreValues from './_component/CoreValues/CoreValues';
import OurServices from './_component/OurServices/OurServices';
import Process from './_component/Process/Process';
import AboutUs from './_component/AboutUs/AboutUs';
import OurCommitment from './_component/OurCommitment/OurCommitment';
import LatestNews from './_component/LatestNews/LatestNews';
import InvestmentHighlight from '../_components/InvestmentHighlight/InvestmentHighlight';
import Passport from '../_components/Passport/Passport';
import Footer from '../_components/Footer/Footer';

const HomePage = () => {
   
  return (
    <div>
      <HeroSection />
      <CoreValues />
      <OurServices />
      <Process />
      <AboutUs />
      <OurCommitment />
      <InvestmentHighlight />
      <LatestNews />
      <Passport />
      <Footer />
    </div>
  )
}

export default HomePage