import React from "react";

interface InvestmentCardProps {
   icon: React.ReactNode;  
   title: string;          
   description: string;    
 }

const InvestmentCard: React.FC<InvestmentCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-[82%] md:w-[360px] mt-[30px] md:mt-[50px] h-[497px] pl-[59px] bg-[#0E2A3F] p-0 border border-[#1C3661] hover:bg-white transition-all duration-300 group">
      {/* Icon */}
      <div className="mt-[279px] group-hover:mt-[100px] flex justify-start transition-all duration-700">
      {React.cloneElement(icon as React.ReactElement, {
          className: "w-[68px] h-[68px] text-white group-hover:text-[#0E2A3F] transition-all duration-300",
        })}
      </div>

      {/* Text */}
      <div className="mt-[44px] group-hover:mt-[75px] text-left transition-all duration-700">
        <p className="font-montserrat text-[18px] font-bold leading-[21.94px] tracking-[0.02em] text-white group-hover:text-[#5774A1] transition-all duration-300">
        {title}
        </p>
      </div>
      <div className="max-w-[248px] flex mt-[26px] justify-start  text-left font-montserrat text-[14px] font-medium leading-[18px]  text-[#0E2A3F] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700">
      {description}
         </div>
    </div>
  );
};

export default InvestmentCard;
