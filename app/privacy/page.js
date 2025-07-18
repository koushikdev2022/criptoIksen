import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import Image from 'next/image';

const page = () => {
  return (
     <div>
      <div className='banner_area p-4 lg:p-0'>
        {/* home banner section start here */}
        <div className="home_banner_area relative">
          <Image src={aboutBanner} alt='aboutBanner' className="" />
          <div className="banner_content_area absolute w-full h-full left-0 top-0">
           <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
               <div className="w-full px-4 pt-24 text-center">
                  <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4">Privacy</h1>
               </div>
           </div>
        </div>
        </div>
      </div>
      {/* Why Choose Us section start here */}
      {/* how in works section start here */}
            {/* Key benefits section start here */}
            <div className="key_benefits_section pt-20 pb-10">
               <div className='max-w-6xl mx-auto'>
                  <p>Content Coming Soon....</p>
               </div>
            </div>
            {/* Key benefits section ends here */}
      {/* how in works section ends here */}

      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page