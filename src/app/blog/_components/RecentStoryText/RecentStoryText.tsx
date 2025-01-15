import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/_components/Button/Button';

type RecentStoryTextProps = {
   citizenship: string;
   title: string;
   subTitle: string;
 };

const RecentStoryText: React.FC<RecentStoryTextProps> = ({ citizenship, title, subTitle }) => {
  const router = useRouter();

   const navigateToBlogDetails = () => {
      router.push('/blogdetails'); 
   };

  return (
    <div>
      {/* Citizenship Section */}
      <div className="absolute inset-0 flex mt-[40px] md:mt-[42px] justify-start pl-[5%] md:pl-[30px] lg:pl-[50px] z-20">
        {/* Angled Line */}
        <div
          className="w-[15px] h-[0] border-t-[1.5px] mt-[10px] border-white rotate-[-90deg] mr-[9px]"
          style={{
            transformOrigin: 'center',
          }}
        ></div>

        {/* Text */}
        <h1
          className="text-white font-montserrat text-[14px] font-medium leading-[19px]"
          style={{
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {citizenship}
        </h1>
      </div>

      {/* Peruvian Citizenship & Mobility Text */}
      <div className="absolute inset-0 flex flex-col items-start mt-[80px] md:mt-[73px] text-white pl-[5%] md:pl-[30px] lg:pl-[50px] z-20">
        {/* First Line */}
        <span className="font-montserrat text-[17px] md:text-[16px] font-normal md:font-bold leading-[20px] md:leading-[19.48px] tracking-[0.02em] text-left">
          {title}
        </span>

        {/* Second Line */}
        <span className="font-montserrat text-[17px] md:text-[16px] font-light md:font-bold leading-[30px] md:leading-[19.48px] tracking-[0.02em] text-left">
          {subTitle}
        </span>
      </div>

      {/* Button Section */}
      <div className="absolute inset-0 flex items-center mt-[135px] md:mt-[131px] pl-[5%] md:pl-[30px] lg:pl-[50px] z-20">
        <Button
          onClick={navigateToBlogDetails}
          text="Read more"
          backgroundColor=""
          className="font-montserrat text-white w-[135px] h-[35px] text-[14px] font-light leading-[17.63px] tracking-[0.02em] text-center border-[2px] border-white hover:bg-[#5774A1] transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default RecentStoryText;
