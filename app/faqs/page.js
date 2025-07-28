import Link from 'next/link'
import React from 'react'

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import About_us from "../assets/imagesource/About_us.png";
import Image from 'next/image';

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

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
                  <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4">FAQ<span>s</span></h1>
               </div>
           </div>
        </div>
        </div>
      </div>
            {/* Why Choose Us section start here */}
      <div className="about_section">
        <div className="accordian_section max-w-6xl mx-auto lg:py-4 px-4 lg:px-0">
          <Accordion>
            <AccordionPanel>
                <AccordionTitle>Lorem Ipsum is simply dummy...</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Lorem Ipsum is simply dummy...</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
                <AccordionTitle>Lorem Ipsum is simply dummy...</AccordionTitle>
                <AccordionContent className="accodian_cont">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
        </div>
      </div>
      {/* Why Choose Us section ends here */}
    </div>
  )
}

export default page