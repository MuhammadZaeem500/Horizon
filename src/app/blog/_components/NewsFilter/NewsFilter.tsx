"use client";
import React, { useState } from "react";

const FilterPost = () => {
   const [selectedFilter, setSelectedFilter] = useState('All');

   const handleFilterClick = (filter: React.SetStateAction<string>) => {
      setSelectedFilter(filter);
      // Logic to filter the posts based on the selected filter
   };
   return (
      <div className="flex flex-wrap justify-center md:text-[14px] lg:text-[16px] text-[#5774A1] font-normal gap-[16px] md:gap-[15px] lg:gap-[22px]">
         <button className="filter-button" onClick={() => handleFilterClick('All')}>All</button>
         <button className="filter-button" onClick={() => handleFilterClick('Economy')}>Economy</button>
         <button className="filter-button" onClick={() => handleFilterClick('Citizenship')}>Citizenship</button>
         <button className="filter-button" onClick={() => handleFilterClick('Passport')}>Passport</button>
         <button className="filter-button" onClick={() => handleFilterClick('Business')}>Business</button>
         <button className="filter-button" onClick={() => handleFilterClick('Investment programs')}>Investment programs</button>
      </div>
   );
};

export default FilterPost;