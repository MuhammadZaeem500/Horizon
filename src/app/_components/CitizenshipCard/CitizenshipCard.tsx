import React from "react";
import Image from "next/image";
import boton from "../../_assets/Buttonplay.svg";

interface StepCardProps {
  stepIcon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stepTitle: string;
  stepDescription: string;
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
  leftArrow: string;
  rightArrow: string;
}

const CitizenshipCard: React.FC<StepCardProps> = ({
  stepIcon,
  title,
  description,
  image,
  imageAlt,
  stepTitle,
  stepDescription,
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
  leftArrow,
  rightArrow,
}) => {
  return (
    <div className="bg-[#F3F5F8]  mx-auto py-16 md:py-24  px-6 md:px-12 lg:px-[150px] ">
      {/* Top Section */}
      <div className=" pb-2 md:pb-8 pt-6 md:pt-12   text-left bg-[#FFFFFF] shadow-lg  ">
        <p className="sm:text-xl md:text-2xl font-bold text-[#0E2A3F] font-montserrat flex items-center ml-[10px] md:ml-[80px] mr-[00px] md:mr-[0px] lg:mr-[300px] ">
          <span className=" mr-4 transform rotate-45">{stepIcon}</span>
          {title}
        </p>

        <p className="mt-2 md:mt-4 text-[#0E2A3F] text-xs sm:text-sm md:text-base font-montserrat text-left ml-[10px] md:ml-[70px] mr-[10px] md:mr-[100px] lg:mr-[400px]">
          {description}
        </p>
      </div>
      {/* Bottom Section */}

      <div className="bg-[#0E2A3F] text-white py-16 md:py-16 lg:py-24 h-[480px] ">
        <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center h-full">
          {/* Image Placeholder */}
          <div className="relative  mx-4 md:mx-12   max-w-full">
            {/* Image */}
            <Image
              src={image}
              alt={imageAlt}
              className="w-full z-0"
              width={500}
              height={300}
            />
            {/* Play Button - Centered over the image */}
            <div className="absolute inset-0 flex justify-center items-center z-20">
              <Image
                src={boton}
                alt="Play Button"
                className="w-[100px] h-[50px]" // Adjust size of play button
              />
            </div>
            {/* Grey Overlay */}
            <div className="absolute inset-0 bg-gray-600 opacity-50 z-10"></div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center px-4 mt-2 md:mt-20">
            <h1 className="font-bold font-montserrat text-base md:text-xl">
              {stepTitle.split(".").map((line, index) => (
                <p key={index}>
                  {line.trim().replace(/\.$/, "")}{" "}
                  {/* Removes trailing period if present */}
                </p>
              ))}
            </h1>

            <p className="mt-2 md:mt-4 font-montserrat text-xs md:text-sm font-medium leading-[17.07px]">
              {stepDescription}
            </p>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-2 md:mt-6">
              <button
                className="flex items-center justify-center w-[80px] h-[40px] sm:w-[100px] sm:h-[50px]"
                onClick={onPrev}
                disabled={prevDisabled}
              >
                <Image
                  src={leftArrow}
                  alt="Left Arrow"
                  className={`w-[80px] sm:w-[100px] ${
                    prevDisabled ? "opacity-50" : "opacity-100"
                  } transition-opacity`}
                />
              </button>
              <button
                className="flex items-center justify-center w-[80px] h-[40px] sm:w-[100px] sm:h-[50px]"
                onClick={onNext}
                disabled={nextDisabled}
              >
                <Image
                  src={rightArrow}
                  alt="Right Arrow"
                  className={`w-[80px] sm:w-[100px] ${
                    nextDisabled ? "opacity-50" : "opacity-100"
                  } transition-opacity`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white h-16 md:h-24 "></div>
    </div>
  );
};

export default CitizenshipCard;
