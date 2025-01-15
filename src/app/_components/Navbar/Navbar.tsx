"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import Logo from '../../_assets/Logo.svg';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false); // State for toggling mobile menu

   const menuItems = [
      { name: "Home", href: "/" },
      { name: "About us", href: "aboutUs" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Programs", href: "#" },
      { name: "Process", href: "/process" },
      { name: "Blog", href: "/blog" },
   ];

   return (
      <div className='bg-[#0E2A3F] pb-[10px]'>
         <div className="flex md:justify-center">
            <Image
               src={Logo}
               alt="Description"
               className="mt-[15px] md:mt-[60px] pl-[10px] w-[125px] h-[55px] md:w-[133px]  md:h-[70px]"
            />
         </div>

         {/* Hamburger Icon for Mobile */}
         <div className="md:hidden absolute top-8 right-8 z-50">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
               {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
         </div>

         <div className="mt-[0px] md:mt-[44px] flex flex-col md:flex-row justify-center items-center py-4 w-full">
            {/* Menu Items for Desktop */}
            <div className="hidden md:flex justify-center items-center gap-[35px] mx-auto lg:ml-auto md:ml-[5%] sm:ml-auto flex-wrap">
               <span className="text-[14px] font-semibold leading-[17px] font-montserrat text-[#B69F71]">
                  AR
               </span>

               {/* Map through menu items */}
               {menuItems.map((item, index) => (
                  <a
                     key={index}
                     href={item.href}
                     className="text-[14px] font-semibold leading-[17px] font-montserrat text-white hover:text-[#B69F71] hover:underline whitespace-nowrap"
                  >
                     {item.name}
                  </a>
               ))}
            </div>

            {/* Apply Now Button in Desktop (Not for Mobile) */}
            <div className="hidden md:block">
               <Button
                  text="Apply Now"
                  className="mt-[-17px]  sm:w-[100px] md:w-[100px] sm:text-center md:absolute lg:absolute lg:right-[11%] md:right-[4%] sm:relative"
               />
            </div>
         </div>

         {/* Mobile Menu */}
         <div
            className={`${
               menuOpen ? 'flex flex-col items-center gap-4 ' : 'hidden'
            } md:hidden absolute top-[70px] left-0 right-0 bg-[#0E2A3F] pb-4 z-50`}
         >
            {menuItems.map((item, index) => (
               <a
                  key={index}
                  href={item.href}
                  className="text-[16px] font-semibold text-white hover:text-[#B69F71] hover:underline whitespace-nowrap py-2 px-4 border-b border-[#B69F71]"
               >
                  {item.name}
               </a>
            ))}

            {/* Apply Now Button in Mobile */}
            <div className="w-[100px] mt-[20px] text-center bg-[#B69F71] text-white hover:bg-[#C6A35F] rounded">
               <Button text="Apply Now" />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
