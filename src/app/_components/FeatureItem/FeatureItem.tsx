import React from 'react';
import Image, { StaticImageData } from 'next/image';

import Line from '../../_assets/Line.svg';


interface FeatureItemProps {
   icon1: React.ReactNode;  
   imageSrc: StaticImageData;
   image1Src: StaticImageData;
   title1: string;    
   title2: string;
   title3: string;   
 }

 const FeatureItem: React.FC<FeatureItemProps> = ({ icon1, imageSrc, image1Src, title1, title2, title3 }) => {
   return (
         <div className="max-w-[1140px] h-auto md:h-[100px]  mb-[65px] md:mb-[94px] mx-auto flex flex-col md:flex-row  justify-center md:justify-between border-b-[0px]  md:border-b-[5px]  border-[#0E2A3F]">

            {/* Item 1 */}
            <div className="text-black mt-[20px] md:mt-auto flex h-[70px]  md:h-[100px] flex-row sm:flex-row items-center lg:p-2 md:p-0 mx-auto text-center  border-b-[4px] md:border-b-[0px] border-[#0E2A3F] w-[80vw] md:w-auto ">
            <div className="flex flex-row items-center lg:p-2 md:p-0 mx-auto">
               <div className="mr-[12px]  md:mr-[5px] lg:mr-[12px]">
                  {React.cloneElement(icon1 as React.ReactElement, {
                     className: "w-[25px] h-[25px] text-[#0E2A3F]"
                     })}
               </div>
               <div className="flex lg:flex-row md:flex-col flex-row items-center ">
                  <div
                     className="font-montserrat lg:w-auto lg:mt-0 md:mt-[12px] md:w-auto whitespace-nowrap text-[14px] lg:text-[16px] md:text-[13px] font-semibold leading-[19.5px] mr-[20px] md:mr-[0px] lg:mr-[20px]"
                     style={{ color: '#0E2A3F' }}
                  >
                     {title1}
                  </div>
                  <div className='w-[30px] md:w-[45px] h-[12px]'>
                     <Image
                        src={Line}
                        alt="Capa"
                        width={45}
                        height={12}
                     />
                  </div>
               </div>
               <div className="md:w-[2px] w-[0px] md:h-[98px] h-[0px] ml-[26px] bg-[#0E2A3F] transform scale-x-[1.1] "></div>
               </div>
            </div>

            {/* Item 2 */}
            <div className="text-black mt-[20px] md:mt-auto flex h-[42px]  md:h-[100px] flex-col sm:flex-row items-center lg:p-2 md:p-0 mx-auto text-center sm:text-left border-b-[4px] md:border-b-[0px] border-[#0E2A3F] w-[80vw] md:w-auto">
               <div className="flex flex-row items-center lg:p-2 md:p-0 mx-auto">
                  <div className="mr-[12px] lg:mr-[12px] md:mr-[5px] w-[23px] h-[23px]">
                     <Image
                        src={imageSrc}
                        alt="Home Horizon"
                        height={23}
                        width={23}
                        className="md:w-[23px] sm:w-[23px]"
                     />
                  </div>
                  <div className="flex lg:flex-row md:flex-col sm:flex-row items-center">
                     <div
                        className="font-montserrat lg:w-auto lg:mt-0 md:mt-[12px] whitespace-nowrap text-[14px] lg:text-[16px] md:text-[13px] font-semibold leading-[19.5px] mr-[20px] md:mr-[0px] lg:mr-[30px]"
                        style={{ color: '#0E2A3F' }}
                     >
                       {title2}
                     </div>
                     <div className='w-[30px] md:w-[45px] h-[12px]'>
                        <Image
                           src={Line}
                           alt="Capa"
                           width={45}
                           height={12}
                        />
                     </div>
                  </div>
               </div>
               <div className="md:w-[2px] sm:w-[0px] md:h-[98px] sm:h-[0px] ml-[26px] bg-[#0E2A3F] transform scale-x-[1.1]"></div>
            </div>

            {/* Item 3 */}
            <div className="text-black mt-[20px] md:mt-auto flex h-[42px]  md:h-[100px] flex-col sm:flex-row items-center lg:p-2 md:p-0 mx-auto text-center sm:text-left border-b-[4px] md:border-b-[0px] border-[#0E2A3F] w-[80vw] md:w-auto">
               <div className="flex flex-row items-center lg:p-2 md:p-0 mx-auto">
                  <div className="mr-[12px] lg:mr-[12px] md:mr-[5px] w-[23px]">
                     <Image
                        src={image1Src}
                        alt="Home Horizon"
                        height={23}
                        width={23}
                        className="md:w-[23px] sm:w-[23px]"
                     />
                  </div>
                  <div className="flex lg:flex-row md:flex-col sm:flex-row items-center">
                     <div
                        className="font-montserrat lg:w-auto text-[14px] lg:mt-0 md:mt-[12px] whitespace-nowrap lg:text-[16px] md:text-[13px] font-semibold leading-[19.5px] mr-[20px] md:mr-[0px] lg:mr-[30px]"
                        style={{ color: '#0E2A3F' }}
                     >
                        {title3}
                     </div>
                     <div className='w-[30px] md:w-[45px]  h-[12px]'>
                        <Image
                           src={Line}
                           alt="Capa"
                           width={45}
                           height={12}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
   );
};

export default FeatureItem;
