"use client";
import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const Search = () => {
   // State to track if the input field is focused or has text
   const [searchText, setSearchText] = useState("");

   // Handle input change (simulate search)
   const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setSearchText(e.target.value);

   };

   return (
      <div className="relative md:w-[200px] lg:w-[310px] h-[35px] border border-solid border-[#4C6275] flex items-center justify-end">
         <input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder=" "  // Placeholder text is empty to make room for the label
            className="w-full h-full pl-2 pr-8 text-sm text-[#4C6275] bg-transparent outline-none"
         />
         {/* Conditionally render the label based on input */}
         {searchText.length === 0 && (
            <label className="absolute right-7 md:right-12 text-sm text-[#4C6275]">Search</label>
         )}
         <FaSearch className="absolute right-2 text-[#4C6275]" />
      </div>
   )
}

export default Search