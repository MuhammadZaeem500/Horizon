import React from "react";

// Data Array
const cardData = [
  {
    title: "FREEDOM ACROSS 143 COUNTRIES",
    description:
      ". This program grants you the unparalleled right to live, work, travel, and study without limitations in 143 countries. This means you can enjoy seamless access to diverse opportunities.",
  },
  {
    title: "TRAVEL AROUND THE WORLD",
    description:
      "149 countries. You can visit. Visa-free and visa-on-arrival travel to 149 countries including Japan, the UK, and all other members of the EU.",
  },
  {
    title: "PERU: YOUR BEST CHOICE",
    description:
      "We're your best choice. 21st in Global Mobility Rank. Acquiring citizenship through a country with a strong investment-based passport program grants you access to superior educational and healthcare systems.",
  },
  {
    title: "EARLY ARRIVAL",
    description:
      "2 years. Time to get your citizenship. One of the key advantages of this program is its expedited timeline, allowing you to achieve citizenship within just two years.",
  },
];

// Card Component
interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  // Split the description by period and space, but without the period
  const descriptionParts = description.split(". ").map((part) => part.trim());

  return (
    <div className="bg-white border p-6 h-auto min-h-[220px] md:min-h-[280px] mb-2 md:mb-6">

      <h2 className="text-xs md:text-sm  md:font-semibold text[#0E2A3F] mb-4 font-Montserrat uppercase">
        {title}
      </h2>
      {descriptionParts.map((part, index) => (
        <p
          key={index}
          className={`text[#0E2A3F] font-Montserrat text-[12px] md:text-[14px] leading-[20px] mb-2 ${
            index === 0 ? "font-semibold text[#0E2A3F]" : ""
          }`}
        >
          {part}
        </p>
      ))}
    </div>
  );
};

// Cards Section Component
const InvestmentPrograms = () => {
  return (
    <div className="px-[50px] md:px-[80px] lg:px-[120px] py-6 bg-[#DFE5ED]">
      {/* Section Title */}
      <h2 className="text-base font-semibold text-[#0E2A3F] mb-8 font-montserrat   leading-[28px] tracking-[0.02em] text-left ">
        Exclusive Advantages of Our Investment Programs
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentPrograms;
