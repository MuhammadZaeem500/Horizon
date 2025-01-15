import React from "react";
import Button from "@/app/_components/Button/Button";
import Arrow from "../../_assets/arrow.svg";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface FormProps {
  backgroundImage: StaticImageData | string;
  dynamicOpacity?: number; // Background image opacity
  contentOpacity?: number;  // Main content opacity
  contentBackgroundColor?: string; // Main content background color
}

const Form: React.FC<FormProps> = ({
  backgroundImage,
  dynamicOpacity = 30,
  contentOpacity = 100,
  contentBackgroundColor = "#FFFFFF",
}) => {
  const contentStyle = {
    backgroundColor: `rgba(${parseInt(contentBackgroundColor.slice(1, 3), 16)}, 
                            ${parseInt(contentBackgroundColor.slice(3, 5), 16)}, 
                            ${parseInt(contentBackgroundColor.slice(5, 7), 16)}, 
                            ${contentOpacity / 100})`,
  };

  return (
    <div className="relative bg-[#5774A11F] min-h-screen px-12 md:px-12 lg:px-32">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt=""
          layout="fill"
          objectFit="cover"
          style={{
            opacity: dynamicOpacity / 100,
            zIndex: -1,
          }}
        />
      </div>

      {/* Main Content with Dynamic Props */}
      
      <div className="px-12 mt-[100px] mb-[80px] " style={contentStyle}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-24 px-4 md:px-0 relative z-10">
          {/* Left Section: Text over Image */}
          <div className="flex flex-col  items-start text-[#FFFFF] ">
            <h2 className="sm:text-base md:text-base lg:text-base text-[#0E2A3F] font-semibold font-montserrat leading-[19.5px] tracking-[0.02em] mb-2">
              <span className="text-[#B69F71] mr-4">◆</span>KNOW MORE
            </h2>
            <h1 className="sm:text-base md:text-base lg:text-lg font-semibold mt-2 text-gray-900">
              Get a free consultation NOW
            </h1>
            <p className="text-[#0E2A3F] font-montserrat text-sm font-semibold tracking-[0.02em] leading-[14.5px] mt-4 w-[100px] md:w-[300px]">
              Answering your questions is the first step in supporting your
              journey to success. Let us show you how we can help.
            </p>
            <Button
            
              text={
                <div className="flex items-center justify-center  gap-2">
                  <span>Review your case</span>
                  <Image src={Arrow} alt="arrow" className="w-25 h-4" />
                </div>
              }
              className="w-[200px] mt-[60px] md:mt-[100px] mb-[52px] md:mb-[82px] "
            />
          </div>

          {/* Right Section: Form */}
          <div className="bg-[#0E2A3F] p-6 text-white">
            <h2 className="text-sm font-bold font-montserrat text-center leading-[19.5px] tracking-[0.02em] mb-6">
              Get a free call back
              <div className="flex justify-center items-center ">
              <hr className="w-[50px] mt-6 border-t-1 border-[#5774A1]" />
              </div>
            </h2>
           


            <form className="space-y-4 font-montserrat text-sm tracking-[0.02em] leading-[19.5px]">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-2   text-gray-900  w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Your Number</option>
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
              </div>

              {/* Job Title and Nationality */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your job title"
                  className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Nationality"
                  className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                />
              </div>

              {/* Investment Question */}
              <select
                className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">
                  Can you invest with a minimum of $80,000?
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              {/* Message Textarea */}
              <textarea
                placeholder="Your message...."
                className="px-4 py-2   text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
                rows={4}
              ></textarea>

              {/* Newsletter Subscription */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-2 text-sm text-gray-200 leading-[19.5px]"
                >
                  I agree to subscribe to Horizon's newsletters and promotional
                  communications.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2   hover:bg-yellow-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
