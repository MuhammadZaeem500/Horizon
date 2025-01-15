"use client";

import React from "react";
import Image from 'next/image';

import Button from "@/app/_components/Button/Button";
import RecentStoryText from "../RecentStoryText/RecentStoryText";
import Search from "@/app/_components/Search";

import divinetechyGirl from '../../../_assets/divinetechygirl.svg';
import RebrandCities from '../../../_assets/rebrand-cities.svg';

const RecentStories = () => {
   

   return (
      <div className="mt-[169px] md:mt-[251px] max-w-[1180px] mx-auto mb-10 px-4">
         <div className="flex justify-between items-center gap-4 border-b-[5px] pb-[29px] border-[#0E2A3F]">
            <div className="text-left font-montserrat text-[16px]  md:text-[20px] lg:text-[25px] font-medium md:font-semibold leading-[30.38px] text-[#0E2A3F] whitespace-nowrap ">
               OUR BLOG: Recent stories
            </div>
            <Search />
         </div>


         <div className="flex flex-wrap md:flex-nowrap ">
            <div className="relative w-full md:w-auto ">
               <div className="absolute inset-0 w-[100%] md:h-[100%] lg:h-full bg-gradient-to-b from-transparent to-[#0E2A3F] z-10" />
               <Image
                  src={divinetechyGirl}
                  alt="divinetechyGirl"
                  className="w-full h-[210px] md:max-w-[592px] md:h-[500px] lg:max-w-[100%] lg:h-[500px] object-cover"
               />
               <div className="absolute inset-0 flex mt-[40px] md:mt-[0px] md:items-center justify-start pl-[5%] md:pl-[30px] lg:pl-[73px] z-20">
                  {/* Angled Line */}
                  <div
                     className="w-[15px] h-[0] border-t-[1.5px] mt-[10px] md:mt-[0px] border-white rotate-[-90deg] mr-[9px]"
                     style={{
                        transformOrigin: 'center',
                     }}
                  ></div>

                  {/* Text */}
                  <h1
                     className="text-white font-montserrat text-[14px] md:text-[16px] font-medium leading-[19px]"
                     style={{
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                     }}
                  >
                     Citizenship
                  </h1>
               </div>
               <div className="absolute inset-0 flex flex-col items-start mt-[80px] md:mt-[272px] text-white pl-[5%] md:pl-[30px] lg:pl-[73px] z-20">
                  {/* First Line */}
                  <span className="font- text-[17px] md:text-[20px] lg:text-[25px] font-normal md:font-semibold leading-[10px] md:leading-[30.48px] tracking-[0.02em] text-left">
                     Recommended for You:
                  </span>

                  {/* Second Line */}
                  <span className="font-montserrat text-[17px] md:text-[20px] lg:text-[25px] font-light md:font-medium leading-[30px] md:leading-[30.48px] tracking-[0.02em] text-left">
                     Investing in an existing company
                  </span>
               </div>
               <div className=" absolute inset-0 flex items-center mt-[50px] md:mt-[236px] pl-[5%] md:pl-[30px] lg:pl-[73px] z-20 text-white font-montserrat text-[13px] md:text-[16px] font-light  leading-[19px] tracking-[0.02em]">
                  {/* Left Text */}
                  <div className="mr-[25px]">
                     Horizon press
                  </div>

                  {/* Right Text */}
                  <div>
                     January 10, 2025
                  </div>
               </div>
               <div className="absolute inset-0 flex items-center mt-[135px] md:mt-[350px] pl-[5%] md:pl-[30px] lg:pl-[73px] z-20 ">
                  <Button
                     text="Read more"
                     backgroundColor=""
                     className="font-montserrat text-white w-[135px] h-[35px] text-[14px] font-light leading-[17.63px] tracking-[0.02em] text-center border-[2px] border-white hover:bg-[#5774A1]  transition-colors duration-300"
                  />
               </div>
            </div>

            <div className="flex flex-col w-full md:w-auto mt-[10px] md:mt-0 ml-0 md:ml-[11px]">
               <div className="w-full relative  md:max-w-[360px] lg:w-[360px] h-[246px] bg-[#0E2A3F]">
                  <RecentStoryText
                     citizenship="Citizenship"
                     title="Peruvian Citizenship:"
                     subTitle="Unlocking Global Mobility for MENA Investors"
                  />
               </div>
               <div className="relative mt-[7px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E2A3F] z-10" />
                  <Image
                     src={RebrandCities}
                     alt="divinetechyBoy"
                     className="w-full h-[210px] md:w-[360px] md:h-[246px] object-cover"
                  />
                  <RecentStoryText
                     citizenship="Citizenship"
                     title="Citizenship vs. Residency by Investment: "
                     subTitle="What’s Right for You?"
                  />
               </div>
            </div>
         </div>




      </div>
   );
};

export default RecentStories;
