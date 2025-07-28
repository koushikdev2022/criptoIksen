'use client';

import React from 'react'

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

import { FaFacebook } from "react-icons/fa6";

import footerLogo from "../assets/imagesource/footer_logo.png";
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Footer = () => {
  return (
    <div className='bg-[#002F27]'>
      
      <div className='footer_top lg:pt-16 lg:pb-0 pt-10 pb-0 px-6 lg:px-0'>
        <div className='max-w-6xl mx-auto'>
           <div className='footer_top_container lg:flex gap-20'>
              <div className='lg:w-4/12 mb-6 lg:mb-0 text-center lg:text-left'>
                <Image src={footerLogo} alt='footerLogo' className='inline-block w-4/12 mb-3' />
                <p className='text-xs leading-[20px] text-white font-normal'>CryptoIntuit was born from the frustration of digging through data and charts. We built a platform that does the heavy lifting for you — so you can make faster, smarter decisions with clarity. </p>
              </div>
              <div className='lg:w-8/12 lg:flex'>
                 <div className='lg:w-6/12 text-center lg:text-left mb-6 lg:mb-0'>
                    <h3 className='text-xl text-white font-semibold pb-5'>Quick Links</h3>
                    <div className='footer_top_menu_sec'>
                      <ul className=''>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/" passHref>Home</Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/features" passHref>Features</Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/pricing" passHref>Pricing</Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/contact" passHref>Contact</Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/faqs" passHref>FAQs</Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#04cf6b] text-sm' href="/privacy" passHref>Privacy</Link></li>
                      </ul>
                    </div>
                 </div>
                 <div className='lg:w-6/12 text-center lg:text-left mb-6 lg:mb-0'>
                    <h3 className='text-xl text-white font-semibold pb-5'>Social media</h3>
                    <div className='footer_top_menu_sec'>
                      <ul className='flex lg:justify-start justify-center gap-3'>
                        <li className='mb-1'><Link className='text-white hover:text-[#0866ff] text-2xl' href="#" passHref><FaFacebook /></Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#000000] text-2xl' href="#" passHref><BsTwitterX /></Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#007ab5] text-3xl' href="#" passHref><BiLogoLinkedin/></Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#ff0033] text-3xl' href="#" passHref><BsYoutube/></Link></li>
                        <li className='mb-1'><Link className='text-white hover:text-[#6729f3] text-3xl' href="#" passHref><AiFillInstagram /></Link></li>
                      </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className='text-center py-6 lg:mt-20 border-t border-[#005354]'>
          <p className='text-sm text-white'>Copyright © CryptoIntuit 2025</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer