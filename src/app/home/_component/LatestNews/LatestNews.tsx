import React from "react";

import NewsCard from "./NewsCard/NewsCard";
import Jaramillo from "../../../_assets/jaramillo.png";
import Imagen_centro from '../../../_assets/Imagen_centro.svg'
import joemcast from "../../../_assets/joemcast.svg"
const LatestNews = () => {
  const newsData = [
    {
      image: Jaramillo,
      category: "INVERSIONS",
      title: "Why Peru is the ideal destination for Citizenship by Investment",
      description:
        "When it comes to finding the perfect blend of opportunity, affordability, and cultural richness, Peru stands out as a top destination for citizenship.",
      link: "#",
    },
    {
      image: Imagen_centro,
      category: "CITYZENSHIP",
      title: "Peruvian Citizenship: Unlocking Global Mobility for MENA Investors",
      description:
        "Showcase the mobility advantages of a Peruvian passport for high-net-worth individuals in the MENA region.",
      link: "#",
    },
    {
      image: joemcast,
      category: "CITYZENSHIP",
      title: "Citizenship vs. Residency by Investment: What’s Right for You?",
      description:
        "Explore the distinctions between these two options and the unique advantages each offers.",
      link: "#",
    },
  ];

  return (
    <div className="mt-[50px] lg:mt-[102px] md:mt-[80px]">
      <div className="text-center font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#B69F71] mb-[22px]">
        LATEST NEWS
      </div>
      <div
        className="text-center w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71] mx-auto"
      ></div>
      <div className="flex mt-[21px] justify-center items-center text-center font-montserrat text-[18px] md:text-[25px] pl-[10px] md:pl-[10px] pr-[10px] md:pr-[10px] font-medium leading-[30px] max-w-[492px] text-[#1E3040] mx-auto">
        Discover all the essential details about residency and citizenship through investment programs.
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] max-w-[1200px]">
          {/* Map through newsData and render NewsCard components */}
          {newsData.map((item, index) => (
            <NewsCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
