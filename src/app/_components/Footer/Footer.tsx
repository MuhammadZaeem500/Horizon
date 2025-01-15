import React from "react";
import Image from "next/image";
import Logo from "../../_assets/fotterLogo.svg";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
   return (
      <div className="w-full bg-[#0E2A3F] text-white h-auto md:h-[150px] pt-[31px] md:pt-[51px] pl-[2%] sm:pl-[16px] md:pl-[20px] lg:pl-[9.5%] pr-[16px] md:pr-[20px] lg:pr-[9.5%]">
         <div className="flex flex-col md:flex-row  sm:items-center md:items-center  justify-center md:justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 mb-[24px] md:mb[0px]">
               <Image src={Logo} alt="Logo"
                  className="w-[150px] h-[37px] md:w-[120px]  ld:w-[150px]  "
               />
            </div>

            {/* Rights & Privacy */}
            <p className="sm:text-center md:text-center text-[12px] font-normal leading-[14px] font-montserrat whitespace-nowrap mb-[24px] md:mb[0px]">
               All rights reserved | <a href="#privacy">Privacy Policy</a>
            </p>



            {/* Links */}
            <div className="flex space-x-[15px] text-sm sm:justify-center md:justify-start mb-[28px] md:mb[0px] mt-[0px] md:mt-[4px] lg:mt-[0px]">
               <a href="/" className="text-[12px] font-normal leading-[14px] font-montserrat">Home</a>
               <a href="/aboutUs" className="text-[12px] font-normal leading-[14px] font-montserrat whitespace-nowrap">About Us</a>
               <a href="/contact" className="text-[12px] font-normal leading-[14px] font-montserrat whitespace-nowrap">Contact Us</a>
               <a href="/process" className="text-[12px] font-normal leading-[14px] font-montserrat whitespace-nowrap">Process</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-[10px] sm:justify-center md:justify-start ">
               <a href="#instagram" className="hover:text-gray-400 mb-[24px] md:mb[0px]">
                  <FaInstagram size={18} />
               </a>
               <a href="#facebook" className="hover:text-gray-400 mb-[24px] md:mb[0px]">
                  <FaFacebookF size={18} />
               </a>
               <a href="#snapchat" className="hover:text-gray-400 mb-[24px] md:mb[0px]">
                  <FaSnapchat size={18} />
               </a>
               <a href="#linkedin" className="hover:text-gray-400 mb-[24px] md:mb[0px]">
                  <FaLinkedin  size={18} />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
