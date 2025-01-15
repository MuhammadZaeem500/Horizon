import React from "react";
import TitleSection from "../../../_components/BannerSection/BannerSection"
import Navbar from "@/app/_components/Navbar/Navbar";
import MyImage from "@/app/_assets/HomeHorizon.svg"; 

const BlogPage = () => {
   return (
      <div>
         <Navbar />
         <TitleSection
            backgroundImage={MyImage}
            title="About us"
            
         />
        
      </div>
   );
};

export default BlogPage;