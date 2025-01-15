import React from 'react';
import Image from 'next/image';
import { TbPhoneCall } from "react-icons/tb";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

interface ContactCardProps {
  contactInfo: {
    image: string;
    city: string;
    office: string;
    phone: string;
    email: string;
    location: string;
  }[]; // Array of contact data
}

export const ContactCard: React.FC<ContactCardProps> = ({ contactInfo }) => {
  return (
    <div className="flex flex-wrap justify-center mb-[30px] md:gap-[20px] lg:gap-[31px]">
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="w-[360px] h-[497px] shadow-[0px_4px_4px_0px_#4C627533]"
        >
          <div className="flex justify-center">
            <Image
              src={info.image}
              alt="Card Image"
              className="w-[320px] h-[222.22px] rounded-tl-[5px] rounded-tr-[5px] mt-[19px]"
            />
          </div>
          <div className="ml-[47px]">
            <hr className="w-[25px] border-t-[3px] border-[#1E3040] mt-[22px]" />
            <h4 className="mt-[5px] text-[16px] font-bold leading-[19px] text-[#1E3040]">{info.city}</h4>
            <p className="mt-[20px] text-[12px] font-semibold leading-[14px] text-[#1E3040]">{info.office}</p>

            {/* Contact Details */}
            <div className="flex flex-row items-center mt-[16px] mb-[7px] gap-[7px]">
              <TbPhoneCall />
              <p className="font-montserrat font-medium text-[14px] leading-[14px]">{info.phone}</p>
            </div>
            <div className="flex flex-row items-center mt-[16px] mb-[7px] gap-[7px]">
              <IoMailOpenOutline />
              <p className="font-montserrat font-medium text-[14px] leading-[14px]">{info.email}</p>
            </div>
            <div className="flex flex-row items-center mt-[16px] mb-[7px] gap-[7px]">
              <IoLocationOutline />
              <p className="font-montserrat font-medium text-[14px] leading-[14px]">{info.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCard;
