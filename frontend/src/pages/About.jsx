import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
         <p>Welcome to DocPrompt, your trusted partner in managing healthcare appointments quickly and efficiently. At DocPrompt, we understand the challenges people face when scheduling doctor visits and managing their health needs.</p>

         <p>DocPrompt is dedicated to excellence in healthcare technology. We continually enhance our platform, integrating the latest innovations to improve user experience and provide outstanding service. Whether you’re booking your first appointment or managing ongoing care, DocPrompt is here to support you every step of the way.</p>

         <b className='text-gray-800'> Our Vision </b>
         <p>Our vision at DocPrompt is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and doctors, making it easier for you to access trusted care exactly when you need it. </p>

        </div>
    </div>

    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US </span></p>
    </div>

      <div className='flex flex-col md:flex-row mb-20 '>
        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '>
          <b>Efficiency: </b>
          <p>Appointment scheduling made simple to fit your busy lifestyle.  </p>
        </div>

        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  '>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>

    </div>
  )
}

export default About