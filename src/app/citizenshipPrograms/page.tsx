import React from "react";
import OurServices from "../citizenshipPrograms/_components/OurServices/OurServices";
import InvestmentCards from "../_components/InvestmentCards/InvestmentCards";
import Citizenship from "./_components/Citizenship/Citizenship";
import CitizenshipByInvestment from "./_components/CitizenshipByInvestment/CitizenshipByInvestment";
import InvestmentPrograms from "./_components/CitizenshipByInvestment/InvestmentPrograms";
import Requirements from "./_components/CitizenshipByInvestment/Requirements";
import Passport from "../_components/Passport/Passport";
import Footer from "../_components/Footer/Footer";
import Recommendation from "./_components/Recommendation/Recommendation";
import Strategy from "./_components/Strategy/Strategy";
import HeroSection from "./_components/HeroSection/HeroSection";
// import HeroSection from "../citizenshipPrograms/_components/HeroSection/HeroSection";
// import HeroSection from "../home/_component/HeroSection/HeroSection";
// import HeroSection from "@/app/programs/_components/HeroSection/HeroSection";
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
     
      <Citizenship />   
      
      <Strategy/>

      {/* <OurCommitment/> */}
      {/* Passport Section */}
      <div className="mt-[-50px] md:mt-[-100px] mb-16">
        <Passport />
      </div>
      
      {/* Citizenship Section */}
      <div className="mt-[-70px]  ">
      <Citizenship />   
      </div>
      
      <Footer/>
    </div>
  );
};

export default Page;
