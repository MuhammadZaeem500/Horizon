"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { PiCurrencyDollarLight } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa6";
import { BsHouseCheck } from "react-icons/bs";
import LeftArrow from "../../_assets/LeftArrow.svg";
import RightArrow from "../../_assets/RightArow.svg";
import InvestmentCard from "./InvestmentCard/InvestmentCard";
import { GiMountainRoad } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { MdOutlineBalance } from "react-icons/md";

const InvestmentHighlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);

  const cardsData = [
    {
      icon: <PiCurrencyDollarLight />,
      title: "Economic Growth",
      description:
        "Peru is one of Latin America's most stable and rapidly expanding economies, offering a business-friendly environment and a strong regional currency.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Strategic opportunities",
      description:
        "With its strategic geographic location, Peru serves as a vital link between markets in North America, Europe, and Asia, making it an ideal gateway for international trade.",
    },
    {
      icon: <BsHouseCheck />,
      title: "Quality of life",
      description:
        "Peru seamlessly blends modernity with tradition, providing a vibrant lifestyle in cities like Lima and Cusco, alongside access to excellent education and reliable healthcare for everyone.",
    },
    {
      icon: <GiMountainRoad />,
      title: "Cultural heritage and tourism",
      description:
        "Living in Peru means embracing one of the world's richest and oldest cultures. From the awe-inspiring Machu Picchu to its internationally acclaimed cuisine, the country offers unforgettable experiences for you and your family.",
    },
    {
      icon: <FiSend />,
      title: "Immigration advantages",
      description:
        "Securing Peruvian citizenship or residency unlocks greater travel freedoms, including visa-free access to numerous global destinations, expanding both personal and career possibilities.",
    },
    {
      icon: <MdOutlineBalance />,
      title: "Immigration advantages",
      description:
        "Our programs operate under Legislative Decree 689, ensuring transparency and security throughout your investment journey. Our dedicated experts are with you every step of the way to guarantee a seamless and safe process.",
    },
  ];

  const updateVisibleCardsCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCardsCount(3); // Large screens
    } else if (window.innerWidth >= 768) {
      setVisibleCardsCount(2); // Medium screens
    } else {
      setVisibleCardsCount(1); // Small screens
    }
  };

  useEffect(() => {
    updateVisibleCardsCount(); // Set initial visible cards
    window.addEventListener("resize", updateVisibleCardsCount); // Listen for window resize

    return () => {
      window.removeEventListener("resize", updateVisibleCardsCount); // Cleanup listener
    };
  }, []); // Empty dependency array ensures this runs only once

  const visibleCards = cardsData.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + visibleCardsCount < cardsData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-[#F3F5F8] mt-[50px] lg:mt-[159px] md:mt-[100px] pl-[5px] pr-[5px] py-12">
      <div className="text-center font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#B69F71] mb-[22px]">
        WHY INVEST IN PERU
      </div>
      <div className="text-center w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71] mx-auto"></div>
      <div className="flex mt-[21px] justify-center items-center text-center font-montserrat text-[18px] md:text-[25px]  font-semibold leading-[30px] max-w-[492px] text-[#1C3661] mx-auto">
        Embrace a future without limits with simplified and accessible
        citizenship services for everyone.
      </div>
      <div className="flex gap-[20px] justify-center">
        {visibleCards.map((card, index) => (
          <InvestmentCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-[20px] md:mt-[30px] mx-auto max-w-[240px]">
        <button
          className="flex items-center justify-center w-[100px] h-[50px]"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <Image
            src={LeftArrow}
            alt="Left Arrow"
            className={`w-[100px] ${
              currentIndex === 0 ? "opacity-50" : "opacity-100"
            } transition-opacity`}
          />
        </button>
        <button
          className="flex items-center justify-center w-[100px] h-[50px]"
          onClick={handleNext}
          disabled={currentIndex + visibleCardsCount >= cardsData.length}
        >
          <Image
            src={RightArrow}
            alt="Right Arrow"
            className={`w-[100px] ${
              currentIndex + visibleCardsCount >= cardsData.length
                ? "opacity-50"
                : "opacity-100"
            } transition-opacity`}
          />
        </button>
      </div>
    </div>
  );
};

export default InvestmentHighlight;
