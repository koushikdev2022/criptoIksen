'use client';

import React from 'react'

import Slider from "react-slick";

import testi_face from "../assets/imagesource/testi_face.png";
import quote_icon from "../assets/imagesource/quote_icon.png";
import Image from 'next/image';

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  };
  return (
    <div>
        <Slider {...settings}>
            <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Ava S.</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Retail Trader</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>“CryptoIntuit saved me hours of research every week!”</p>
                    </div>
                </div>
            </div>
            <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Emily Smith</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Marketing Manager</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>This platform is incredibly intuitive and efficient</p>
                    </div>
                </div>
            </div>
             <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Emily Smith</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Marketing Manager</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>This platform is incredibly intuitive and efficient</p>
                    </div>
                </div>
            </div>
             <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Emily Smith</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Marketing Manager</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>This platform is incredibly intuitive and efficient</p>
                    </div>
                </div>
            </div>
             <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Emily Smith</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Marketing Manager</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>This platform is incredibly intuitive and efficient</p>
                    </div>
                </div>
            </div>
             <div className='px-2 pb-4'>
                <div className='bg-white rounded-xl p-6 shadow-lg text-left'>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='flex gap-2 items-center justify-center'>
                            <div><Image src={testi_face} alt='testi_face' className='w-[40px] h-[40px] rounded-full' /></div>
                            <div>
                                <p className='text-[18px] leading-[20px] text-[#343434]'>Emily Smith</p>
                                <p className='text-[12px] leading-[18px] text-[#6B6B6B]'>Marketing Manager</p>
                            </div>
                        </div>
                        <div>
                            <Image src={quote_icon} alt='quote_icon' className='' />
                        </div>
                    </div>
                    <div>
                        <p className='text-[13px] text-gray-500'>This platform is incredibly intuitive and efficient</p>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Testimonial