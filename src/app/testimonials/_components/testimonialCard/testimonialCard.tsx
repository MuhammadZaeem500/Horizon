import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialData {
  image: string;
  mainText: string;
  detailedText: string;
  author: string;
}

interface TestimonialCardProps {
  data: TestimonialData[];
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div>
      {data.map((testimonial, index) => (
        <div
          key={index}
          className='max-w-[1140px] h-auto md:max-h-[410px] mb-[30px] md:mb-[50px] md:px-[10px] lg:px-[25px] pt-[20px] md:pt-[10px] lg:pt-[25px] pb-[20px] md:pb-[10px] lg:pb-[22px] bg-[#DFE5ED] shadow-[0px_4px_4px_0px_#00000040] flex flex-col md:flex-row justify-center items-center '   
        >
          <Image
            src={testimonial.image}
            alt={`testimonial-${index}`}
            className='md:max-h-[300px] md:max-w-[298px] lg:max-w-[358px] lg:max-h-[360px] mb-[20px] md:mb-[0px]'
          />
          <div className='ml-[25px] flex flex-col justify-start'>
            <FaQuoteLeft className='text-[18px] md:text-[25px] lg:text-[40px] text-[#c2cbd5]' />
            <p className='mt-[20px] lg:mt-[44px] max-w-[620px]  font-montserrat text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-[20px] text-[#1E3040]'>
              {testimonial.mainText}
            </p>
            <p className='mt-[12px] lg:mt-[26px]  max-h-[168px] md:h-[168px] max-w-[662px] font-montserrat pr-[12px] md:pr-[0px] text-[12px] md:text-[13px] lg:text-[14px] font-medium leading-[24px] text-[#4C6275]'>
              {testimonial.detailedText}
            </p>
            <h3 className='md:mt-[12px] lg:mt-[25px] font-montserrat text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[20px] text-[#1E3040]'>
              {testimonial.author}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
