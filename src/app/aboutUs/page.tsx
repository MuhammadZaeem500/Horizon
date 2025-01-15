import React from 'react'
import HeroSection from './_components/HeroSection/HeroSection'
import AboutUsSection from './_components/AboutSection/AboutSection'
import VisionSection from './_components/VisionSection/VisionSection'
import InvestmentHighlight from '../_components/InvestmentHighlight/InvestmentHighlight'
import Citizenship from '../aboutUs/_components/Citizenship/Citizenship'
import Form from '../aboutUs/_components/FormSection/Form'
import Footer from '../_components/Footer/Footer'
import PhoneInput from '../_components/PhoneInput/PhoneInput'
import CallBackForm from '../_components/CallBackForm/CallBackForm'
// import Form from './_components/FormSection/Form'
// import Picture from './_components/HeroSection/HeroSection'
// import Citizenship from './_components/Citizenship/Citizenship'
// import Citizenship from '../citizenshipPrograms/_components/Citizenship/Citizenship'

const AboutUspage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUsSection/>
      <VisionSection/>
      <div className='mt-[-50px] md:mt-[-160px]'>
      <InvestmentHighlight/>
      </div>
      <Citizenship/>
      {/* <Form/> */}
      <CallBackForm/>
      <Footer/>
    </div>
  )
}

export default AboutUspage
