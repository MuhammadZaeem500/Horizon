import React from 'react'

import Navbar from '../_components/Navbar/Navbar';
import TitleSection from '../_components/BannerSection/BannerSection';
import ContactCard from './_components/ContactCard';
import Footer from '../_components/Footer/Footer';

import backgroundImage from '../_assets/HomeHorizon.svg';
import CardImage from '../_assets/fauxels.svg';

export const Contact = () => {
  const contactData = [
    {
      image: CardImage,
      city: "LIMA, PERU",
      office: "SAN BORJA OFFICE",
      phone: '+51 000 000 000',
      email: 'mail@mail.com',
      location: 'San Borja, Lima',
    },
    {
      image: CardImage,
      city: "LIMA, PERU",
      office: "SAN BORJA OFFICE",
      phone: '+51 000 000 000',
      email: 'mail@mail.com',
      location: 'San Borja, Lima',
    },
    {
      image: CardImage,
      city: "LIMA, PERU",
      office: "SAN BORJA OFFICE",
      phone: '+51 000 000 000',
      email: 'mail@mail.com',
      location: 'San Borja, Lima',
    }
  ];

  return (
    <div>
      <Navbar />
      <TitleSection
        backgroundImage={backgroundImage}
        title="Contact"
        
      />
      <div className='mt-[170px] md:mt-[259px] w-full flex flex-col items-center justify-center  px-[20px]'>
        <h2 className='font-montserrat font-[20px] leading-[24px] text-[#B69F71] '>
          CONTACT US
        </h2>
        <div className="w-[15px] h-[15px] rotate-[-45deg] bg-[#B69F71] mt-[22px] mb-[21px]"></div>

        <p className='max-w-[605px] font-montserrat text-[13px] md:text-[14px] lg:text-[16px] font-semibold leading-[20px] text-[#0E2A3F] text-center mb-[50px] md:mb-[70px] lg:mb-[120px]'>
          If you have any questions, doubts or need more information about our services, do not hesitate to contact us. <br /> Our team will be happy to assist you promptly and professionally.
        </p>
      </div>
      <div className='flex mx-auto justify-center px-[20px]'>
        <ContactCard contactInfo={contactData} />
      </div>
      <div className='mt-[78px]'>
      <Footer />
      </div>
    </div>
  )
}

export default Contact;