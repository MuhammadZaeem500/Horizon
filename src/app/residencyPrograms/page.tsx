import React from "react";
import HeroSection from "../residencyPrograms/_components/HeroSection/HeroSection";
import OurServices from "../residencyPrograms/_components/OurServices/OurServices";
import InvestmentCards from "../_components/InvestmentCards/InvestmentCards";
import Citizenship from "./_components/Citizenship/Citizenship";
import CitizenshipByInvestment from "./_components/ResidencyByInvestment/ResidencyByInvestment";
import InvestmentPrograms from "./_components/ResidencyByInvestment/InvestmentPrograms";
import Requirements from "./_components/ResidencyByInvestment/Requirements";
import Passport from "../_components/Passport/Passport";
import Footer from "../_components/Footer/Footer";
import Recommendation from "./_components/Recommendation/Recommendation";
import Strategy from "./_components/Strategy/Strategy";
// import OurCommitment from "./_components/Strategy/Strategy";
const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Our Services Section */}
      <OurServices />
      
      {/* Investment Cards Section */}
      <InvestmentCards />
      
      {/* Citizenship by Investment Section */}
      <CitizenshipByInvestment />
      
      {/* Investment Programs Section */}
      <InvestmentPrograms />
      
      {/* Requirements Section */}
      <Requirements />

      <Recommendation/>
      {/* <div className="mt-[-70px] mb-16"> */}
      <Citizenship />   
      {/* </div> */}

      {/* <OurCommitment/> */}
      {/* Passport Section */}
      <div className="mt-[-50px] md:mt-[-100px] mb-16">
        <Passport />
      </div>
      
      {/* Citizenship Section */}
      <div className="mt-[-70px]   ">
      <Citizenship />   
      </div>

    <Strategy/>

      <Footer/>
    </div>
  );
};

export default Page;
