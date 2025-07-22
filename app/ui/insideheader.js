'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'

import userFace from "../assets/imagesource/user_face.png";

import { Poppins } from 'next/font/google';

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/AuthSlice';
import { useRouter } from 'next/navigation';
import { getProfile } from '../reducers/ProfileSlice';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Insideheader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { profileData } = useSelector((state) => state?.profile)
  const handleLogout = () => {
    // dispatch(logout())

    try {

      // Dispatch logout action
      dispatch(logout());

      // Navigate to home page
      router.push("/");

      // Force reload to ensure clean state
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: still navigate to home
      router.push("/");
    }

  };
  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <div className='bg-[#FFFFFF] rounded-[10px] py-4 px-6 mb-6'>
      <div className='flex justify-between items-center'>
        <div className='pl-[50px] lg:pl-0'>
          <h1 className='text-2xl font-semibold text-[#313030] ${leagueSpartan.className} mb-1'>Welcome</h1>
          <p className='text-base text-[#686868] ${leagueSpartan.className}'>{profileData?.data?.fullname}</p>
        </div>
        <div>
          <div className='flex'>
            <button onClick={handleLogout} className='mr-4 text-black cursor-pointer'>Logout</button>
            <div className='user_face'>
              <Image src={userFace} alt="userFace" className='rounded-full w-[50px] h-[50px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insideheader