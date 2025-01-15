import React from 'react';
import Image from 'next/image';

import Spotlight from '../Spotlight/Spotlight';
import spotlightData from '../Data/SpotlightData';

import { CiClock2 } from 'react-icons/ci';

interface BlogContent {
  heading: string;
  texts: string[];
}

interface BlogData {
  blogImage: string;
  title: string;
  readTime: number;
  author: string;
  highlight: string;
  content: BlogContent[];
  userImage: string;
}

interface BlogInfoProps {
  blogData: BlogData;
}

const BlogInfo: React.FC<BlogInfoProps> = ({ blogData }) => {
  return (
    <div>
      <div className="flex justify-center px-5">
        <div className="mt-[36px] max-w-[1200px] w-full flex  flex-col md:flex-row space-x-1 md:space-x-10 border-b-[1px] pb-[30px] md:pb-[51px] border-[#5774A1] mb-[30px] md:mb-[100px]">
          {/* Left side: Image */}

          <div className="flex-shrink-0 w-full md:w-1/2">
            <Image
              src={blogData.blogImage}
              alt="Blog Image"
              className="max-w-full w-full"
              height={300}
              width={570}
            />

          </div>
          {/* Right side: Text */}
          <div className="w-full md:w-1/2">
            <div className="flex space-x-2 bg-[#5774A159] rounded-md p-2 max-w-[150px] h-[35px] mt-[30px]  md:mt-[20px] lg:mt-[40px] mb-[20px]  md:mb-[30px] lg:mb-[57px]">
              <CiClock2 className="text-[#0E2A3F] w-5 h-5" />
              <span className="text-[#0E2A3F] text-[16px] font-normal whitespace-nowrap ">
                {blogData.readTime} min read
              </span>
            </div>
            <h2 className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold text-[#0E2A3F] leading-[25px]  md:leading-[35px]">
              {blogData.title}
            </h2>
            <p className="mt-[19px] md:mt-[22px] font-[16px] text-[#0E2A3F]">By: {blogData.author}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-5">
        <div className="max-w-[1140px] w-full leading-[20px] text-[#4C6275] flex flex-col md:flex-row gap-[38px]">
          {/* Left Section */}
          <div className="max-w-[830px]">
            <p className="font-montserrat font-semibold">{blogData.highlight}</p>
            {blogData.content.map((section, index) => (
              <div key={index}>
                <h2 className="font-montserrat font-semibold text-[18px] md:text-[25px] mt-[20px] md:mt-[37px] mb-[20px] md:mb-[37px] leading-6">
                  {section.heading}
                </h2>
                {section.texts.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={"font-montserrat text-[12px] md:text-[13px] lg:text-[14px] leading-[20px]"}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex justify-start">
            <div className="flex w-full md:w-[260px]  border-[#5774A1] mb-[22px]">
              <div className="flex-shrink-0 w-full md:w-[260px]">
                <Image
                  src={blogData.userImage}
                  alt="User Image"
                  width={54}
                  height={54}
                  className="rounded-full"
                />
                <p className="mt-[22px] font-semibold text-[#0E2A3F]">
                  {blogData.author}
                </p>
                <p className="mt-[7px] font-medium text-[#5E5E5E]">
                  Citizenship assessment
                </p>
                <hr className="border-t-2 w-full md:w-[260px] mb-[50px] md:mb-[22px] border-[#5E5E5ECC] my-4"></hr>
                <div className='w-full md:w-[260px]'>
                <Spotlight spotlightData={spotlightData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
