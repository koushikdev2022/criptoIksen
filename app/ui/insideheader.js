'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'

import userFace from "../assets/imagesource/user_face.png";

import { Poppins } from 'next/font/google';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/AuthSlice';
import { useRouter } from 'next/navigation';
import { getProfile } from '../reducers/ProfileSlice';
import { FaRectangleList } from 'react-icons/fa6';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { BiSolidDashboard } from 'react-icons/bi';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Insideheader = () => {
  const pathname = usePathname();
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
    <div className='bg-[#2B2A2A] rounded-[0px] py-4 px-6 mb-6'>
      <div className='lg:flex justify-between items-center'>
        {/* <div className='pl-[50px] lg:pl-0'>
          <h1 className='text-2xl font-semibold text-[#313030] ${leagueSpartan.className} mb-1'>Welcome</h1>
          <p className='text-base text-[#686868] ${leagueSpartan.className}'>{profileData?.data?.fullname}</p>
        </div> */}
        
      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none">
        {/* <!-- Sidebar Menu --> */}
        <nav className="">
          {/* <!-- Menu Group --> */}
          <div className='header_menu'>
            <ul className="">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link href="/dashboard"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-white duration-300 ease-in-out hover:bg-graydark ${pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {/* <BiSolidDashboard className='text-xl' /> */}
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link href="/my-account"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-white duration-300 ease-in-out hover:bg-graydark ${pathname.includes('my-account') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {/* <FaUser className='text-xl' /> */}
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/plans"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-white duration-300 ease-in-out hover:bg-graydark ${pathname.includes('plans') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  {/* <FaRectangleList className='text-xl' /> */}
                  Plans
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}


            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
        <div>
          <div className='flex justify-end items-center gap-3'>
            {/* <button onClick={handleLogout} className='mr-4 text-black cursor-pointer'>Logout</button> */}
            <p className='text-base text-[#CDCDCD] ${leagueSpartan.className}'>{profileData?.data?.fullname}</p>
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