import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import About_us from "../assets/imagesource/About_us.png";
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className='banner_area p-4 lg:p-0'>
        {/* home banner section start here */}
        <div className="home_banner_area relative">
          <Image src={aboutBanner} alt='aboutBanner' className="hidden lg:block" />
          <Image src={bannerImg} alt='bannerImg' className="block lg:hidden" />
          <div className="banner_content_area absolute w-full h-full left-0 top-0">
           <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
               <div className="w-full px-4 pt-14 lg:pt-24 text-center">
                  <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4">About <span>Us</span></h1>
                  <p className="text-[#4C4B4B] text-sm lg:text-[18px] leading-[24px] mb-5 lg:mb-4">Built for Traders, by Traders (and AI Geeks)</p>
               </div>
           </div>
        </div>
        </div>
      </div>
      {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <div className="lg:flex">
            <div className="lg:w-6/12 mb-4 lg:mb-0">
              <Image src={About_us} alt='About_us' className="" />
            </div>
            <div className="lg:w-6/12 lg:pl-10 flex justify-center items-center">
              <div>
                <p className="text-[#69697B] font-medium text-sm leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4">CryptoIntuit was born from the frustration of digging through data and charts. We built a platform that does the heavy lifting for you — so you can make faster, smarter decisions with clarity.</p>
                <h2 className="text-[#0B0B2C] text-xl lg:text-3xl lg:leading-[50px] font-extrabold capitalize pb-0">Mission</h2>
                <p className="text-[#69697B] font-medium text-sm leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4">Democratize crypto trading insights.</p>
                <h2 className="text-[#0B0B2C] text-xl lg:text-3xl lg:leading-[50px] font-extrabold capitalize pb-0">Vision</h2>
                <p className="text-[#69697B] font-medium text-sm leading-[24px] lg:text-[18px] lg:leading-[28px] pb-4">Become the AI co-pilot for every crypto investor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page