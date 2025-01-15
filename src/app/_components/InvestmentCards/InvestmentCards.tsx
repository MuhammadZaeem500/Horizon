import React from "react";
import Card from "./Card"; // Import the updated Card component
import Recurso2 from "@/app/_assets/Recurso2.svg"; // Example image import
import Recurso4 from "@/app/_assets/Recurso4.svg"; // Another example image

const cardData = [
  {
    number: 1,
    image: Recurso2, // Pass the image
  },
  {
    number: 2,
    image: Recurso4, // Pass another image
  },
];

const InvestmentCards: React.FC = () => {
  return (
    <div className="bg-gray-100 py-2 md:py-12 px-16 md:px-20 lg:px-20 flex flex-col md:grid lg:grid-cols-2 gap-4 items-center">

      {cardData.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          image={card.image} // Pass the image
          
        />
      ))}
    </div>
  );
};

export default InvestmentCards;
