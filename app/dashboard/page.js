'use client';

import React from 'react'

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { TextInput } from 'flowbite-react';


// import ActivateNewSubscriber from "../assets/imagesource/Activate_New_Subscriber.png";
// import BalanceInfo from "../assets/imagesource/Balance_Info.png";
// import QuerySim from "../assets/imagesource/Query Sim.png";
// import DeactivateSim from "../assets/imagesource/Deactivate_Sim.png";
// import ReactivateSim from "../assets/imagesource/Reactivate_Sim.png";
// import AddWFC from "../assets/imagesource/Add_WFC.png";
// import E911Address from "../assets/imagesource/E911_Address.png";
// import GetCoverageInfo from "../assets/imagesource/Get_Coverage-Info.png";
// import purchasePlan from "../assets/imagesource/purchase_plan.png";
// import changePlan from "../assets/imagesource/change_plan.png";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Page = () => {
  return (
    <div className={`${poppins.className} antialiased`}>
      <div className='flex justify-between items-center mb-10'>
        <div>
          <h2 className='text-3xl'>Dashboard</h2>
        </div>
        <div className='dashboard_search_section w-6/12'>
          <div className="bg-white border border-[#C2C2C2] rounded-md p-0 flex gap-4 items-center w-full">
            <TextInput placeholder="Search token or asset" id="base" type="text" sizing="md" className='w-full' />
            <button><IoSearchOutline className="text-xl mx-4 text-[#727272s]" /></button>
          </div>
        </div>
      </div>
      <div className='bg-white p-6 rounded-xl'>
        Dashboard content
      </div>
    </div>
  )
}

export default Page;