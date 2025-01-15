import React from "react";
import Image, { StaticImageData }  from "next/image";

import Vector from "../../../../_assets/Vector.svg";
import ArrowIcon from "../../../../_assets/Arrow 3.svg";

interface NewsCardData {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  link: string;
}

const NewsCard = ({ data }: { data: NewsCardData }) => {
  return (
    <div className="w-[90%] md:w-[360px] h-[497px] border-[1px] mb-[0px] border-[#1C3661] mx-auto sm:mx-0 flex flex-col">
      {/* Image Section */}
      <Image
        src={data.image}
        alt={data.title}
        className="w-full h-[241px] object-cover"
      />

      <div className="flex items-center mt-[29px] ml-[12px] md:ml-[20px]">
        <Image src={Vector} alt="Icon" className="w-[11px] h-[11px]" />
        <span className="ml-[9px] text-[12px] font-medium leading-[14.63px] font-montserrat text-[#4C6275] tracking-[0.02em]">
          {data.category}
        </span>
      </div>

      {/* Title */}
      <div className="mt-[19px] ml-[12px] md:ml-[20px] mr-[12px] md:mr-[0px] ">
        <h3 className="text-[14px] md:text-[16px] font-semibold leading-[19.5px] font-montserrat text-[#0E2A3F] tracking-[0.02em]">
          {data.title}
        </h3>
      </div>

      {/* Description */}
      <div className="mt-[25px] ml-[12px] md:ml-[20px] mr-[12px] md:mr-[0px] flex-grow">
        <p className="text-[12px] font-normal leading-[18px] font-montserrat text-[#333333] tracking-[0.02em]">
          {data.description}
        </p>
      </div>

      {/* "See more" with Arrow */}
      <div className="max-w-[88px] mb-[31px] mt-[auto] ml-[12px] md:ml-[20px] flex items-center justify-between border-b border-[#5E5E5E]">
        <a
          href={data.link}
          className="text-[14px] font-semibold leading-[17.07px] font-montserrat text-[#5E5E5E] tracking-[0.02em] flex items-center"
        >
          See more
          <Image
            src={ArrowIcon}
            alt="Arrow Icon"
            className="ml-[5px] w-[11px] h-[11px]"
          />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
