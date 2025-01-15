import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  number: number; // Card number
  image: StaticImageData; // Type for image imports
}

const Card: React.FC<CardProps> = ({ number, image }) => {
  return (
    <div className="bg-white shadow-lg px-12 py-4 md:py-8   flex flex-col items-start  w-[130%] md:w-[98%] h-[170px] md:h-[220px]  ">
      {/* Number */}
      <h1 className="text{#5774A1} text-2xl md:text-4xl font-bold  mt-8">{number}</h1>
      <hr className="border-t-2 border-{#5774A1}-500 w-8 mb-4" />
      {/* Image */}
      <Image 
  src={image} 
  alt={`Program ${number}`} 
  width={150} 
  height={150} 
  className="md:w-[200px] md:h-[200px]" 
/>
    </div>
  );
};

export default Card;
