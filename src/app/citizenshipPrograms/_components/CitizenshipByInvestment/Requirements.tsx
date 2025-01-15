import React from "react";

// Data Array with Step Added
const cardData = [
  {
    step: 1,
    title: "Completion of the change of status form",
    description:
      ". The first step in the process is to correctly fill out the change of immigration status form.. This essential document marks the beginning of the process, allowing the authorities to evaluate your application and proceed with the corresponding requirements to move towards citizenship by investment.",
  },
  {
    step: 2,
    title: "Present a simple copy of a valid passport or travel document",
    description:
      ". It is important that the document is machined or does not contain a chip, according to the required specifications. This step ensures that your identity and nationality are verified as part of the application process.",
  },
  {
    step: 3,
    title: "Present Interpol International exchange card",
    description:
      ". It is important that this card has an issue date of no more than three months. This document is essential to ensure international security and background checks during the application process.",
  },
  {
    step: 4,
    title: "Present a certificate of criminal, Police or Judicial Record",
    description:
      ". The last step requires a document issued by the competent authority in your country of origin or in the countries where you have resided in the last five years, prior to your arrival in the national territory.",
  },
];

// Card Component
interface CardProps {
  step: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ step, title, description }) => {
  // Split the description by period and space, but without the period
  const descriptionParts = description.split(". ").map((part) => part.trim());

  return (
    <div className="bg-white border p-6 h-auto md:min-h-[320px] mb-2 md:mb-6">
      {/* Step on a separate line */}
      <h2 className="text-base md:text-xl font-semibold text-[#5774A1] mb-2 md:mb-4">
        Step {step}
      </h2>
      {/* Title */}
      <h3 className="text-xs md:text-sm font-[600] text-[#0E2A3F] mb-4">{title}</h3>
      {/* Description */}
      {descriptionParts.map((part, index) => (
        <p
          key={index}
          className={`text-[#0E2A3F] text-[12px] md:text-[14px] leading-[20px] mb-2 ${
            index === 0 ? "font-bold" : ""
          }`}
        >
          {part}
        </p>
      ))}
    </div>
  );
};

// Cards Section Component
const Requirements = () => {
  return (
    <div className="px-[50px] md:px-[80px] lg:px-[120px] py-6 bg-[#DFE5ED]">
      {/* Section Title */}
      <h2 className="text-base font-semibold text-[#0E2A3F] mb-8 text-left font-montserrat">
        Requirements to apply
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cardData.map((card, index) => (
          <Card key={index} step={card.step} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Requirements;
