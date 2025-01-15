"use client"; // Marking this file as a Client Component

import React, { useState } from "react";
import LeftArrow from "../../../_assets/arrow izq.svg";
import RightArrow from "../../../_assets/arrow derecha.svg";
import pexelsdivine from "../../../_assets/pexelsdivinetechygirl.svg";
import pexelsfauxels from "../../../_assets/pexelsfauxels.svg";
import pexelsrebrand from "../../../_assets/pexelsrebrand.svg";
import linkedin from "../../../_assets/linkedin.svg";
import CitizenshipCard from "@/app/_components/CitizenshipCard/CitizenshipCard";


const Citizenship = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      stepIcon:"",
      description:"",
      title:
        "Investing in an Existing Company: What You Need to Know",
      image: pexelsdivine,
      imageAlt: "Video thumbnail",
      stepTitle:
        "Step-by-step: How to apply for the citizenship by investment program",
      stepDescription:
        "Explore how our exclusive citizenship and residency-by-investment programs can elevate your quality of life. Unlock new opportunities, enjoy global security, and benefit from tax advantages tailored to align with your personal and professional aspirations.",
    },
    {
      stepIcon:"",
      description:"",
      title:
        "Exploring the Advantages of Citizenship and Residency by Investment",
     image: pexelsfauxels,
      imageAlt: "Video thumbnail",
      stepTitle:
        "Why more and more people are. choosing. Peru for their second citizenship",
      stepDescription:
        "Explore how our exclusive citizenship and residency-by-investment programs can elevate your quality of life. Unlock new opportunities, enjoy global security, and benefit from tax advantages tailored to align with your personal and professional aspirations.",
    },
    {
      stepIcon:"",
      description:"",
      title:
        "Exploring the Advantages of Citizenship and Residency by Investment",
      image: pexelsrebrand,
      imageAlt: "Video thumbnail",
      stepTitle: "True Stories:. How a second citizenship changed my life",
      stepDescription:
        "Explore how our exclusive citizenship and residency-by-investment programs can elevate your quality of life. Unlock new opportunities, enjoy global security, and benefit from tax advantages tailored to align with your personal and professional aspirations.",
    },
    {
      stepIcon:"",
      description:"",
      title:
        "Exploring the Advantages of Citizenship and Residency by Investment",
       image: linkedin,
      imageAlt: "Video thumbnail",
      stepTitle: "Is it really worth investing. in a second passport?",
      stepDescription:
        "Explore how our exclusive citizenship and residency-by-investment programs can elevate your quality of life. Unlock new opportunities, enjoy global security, and benefit from tax advantages tailored to align with your personal and professional aspirations.",
    },
  ];


  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <CitizenshipCard
      stepIcon={cardsData[currentIndex].stepIcon}
        title={cardsData[currentIndex].title}
        description={cardsData[currentIndex].description}
        image={cardsData[currentIndex].image}
        imageAlt={cardsData[currentIndex].imageAlt}
        stepTitle={cardsData[currentIndex].stepTitle}
        stepDescription={cardsData[currentIndex].stepDescription}
        onPrev={handlePrev}
        onNext={handleNext}
        prevDisabled={currentIndex === 0}
        nextDisabled={currentIndex === cardsData.length - 1}
        leftArrow={LeftArrow}
        rightArrow={RightArrow}
      />
    </div>
  );
};

export default Citizenship;
