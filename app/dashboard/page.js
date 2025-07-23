'use client';

import React, { useEffect, useState } from 'react'

import { Poppins } from 'next/font/google';
import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { Select, Table, TextInput, TableBody, TableCell, TableHead, TableHeadCell, TableRow  } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getCoins } from '../reducers/CoinSlice';
import { FaArrowRightLong } from 'react-icons/fa6';



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
  const { coins } = useSelector((state) => state?.coinData)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState('USD');
   const [selectedCoin, setSelectedCoin] = useState('');
   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const router = useRouter();
   useEffect(() => {
      dispatch(getCoins())
   }, [])
   console.log("coinsd", coins)
 

   const coinItems = Array.isArray(coins?.coins)
      ? coins.coins.map((coin) => coin.item).filter(Boolean)
      : [];

   // Filter coins based on search term
   const filteredCoins = coinItems.filter((coin) =>
      coin?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
   );


   const handleCoinSelect = (coin) => {
      console.log(coin, "coin");

      setSelectedCoin(coin.name);
      setSelectedCoinSymbol(coin.symbol.toLowerCase());
      // setSearchTerm(''); // Clear search after selection
      setSearchTerm(coin.name);
      setShowDropdown(false);

   };
  


  return (
    <div className={`${poppins.className} antialiased`}>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-3xl'>Dashboard</h2>
        </div>
      </div>
      <div className='lg:flex gap-6'>
        <div className='bg-white p-6 rounded-xl lg:w-6/12 mb-4 lg:mb-0'>
           <p className='text-[16px] leading-[26px] text-[#000000] font-medium mb-4'>Search Token</p>
           <div className="lg:w-full px-0 pt-0">
            <div className="relative">
              <div className="banner_search_area mb-6 flex gap-4 lg:w-full">
                  <div className="bg-white border border-[#C2C2C2] rounded-md p-0 flex gap-4 items-center w-9/12 lg:w-10/12">
                    <IoSearchOutline className="text-xl ml-4 text-[#727272s]" />
                    <TextInput placeholder="Search token or asset" id="base" type="text" sizing="md" value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setShowDropdown(true); }} />
                  </div>
                  <div className="w-3/12 lg:w-2/12">
                    <Select required value={selectedCurrency}
                        onChange={(e) => setSelectedCurrency(e.target.value)}>
                        <option value="USD">USD</option>
                        <option value="EURO">EURO</option>
                    </Select>
                  </div>
              </div>
              <div className="absolute left-0 top-[48px] w-[245px] lg:w-[365px]">
                  {(showDropdown && searchTerm.trim() !== "") && (
                    <ul className="bg-white rounded-md shadow p-0">
                        {filteredCoins.length > 0 ? (
                          filteredCoins.map((coin) => (
                              <li key={coin.coin_id} className="border-b border-[#dfdfdf] py-2 last:border-0 cursor-pointer px-4" onClick={() => handleCoinSelect(coin)}>
                                <div className="text-[#046d78] text-sm leading-[30px] font-semibold">{coin.name}</div>
                                <div className="text-xs text-gray-500">Symbol: {coin.symbol}</div>
                              </li>
                          ))
                        ) : (
                          <li className="text-gray-500">No tokens found.</li>
                        )}
                    </ul>
                  )}
              </div>
            </div>
            <div className="inline-block rounded-[5px]">
              <Link className="text-white hover:text-[#04cf6b] bg-[#046D78] items-center cursor-pointer inline-flex gap-2 font-semibold text-xs lg:text-base rounded-[5px] px-5 py-2 lg:px-8 lg:py-3 shadow-md"
                  href={{ pathname: 'details', query: { currency: selectedCurrency, symbol: selectedCoinSymbol, name: selectedCoin } }}
              >
                  View Prediction <FaArrowRightLong />
              </Link>
            </div>
        </div>
        </div>
        <div className='bg-white p-6 rounded-xl lg:w-6/12'>
         <p className='text-[16px] leading-[26px] text-[#000000] font-medium mb-4'>Search History</p>
          <Table>
              <TableHead>
                <TableRow>
                    <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium !bg-white">#</TableHeadCell>
                    <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium !bg-white">Name</TableHeadCell>
                    <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium !bg-white">Entry Price</TableHeadCell>
                    <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium !bg-white">Take Profit</TableHeadCell>
                    <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium !bg-white">Analysis Date</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white">
                    <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">1</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        
                          <div>
                            <p className="text-[#263238] text-[14px] leading-[18px] font-medium">Bitcoin</p>
                            <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">BTC</p>
                          </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                    <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                    <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">10-08-25</TableCell>
                </TableRow>
              </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Page;