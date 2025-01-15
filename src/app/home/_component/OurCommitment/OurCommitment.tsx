"use client";
import React, { useState } from "react";
import Image from "next/image";
import commitmentImage from "../../../_assets/commitment.svg"; 

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Global Mobility Experts",
    content:
      "We have a multidisciplinary team of legal, financial, and immigration specialists with years of experience in the MENA region.",
  },
  {
    title: "Transparent Processes",
    content:
      "We have a multidisciplinary team of legal, financial and immigration specialists with years of experience in the MENA region.",
  },
  {
    title: "Personalized Attention",
    content:
      "Each client is unique. That's why we design strategies tailored to your specific needs and personal objectives.",
  },
  {
    title: "Legality and Security",
    content:
      "Our programs are backed by Legislative Decree 689, providing the certainty that your investment is in reliable and legal hands.",
  },
];

const OurCommitment: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[49px] md:mt-[109px] pl-[20px] md:pl-[10%] pr-[20px] md:pr-[10%] h-auto lg:h-[701px] md:h-auto bg-[#DFE5ED] flex flex-col lg:flex-row gap-[20px]">
      
      {/* Right Side: Accordion */}
      <div className="flex-1 lg:w-1/2 ">
        {/* Title Section */}
        <div className="flex gap-[20px]  items-center">
          <div className="text-center w-[12px] mt-[40px] md:mt-[63px] lg:mt-[103px] h-[10px] md:h-[15px] rotate-[-45deg] bg-[#0E2A3F] "></div>
          <div className="font-montserrat text-[18px] md:text-[20px] mt-[37px] md:mt-[60px] lg:mt-[100px] font-semibold leading-[24px] max-w-[527px] text-[#0E2A3F] ">
            WHAT MAKES US DIFFERENT?
          </div>
        </div>

        {/* Subtitle */}
        <div className="font-montserrat text-[18px] md:text-[25px] mb-[51px] md:mb-[61px] font-semibold leading-[35px] max-w-[492px] mt-[20px] text-[#1E3040]">
          Our commitment to excellence and innovation shapes everything we do
        </div>

        {/* Accordion Section */}
        {accordionData.map((item: AccordionItem, index: number) => (
          <div
            key={index}
            className="max-w-[566px] pl-[46px] pr-[46px] pt-[13px] border-b-[2px] border-[#5774A1]"
          >
            {/* Accordion Header */}
            <div
              className="flex items-center justify-between cursor-pointer pb-[11px]"
              onClick={() => toggleAccordion(index)}
            >
              <div className="font-montserrat text-[16px] font-medium leading-[19.5px] max-w-[364px] text-[#0E2A3F]">
                {item.title}
              </div>
              <div className="text-[#0E2A3F] text-[16px] font-medium transition-transform duration-700">
                {openIndex === index ? "×" : "+"}
              </div>
            </div>

            {/* Accordion Content */}
            <div
              className={`mt-[10px] font-montserrat text-[14px] leading-[18px] text-[#5A5A5A] overflow-hidden transition-all duration-700 ${
                openIndex === index ? "max-h-[50px] mb-[40px]" : "max-h-0 mb-0"
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>

      {/* Left Side: Image */}
      <div className="flex-shrink-0 flex items-center justify-center mt-4 lg:mt-0 lg:w-1/2">
        <Image
          src={commitmentImage}
          alt="Our Commitment"
          // width={500}
          // height={700}
          className="object-cover h-auto w-full max-w-[500px] max-h-[700px] mb-[20px] md:mb-[30px] lg:mb-[0px]"
        />
      </div>
    </div>
  );
};

export default OurCommitment;
