import React from 'react'
import Image from 'next/image';

import Navbar from '../_components/Navbar/Navbar';
import TitleSection from '../_components/BannerSection/BannerSection';
import TestimonialCard from './_components/testimonialCard/testimonialCard';
import CitizenshipAdvantage from './_components/CitizenshipAdvantage/CitizenshipAdvantage';
import Footer from '../_components/Footer/Footer';

import backgroundImage from '../_assets/HomeHorizon.svg';
import Capa from '../_assets/Capa 3.png';
import TestimonialsText from '../_assets/TestimonialsText.svg';

import priscilla from '../_assets/priscilla.svg';
import clarke from '../_assets/clarke.svg';
import eugenia from '../_assets/eugenia.svg'
import laura from '../_assets/laura.svg';

import divygirl from '../_assets/divinetechygirl.svg';
import fauxels from '../_assets/fauxels1.svg';
import rebandCities from '../_assets/rebrand-cities.svg'
import linkedinSales from '../_assets/linkedin-sales.svg';

const testimonials = [
   {
      image: priscilla,
      mainText: 'The team provided me with clear and professional guidance, making sure I understood every step of the process.',
      detailedText:
         'Today I consider myself lucky because today I have the benefit of freedom of movement, freedom of investment, travelling, and many other benefits… The Caribbean passport was the solution for me, and for many people to solve their problems and the restrictions that prevent them from traveling… Thank you from the bottom of my heart, Horizon.',
      author: 'Bassem Yakhour',
   },
   {
      image: clarke,
      mainText: 'I recommend this service to anyone looking for a reliable and efficient solution',
      detailedText:
         'I am very happy that we have reached this moment, The moment of  receiving my passport, I thank Reach Immigration for allowing me the  opportunity to obtain what I call the magic carpet, which I consider  important on a personal and professional level, and which will give me  the freedom of movement that I will need.',
      author: 'Hani Shaker',
   },
   {
      image: eugenia,
      mainText: 'The team was highly professional and guided me through every step seamlessly',
      detailedText:
         'Today I consider myself lucky because today I have the benefit of  freedom of movement, freedom of investment, travelling, and many other  benefits… The Caribbean passport was the solution for me, and for many  people to solve their problems and the restrictions that prevent them  from traveling… Thank you from the bottom of my heart, Horizon.',
      author: 'Yasmine Sultan',
   },
   {
      image: laura,
      mainText: 'I recommend this service to anyone looking for a reliable and efficient solution',
      detailedText:
         'I am very happy that we have reached this moment, The moment of  receiving my passport, I thank Reach Immigration for allowing me the  opportunity to obtain what I call the magic carpet, which I consider  important on a personal and professional level, and which will give me  the freedom of movement that I will need.',
      author: 'Hani Shaker',
   },
];

const citizenshipAdvantages = [
   {
      image: divygirl,
      text: 'Ms. Elie Saad',
   },
   {
      image: fauxels,
      text: 'Ms. Yasmine Sultan',
   },
   {
      image: rebandCities,
      text: 'Mr. Abdallah Al-Sharafi',
   },
   {
      image: linkedinSales,
      text: 'Ms. Kareem sa’eed',
   },
];

export const page = () => {
   return (
      <div>
         <Navbar />
         <TitleSection
            backgroundImage={backgroundImage}
            title="Testimonials"
            
         />
         <div className='pl-[14px] md:pl-[30px] lg:pl-[12%] pb-[51px] bg-[#f3f5f8] pr-[14px] md:pr-[30px] lg:pr-[12%]'>
            <div className="flex justify-start gap-[20px]  items-center w-full mb-[30px] md:mb-[43px] mt-[129px] md:mt-[179px]">
               <Image src={Capa} alt="Investment"
                  className="max-w-[30px] max-h-[30px] mt-[35px] md:mt-[60px] lg:mt-[120px]"
               />
               <h3 className='mt-[35px] md:mt-[60px] lg:mt-[120px]'>OUR SUCCESS STORIES</h3>
            </div>
            <Image src={TestimonialsText} alt="Investment"
               className="max-w-[279px] md:max-w-[400px] lg:max-w-[533px] mb-[50px] md:mb-[70px] lg:mb-[124px]"
            />
            <TestimonialCard data={testimonials} />
         </div>
         <div className="pl-[20px]  lg:pl-[40px] md:pl-[40px] sm:pl-[20px]  max-w-[1100px] mx-auto flex items-center mt-[72px]  mb-[65px]">
            <div
               className="w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71] mr-[12px] md:mr-[21px]"
            ></div>
            <div
               className="text-left font-montserrat text-[16px] md:text-[20px] lg:text-[25px] font-bold w-[90%] md:max-w-[554px] leading-[30.38px] text-[#0E2A3F]"
            >
               Exploring the Advantages of Citizenship and Residency by Investment
            </div>
         </div>
         <CitizenshipAdvantage data={citizenshipAdvantages} />

         <div className='h-[100px] w-full bg-[#f3f5f8] mt-[30px] md:mt-[100px]'></div>
         <Footer />
      </div>
   )
}
export default page;