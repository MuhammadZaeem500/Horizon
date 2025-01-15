import React from "react";
import Image from 'next/image';

import Button from "../../_components/Button/Button";
import cityzenshipText from '../../_assets/cityzenshipText.svg';

const InvestmentProcess = () => {

   const data = [
      {
         number: "1",
         title: "First: Complete the Screening Process",
         description: "Citizenship-by-investment programs offer families the opportunity to acquire an alternative second citizenship, granting access to a wide range of valuable benefits.",
         subSections: [],
         additionalTitle: "Complete the Screening Process",
         additionalDescription: "Embark on your journey with a tailored assessment designed to confirm your eligibility and ensure a seamless application process."
      },
      {
         number: "2",
         title: "Choose Your Investment Option",
         description: "",
         subSections: [
            {
               listTitle: "Invest in an Existing Company:",
               listDescription: "Choose from a wide-ranging portfolio of well-established businesses across multiple sectors."
            },
            {
               listTitle: "Establish Your Own Business:",
               listDescription: "Establish a company customized to your objectives, either independently or in collaboration with eligible partners."
            }
         ]
      },
      {
         number: "3",
         title: "Prepare and Submit Your Documentation",
         description: "Submit the required documents to ensure the efficient processing of your application",
         subSections: []
      },
      {
         number: "4",
         title: "Approval of Your Application",
         description: "Obtain confirmation and proceed to the next step in securing your residency.",
         subSections: []
      },
      {
         number: "5",
         title: "Obtain Your Residency Visa in Just 60 Days",
         description: "Embrace the advantages of residency as you explore new opportunities in Peru.",
         subSections: []
      },
      {
         number: "6",
         title: "Complete Biometric Registration",
         description: "Complete the registration of your biometric data and have your photo taken to finalize your residency.",
         subSections: []
      },
      {
         number: "7",
         title: "Maintain Your Resident Status",
         description: "Travel to Peru every six months throughout the two-year period to fulfill residency requirements.",
         subSections: []
      },
      {
         number: "8",
         title: "Achieve Citizenship and a Peruvian Passport After Two Years",
         description: "Unlock the full benefits of Peruvian citizenship, including improved mobility and access to opportunities in various desirable countries around the world.",
         subSections: []
      },

   ];



   return (
      <div className="h-auto w-full md:pl-[40px] lg:pl-[12%] md:pr-[40px] lg:pr-[12%] py-[50px] pt-[0px] flex flex-col md:flex-row  justify-between bg-[#5774A11F] gap-[30px]">
         {/* Left Section */}
         <div className="md:w-1/2 mt-[10%] ">
            <div className="flex items-center justify-center md:justify-start ">
               <div
                  className="w-[15px] h-[15px] rotate-[-45deg] bg-[#0E2A3F] mr-[21px]"
               ></div>
               <div
                  className="text-center md:text-left font-montserrat text-[20px] font-semibold leading-[24.38px] text-[#0E2A3F]"
               >
                  ABOUT THE PROCESS
               </div>
            </div>
            <div className="mt-[42px] flex justify-center md:justify-start items-center md:items-start ">
               <Image
                  src={cityzenshipText}
                  alt="Passport"
                  className="w-[260px] md:w-[449px] lg:w-[449px]"
               />
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start ">
               <div className=" text-center md:text-left text-[#0E2A3F] font-montserrat text-[14px] md:text-[16px] font-medium leading-[28px] max-w-[353px] mt-[20px] md:mt-[61px]">
                  Achieve Peruvian citizenship and a passport within two years through the flexible investment options available in the country’s Investor Program.
               </div>
            </div>
            <div className="mt-[20px] flex justify-center md:justify-start items-center md:items-start ">
               <Button
                  text="Know more"
                  backgroundColor="#0E2A3F"
                  className="text-white text-[12px] font-medium leading-[14.63px] tracking-[0.02em] text-center"
               />
            </div>
         </div>

         {/* Right Section */}
         <div className="flex mx-auto  md:w-1/2 mt-[0px] md:mt-[14%] text-left pl-[28px] md:pl-[0px] pr-[28px] md:pr-[0px] max-w-[550px]  md:max-w-[493px] ">
            <div className="w-full  justify-center md:justify-start  ">
               {data.map((section, index) => (
                  <div key={index} className="flex items-start mt-[28px] ">
                     {/* Heading number */}
                     <div className={`font-montserrat text-[#4682B4] mt-[-7px] text-[45px] font-medium leading-[54.86px] tracking-[0.02em]`}>
                        {section.number}
                     </div>

                     <div className="ml-[19px] md:ml-[40px]">
                        {/* First Title (Main Title) */}
                        <div className="font-montserrat text-[14px] text-[#0E2A3F] font-bold leading-[20px] tracking-[0.02em]">
                           {section.title}
                        </div>

                        {/* Description for the main title */}
                        {section.description && (
                           <div className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.02em] text-[#0E2A3F] max-w-[493px]">
                              {section.description}
                           </div>
                        )}

                        {/* Additional Title (for the first section only) */}
                        {section.additionalTitle && (
                           <div className="font-montserrat text-[14px] mt-[12px] font-bold leading-[20px] tracking-[0.02em] text-[#0E2A3F]">
                              {section.additionalTitle}
                           </div>
                        )}

                        {/* Additional Description (for the first section only) */}
                        {section.additionalDescription && (
                           <div className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.02em] text-[#0E2A3F] max-w-[493px]">
                              {section.additionalDescription}
                           </div>
                        )}

                        {/* List items (for sections with lists) */}
                        {section.subSections.length > 0 && (
                           <ul className="list-disc pl-5">
                              {section.subSections.map((sub, subIndex) => (
                                 <li key={subIndex} className="font-montserrat text-[14px] font-bold leading-[20px] tracking-[0.02em] mt-[12px] text-[#0E2A3F] ml-2">
                                    {sub.listTitle}
                                    <span className="font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.02em] text-[#0E2A3F] ml-2">
                                       {sub.listDescription}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>



      </div >
   );
};

export default InvestmentProcess;
