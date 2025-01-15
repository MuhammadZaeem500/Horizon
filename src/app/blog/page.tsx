import React from "react";

import Navbar from "../_components/Navbar/Navbar";
import TitleSection from "../_components/BannerSection/BannerSection";
import RecentStories from "./_components/RecentStories/RecentStories";
import NewsCard from "../home/_component/LatestNews/NewsCard/NewsCard";
import Button from "../_components/Button/Button";
import FilterPost from "./_components/NewsFilter/NewsFilter";
import Footer from "../_components/Footer/Footer";

import backgroundImage from '../_assets/HomeHorizon.svg';
import newsData from "./_components/newsData";


const BlogPage = () => {
   return (
      <div>
         <Navbar />
         <TitleSection
            backgroundImage={backgroundImage}
            title="Blog"
            dynamicOpacity={100}
         />
         <RecentStories />
         <div className="flex justify-center items-center mt-[51px] md:mt-[91px] lg:mt-[101px] pl-5 pr-5 ">
            <div className=" max-w-[1140px] w-full">
               <div className="text-center md:text-left font-montserrat text-[16px] font-medium mb-[19px] leading-[19.5px] text-[#5774A1] ">
                  ALL POSTS
               </div>
               <div className="flex flex-wrap flex-col md:flex-row  justify-center md:justify-between border-b-[5px]  border-[#0E2A3F] pb-[35px]">
                  <div className="text-center md:text-left mb-[22px] md:mb-[0px] font-montserrat text-[18px] md:text-[18px]  lg:text-[25px] font-medium  leading-[30px] text-[#1E3040] ">
                     MORE TO EXPLORE
                  </div>
                  <FilterPost />
               </div>
            </div>
         </div>

         <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] max-w-[1200px]">
               {/* Map through newsData and render NewsCard components */}
               {newsData.map((item, index) => (
                  <NewsCard key={index} data={item} />
               ))}
            </div>
         </div>
         <div className="flex justify-center items-center mt-[54px] mb-[54px]">
            <Button
               text="MORE POSTS"
               backgroundColor="#0E2A3F"
               className=" text-white w-[110px] h-[35px] text-[12px] font-normal leading-[18px] tracking-[0.02em] text-center"
            />
         </div>
         <Footer />
      </div>
   );
};

export default BlogPage;