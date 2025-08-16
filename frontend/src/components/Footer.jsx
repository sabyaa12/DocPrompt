import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:md-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '> 
        {/* -------- left section --------- */}
        <div>
           <img className='mb-5 w-40' src={assets.logo} alt="" />
           <p className='w-full md:w-2/3 text-gray-600 leading-6'>DocPrompt is your trusted partner in finding experienced doctors and booking appointments seamlessly. We simplify healthcare by connecting you promptly with verified experts to ensure your wellness is always a priority.</p>
        </div>

        {/* -------- mid section --------- */}
        <div>
           <p className='text-xl font-medium mb-5 '>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>HOME</li> 
            <li>About us </li> 
            <li>Contact Us</li> 
            <li>Privacy policy</li> 
           </ul>
        </div>
        
        {/* -------- right section --------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 89276 54321</li>
            <li>contact@docprompt.in</li>
           </ul>
        </div>
</div>
        <div>
            {/* ------- copyright-------*/ }
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 DocPrompt – All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer