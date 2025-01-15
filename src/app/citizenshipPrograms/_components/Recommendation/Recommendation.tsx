"use client";

import React, { useState } from "react";
import Image from "next/image";
import commitmentImage from "../../../_assets/commitment.svg"; // Replace with your image path
import Button from "@/app/_components/Button/Button";

interface AccordionItem {
  title: string;
  content: string;
  step: number;
}

const accordionData: AccordionItem[] = [
  {
    step: 1,
    title:
      "Submission of Public Deed Confirming Capital Increase in an Existing Company",
    content:
      "Submit a simple copy of the public deed evidencing the capital increase in a pre-existing company or corporation, valid within three months of the signing date.",
  },
  {
    step: 2,
    title:
      "Proof of Submission and Payment of the Most Recent Annual Income Tax Return",
    content:
      "Evidence of submission and payment of the company's most recent annual income tax return, demonstrating its operational status during the fiscal year preceding the application submission.",
  },
  {
    step: 3,
    title: "Operating License Number and Issuing Municipality Details",
    content:
      "Evidence of submission and payment of the company's most recent annual income tax return, demonstrating its operational status during the fiscal year preceding the application submission.",
  },
  {
    step: 4,
    title: "Proof of Investment via International Transfer of $150,000 or More",
    content:
      "Evidence of submission and payment of the company's most recent annual income tax return, demonstrating its operational status during the fiscal year preceding the application submission.",
  },
];

const Recommendation: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9FAFC] flex flex-col md:flex-row gap-[20px] px-[20px] md:px-[10%] py-8 md:py-[50px] items-center">
      {/* Left Side: Accordion */}
      <div className="flex-1 w-full md:w-1/2">
        {/* Option Header */}
        <h3 className="font-montserrat text-sm font-medium leading-[19.5px] tracking-[0.02em] text-left mb-4 md:mb-6 text-[#5774A1]">
          OPTION:1
        </h3>

        {/* Title Section */}
        <div className="flex items-center gap-2 mb-2 md:mb-4">
          <h3 className="font-montserrat text-lg md:text-2xl font-medium leading-[13.5px] md:leading-[19.5px] tracking-[0.02em] text-left text-[#0E2A3F]">
            Recommended for You:
          </h3>
        </div>

        <h2 className="font-montserrat text-lg md:text-2xl font-medium tracking-[0.02em] text-left mb-4 md:mb-6 text-[#1E3040] leading-[1.4]">
          Investing in an existing company
        </h2>

        <p className="font-montserrat text-sm md:text-base text-[#5774A1] font-medium leading-[19.5px] tracking-[0.02em] text-left mb-6">
          What to invest: $200,000
        </p>

        {/* Accordion Section */}
        {accordionData.map((item, index) => (
          <div key={index} className="mb-2 md:mb-4 pb-2 md:pb-4">
            {" "}
            {/* Removed border-b */}
            {/* Accordion Header */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-2 md:gap-4">
                {/* Display Step Number with Title */}
                <span className="font-montserrat text-lg md:text-2xl mr-2 d:mr-4 font-medium text-[#0E2A3F]">
                  {item.step}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-[#0E2A3F]">
                  {item.title}
                </h3>
              </div>
              <span className="text-lg ml-8 md:ml-16 font-bold text-[#0E2A3F]">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {/* Accordion Content */}
            <div
              className={`mt-2 text-sm text-[#5A5A5A] transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="mt-2  text-xs md:text-sm font-medium text-[#0E2A3F]">
                {item.content}
              </p>
            </div>
          </div>
        ))}

        <div className="w-[100px] mt-[20px] text-center mx-auto md:ml-48 lg:ml-[80%]">
          <Button
            text="Process"
            backgroundColor="#0E2A3F"
            className="text-white text-[12px] font-medium leading-[14.63px] tracking-[0.02em] text-center"
          />
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-shrink-0 flex items-center justify-center md:justify-between  w-full md:w-1/2 ml-[0px]  md:ml-8">
        <Image
          src={commitmentImage}
          alt="Our Commitment"
          className="object-cover w-full max-w-[300px] md:max-w-[300px] lg:max-w-[500px] h-[300px] md:h-[500px]   shadow-md"
          layout="intrinsic"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Recommendation;
