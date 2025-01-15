import React from 'react';
import Image from 'next/image';

import Navbar from "../_components/Navbar/Navbar";
import TitleSection from '../_components/BannerSection/BannerSection';
import FilterPost from '../blog/_components/NewsFilter/NewsFilter';
import Search from '../_components/Search';
import BlogInfo from './_components/BlogInfo/BlogInfo';
import blogData from './_components/Data/blogData';
import NewsCard from '../home/_component/LatestNews/NewsCard/NewsCard';
import Footer from '../_components/Footer/Footer';

import backgroundImage from '../_assets/HomeHorizon.svg';
import LeftArrow from '../_assets/Line 53.svg'
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

import Jaramillo from "../_assets/jaramillo.png";
import Imagen_centro from '../_assets/Imagen_centro.svg'
import joemcast from "../_assets/joemcast.svg"

const newsData = [
   {
     image: Jaramillo,
     category: "INVERSIONS",
     title: "Why Peru is the ideal destination for Citizenship by Investment",
     description:
       "When it comes to finding the perfect blend of opportunity, affordability, and cultural richness, Peru stands out as a top destination for citizenship.",
     link: "#",
   },
   {
     image: Imagen_centro,
     category: "CITYZENSHIP",
     title: "Peruvian Citizenship: Unlocking Global Mobility for MENA Investors",
     description:
       "Showcase the mobility advantages of a Peruvian passport for high-net-worth individuals in the MENA region.",
     link: "#",
   },
   {
     image: joemcast,
     category: "CITYZENSHIP",
     title: "Citizenship vs. Residency by Investment: What’s Right for You?",
     description:
       "Explore the distinctions between these two options and the unique advantages each offers.",
     link: "#",
   },
 ];

const BlogDetails = () => {
   return (
      <div>
         <Navbar />
         <TitleSection
            backgroundImage={backgroundImage}
            title="Blog"
            dynamicOpacity={100}
         />
         <div className="flex justify-center items-center mt-[22px] md:mt-[91px] lg:mt-[101px] pl-5 pr-5 w-full">
            <div className="flex flex-wrap md:flex-nowrap mt-[127px] md:mt-[172px] w-full justify-center md:justify-between border-b-[5px] border-[#0E2A3F] pb-[35px] max-w-[1200px]">
               <div className="mb-[22px] md:mb-[0px] mt-[10px] md:mt-[0px]">
                  <FilterPost />
               </div>
               <div>
                  <Search />
               </div>
            </div>
         </div>
         <div className="flex justify-center items-center  pl-5 pr-5 ">
            <div className='mt-[36px] max-w-[1200px] w-full '>
               <a href="/blog" className="flex items-center space-x-2">
                  <Image
                     src={LeftArrow}
                     alt="Left Arrow"
                     className="w-[50px] mr-[23px]"
                  />
                  <span className="font-montserrat md:text-[18px] lg:text-[25px] font-medium leading-[30px] ">BLOG</span>
               </a>
            </div>
         </div>
         <BlogInfo blogData={blogData} />
         <div className="flex justify-center items-center mt-[50px] md:mt-[70px] lg:mt-[120px] pl-5 pr-5 w-full h-[150px] md:h-[200px] bg-[#DFE5ED]">
            <div className="flex flex-nowrap  w-full justify-center md:justify-between flex-col md:flex-row  max-w-[1140px]">
               <div className="font-montserrat text-[17px] md:text-[22px] lg:text-[25px] leading-5 md:leading-[30px] font-semibold text-center md:text-left">
                  Enjoyed reading it? Spread the word
               </div>
               <div className="flex space-x-[10px] justify-center md:justify-start mt-6 md:mt-0 ">
                  <a href="#instagram" className="hover:text-gray-400">
                     <FaInstagram size={18} />
                  </a>
                  <a href="#facebook" className="hover:text-gray-400">
                     <FaFacebookF size={18} />
                  </a>
                  <a href="#snapchat" className="hover:text-gray-400">
                     <FaSnapchat size={18} />
                  </a>
                  <a href="#linkedin" className="hover:text-gray-400">
                     <FaLinkedin size={18} />
                  </a>
               </div>
            </div>
         </div>
         <div className='mt-[50px] md:mt-[100px]'>
            <h1 className='font-montserrat text-center text-[25px] leading-[30px] font-semibold'>
               RELATED POSTS
            </h1>
            <div className="flex justify-center ">
               <div className="flex flex-wrap justify-center gap-[20px] mt-[40px] md:mt-[80px] max-w-[1200px]">
                  {/* Map through newsData and render NewsCard components */}
                  {newsData.map((item, index) => (
                     <NewsCard key={index} data={item} />
                  ))}
               </div>
            </div>
         </div>
         <div className='mt-[50px] md:mt-[100px]'>
            <Footer />
         </div>
      </div>
   );
};

export default BlogDetails;