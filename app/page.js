'use client';

import Image from "next/image";

import bannerImg from "../app/assets/imagesource/banner_img.png";
import banner01 from "../app/assets/imagesource/banner01.png";
import howItWorksImg from "../app/assets/imagesource/how_it_works_img.png";
import hw01 from "../app/assets/imagesource/hw01.png";
import hw02 from "../app/assets/imagesource/hw02.png";
import hw03 from "../app/assets/imagesource/hw03.png";
import hw04 from "../app/assets/imagesource/hw04.png";

import bitCoinIcon from "../app/assets/imagesource/bit_coin_icon.png";
import etherum_icon from "../app/assets/imagesource/etherum_icon.png";
import x_coins_icon from "../app/assets/imagesource/x_coins_icon.png";
import Tether_icon from "../app/assets/imagesource/Tether_icon.png";
import bn_binance_coin_icon from "../app/assets/imagesource/bn_binance_coin_icon.png";
import solana_coin from "../app/assets/imagesource/solana_coin.png";
import usdc_icon from "../app/assets/imagesource/usdc_icon.png";

import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import Link from "next/link";

import { Poppins } from 'next/font/google';
import Testimonial from "./testimonial/page";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5"
import { IoMdSave } from "react-icons/io";
import { MdTipsAndUpdates } from "react-icons/md";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Select, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlans } from "./reducers/PlanSlice";
import { features } from "process";
import { getCoins } from "./reducers/CoinSlice";
import { useRouter } from "next/navigation";




const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'], // specify desired weights
   display: 'swap',
});


export default function Home() {
   const { plans } = useSelector((state) => state?.planst)
   const { coins } = useSelector((state) => state?.coinData)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState('USD');
   const [selectedCoin, setSelectedCoin] = useState('');
   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const router = useRouter();

   useEffect(() => {
      dispatch(getPlans())
   }, [])
   console.log("plan", plans);
   useEffect(() => {
      dispatch(getCoins())
   }, [])
   console.log("coinsd", coins)
   // const coinItems = coins?.coins?.map((coin) => coin.item) || [];

   // // Your filtering logic looks correct
   // const filteredCoins = coinItems.filter((coin) =>
   //    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
   // );

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
   // const handleTryForFree = async () => {
   //    console.log("select currency", selectedCoinSymbol);
   //    console.log("select coin symbol", selectedCoinSymbol);
   //    // router.push("/details")

   //    router.push({
   //       pathname: '/details',
   //       query: {
   //          coin: selectedCoinSymbol,
   //          currency: selectedCurrency
   //       }
   //    });



   // };
   useEffect(() => {
      console.log("currency", selectedCurrency);
   }, [selectedCurrency])


   return (
      <div className={`${poppins.variable} antialiased home_wrapper_arera`}>

         {/* home banner section start here */}
         <div className="home_banner_area relative">
            <Image src={bannerImg} alt='bannerImg' className='w-full hidden lg:block' />
            <div className="banner_content_area lg:absolute w-full h-full left-0 top-0">
               <div className='max-w-6xl mx-auto lg:flex justify-center items-center h-full'>
                  <div className="lg:w-6/12 px-4 pt-24">
                     <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-2 lg:mb-4">Smarter <span>Crypto</span> Decisions, Powered by <span>AI</span>.</h1>
                     <p className="text-[#4C4B4B] text-sm lg:text-[16px] leading-[24px] mb-5 lg:mb-4">
                        Get real-time crypto analysis, buy/sell recommendations, and track market confidence — all from one intuitive dashboard.
                     </p>
                     <div className="banner_search_area mb-6 flex gap-4 w-10/12">
                        <div className="bg-white border border-[#C2C2C2] rounded-md p-0 flex gap-4 items-center w-10/12">
                           <IoSearchOutline className="text-xl ml-4 text-[#727272s]" />
                           <TextInput placeholder="Search token or asset" id="base" type="text" sizing="md" value={searchTerm}
                              onChange={(e) => { setSearchTerm(e.target.value); setShowDropdown(true); }} />
                        </div>
                        <div className="w-2/12">
                           <Select required value={selectedCurrency}
                              onChange={(e) => setSelectedCurrency(e.target.value)}>
                              <option value="USD">USD</option>
                              <option value="EURO">EURO</option>
                           </Select>
                        </div>
                     </div>
                     {(showDropdown && searchTerm.trim() !== "") && (
                        <ul className="bg-white rounded-md shadow p-4">
                           {filteredCoins.length > 0 ? (
                              filteredCoins.map((coin) => (
                                 <li key={coin.coin_id} className="border-b py-2 last:border-0" onClick={() => handleCoinSelect(coin)}>
                                    <div className="font-semibold">{coin.name}</div>
                                    <div className="text-sm text-gray-500">Symbol: {coin.symbol}</div>
                                 </li>
                              ))
                           ) : (
                              <li className="text-gray-500">No tokens found.</li>
                           )}
                        </ul>
                     )}
                     <div className="inline-block rounded-[5px]">
                        <Link className="text-white hover:text-[#04cf6b] bg-[#046D78] items-center cursor-pointer inline-flex gap-2 font-semibold text-xs lg:text-base rounded-[5px] px-3 py-1.5 lg:px-8 lg:py-3 shadow-md"
                           href={{ pathname: 'details', query: { currency: selectedCurrency, symbol: selectedCoinSymbol, name: selectedCoin } }}
                        >
                           Try for Free <FaArrowRightLong />
                        </Link>
                     </div>
                  </div>
                  <div className="lg:w-6/12">
                     <Image src={banner01} alt='banner01' className='mb-[-129px]' />
                  </div>
               </div>
            </div>
         </div>
         {/* home banner section ends here */}

         {/* Key benefits section start here */}
         <div className="key_benefits_section px-4 pt-20 lg:pb-10">
            <div className='max-w-6xl mx-auto'>
               <h2 className="lg:text-[60px] lg:leading-[70px] text-black font-bold mb-2 lg:mb-6 text-center">Key <span>Benefits</span></h2>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-[#fbfafa] shadow-xl rounded-[10px] px-5 py-8 text-center">
                     <div className="flex justify-center items-center mb-3">
                        <IoSearchOutline className="text-5xl" />
                     </div>
                     <h3 className="text-[#083991] text-xl mb-2">Analyze Any Coin</h3>
                     <p className="text-[#8E8E8E] text-sm">Instantly check market signals and get AI-driven insights.</p>
                  </div>
                  <div className="bg-[#fbfafa] shadow-xl rounded-[10px] px-5 py-8 text-center">
                     <div className="flex justify-center items-center mb-3">
                        <MdTipsAndUpdates className="text-5xl" />
                     </div>
                     <h3 className="text-[#083991] text-xl mb-2">AI-Powered Trading Tips</h3>
                     <p className="text-[#8E8E8E] text-sm">Personalized buy/sell ranges with confidence levels.</p>
                  </div>
                  <div className="bg-[#fbfafa] shadow-xl rounded-[10px] px-5 py-8 text-center">
                     <div className="flex justify-center items-center mb-3">
                        <IoMdSave className="text-5xl" />
                     </div>
                     <h3 className="text-[#083991] text-xl mb-2">Save Your Search History</h3>
                     <p className="text-[#8E8E8E] text-sm">Track your past queries and strategies over time.</p>
                  </div>
               </div>
            </div>
         </div>
         {/* Key benefits section ends here */}

         {/* how in works section start here */}
         <div className="how_it_works_section px-4 lg:px-0 py-10 lg:py-24">
            <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
               <div className="lg:flex gap-20">
                  <div className="lg:w-6/12">
                     <Image src={howItWorksImg} alt='howItWorksImg' className='' />
                  </div>
                  <div className="lg:w-6/12 flex justify-center items-center">
                     <div>
                        <h2 className="text-2xl lg:text-[60px] lg:leading-[70px] text-black font-bold mb-2 lg:mb-6">How It <span>Works</span></h2>
                        <p className="text-[#4C4B4B] text-sm lg:text-[18px]">We analyze live crypto data using AI to predict market trends and deliver clear, actionable signals—so you can trade smarter and faster.</p>
                        <div className="my-7">
                           <div className="flex gap-4 mb-6">
                              <div className="w-[48px]">
                                 <Image src={hw01} alt='hw01' className='' />
                              </div>
                              <div>
                                 <p className="text-base leading-[20px] lg:text-[18px] lg:leading-[30px] text-black font-medium mb-0">Search any coin</p>
                                 <p className="text-sm lg:text-base leading-[20px] text-[#4C4B4B] mb-0">Type in the coin symbol (e.g., BTC) and hit search.</p>
                              </div>
                           </div>
                           <div className="flex gap-4 mb-6">
                              <div className="w-[60px]">
                                 <Image src={hw02} alt='hw02' className='' />
                              </div>
                              <div>
                                 <p className="text-base leading-[20px] lg:text-[18px] lg:leading-[30px] text-black font-medium mb-0">Let AI analyze it</p>
                                 <p className="text-sm lg:text-base leading-[20px] text-[#4C4B4B] mb-0">Our backend fetches data, runs technical models, and generates insights.</p>
                              </div>
                           </div>
                           <div className="flex gap-4 mb-6">
                              <div className="w-[60px]">
                                 <Image src={hw03} alt='hw03' className='' />
                              </div>
                              <div>
                                 <p className="text-base leading-[20px] lg:text-[18px] lg:leading-[30px] text-black font-medium mb-0">View results</p>
                                 <p className="text-sm lg:text-base leading-[20px] text-[#4C4B4B] mb-0">Get price, buy/sell recommendations, and market confidence levels.</p>
                              </div>
                           </div>
                           <div className="flex gap-4 mb-6">
                              <div className="w-[60px]">
                                 <Image src={hw04} alt='hw04' className='' />
                              </div>
                              <div>
                                 <p className="text-base leading-[20px] lg:text-[18px] lg:leading-[30px] text-black font-medium mb-0">Make informed decisions</p>
                                 <p className="text-sm lg:text-base leading-[20px] text-[#4C4B4B] mb-0">See what you&apos;sve searched and how each coin performed later.</p>
                              </div>
                           </div>
                           <div className="inline-block rounded-[5px] mt-6">
                              <Link className="text-white hover:text-[#04cf6b] bg-[#046D78] items-center cursor-pointer inline-flex gap-2 font-semibold text-xs lg:text-sm rounded-[5px] px-5 py-2 lg:px-7 lg:py-3 shadow-md" href="/how-it-works" passHref>
                                 Learn More
                              </Link>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* how in works section ends here */}


         {/* prediction section start here */}

         <div className="prediction_section">
            <div className='max-w-6xl mx-auto px-4 lg:px-0'>
               <h2 className="text-2xl lg:text-[60px] lg:leading-[70px] text-white font-bold mb-2 lg:mb-6">Cryptocurrency Price Predictions</h2>
               <p className="text-[#ffffff] text-sm lg:text-[18px] lg:leading-[30px] font-normal mb-8 lg:mb-12">At <strong>CryptoIntiuit</strong> we provide daily, monthly and yearly predictions for over 8 000 cryptocurrencies. All predictions on the website represent a possible price development of cryptocurrencies, but they are just predictions, not trading signals or any recommendations. Always do your due diligence before investing.</p>
               <div className="bg-white shadow-xl rounded-[20px] lg:px-15 lg:py-10 px-5 py-5">
                  <h3 className="text-[#023F9B] text-xl leading-[30px] font-medium mb-5">Cryptointiuit Predictions</h3>
                  <div>
                     <div className="overflow-x-auto">
                        <Table>
                           <TableHead>
                              <TableRow>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">#</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">Name</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">Price</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">24h %</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">Market Cap</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">Volume(24h)</TableHeadCell>
                                 <TableHeadCell className="text-[#1660D0] text-[12px] leading-[18px] font-medium bg-white">7d Forecasts</TableHeadCell>
                              </TableRow>
                           </TableHead>
                           <TableBody className="divide-y">
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">1</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={bitCoinIcon} alt='bitCoinIcon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">Bitcoin</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">BTC</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#FB1818] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">2</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={etherum_icon} alt='etherum_icon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">Ethereum</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">ETH</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#FB1818] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">3</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={x_coins_icon} alt='x_coins_icon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">XRP</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">XRP</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#FB1818] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">4</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={Tether_icon} alt='Tether_icon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">Tether</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">USDT</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#FB1818] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">5</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={bn_binance_coin_icon} alt='bn_binance_coin_icon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">BNB</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">BNB</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">6</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={solana_coin} alt='solana_coin' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">Solana</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">SOL</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#FB1818] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                              <TableRow className="bg-white">
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">7</TableCell>
                                 <TableCell>
                                    <div className="flex items-center gap-2">
                                       <div>
                                          <Image src={usdc_icon} alt='usdc_icon' className='' />
                                       </div>
                                       <div>
                                          <p className="text-[#263238] text-[14px] leading-[18px] font-medium">USDC</p>
                                          <p className="text-[#9D9E9E] text-[11px] leading-[18px] font-medium">USDC</p>
                                       </div>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$116,747</TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">-3.06%</TableCell>
                                 <TableCell className="text-[#263238] text-[12px] leading-[18px] font-medium">$2,343,537,349,011</TableCell>
                                 <TableCell>
                                    <div>
                                       <p className="text-[#263238] text-[12px] leading-[18px] font-medium">$75,168,213,332</p>
                                       <p className="text-[#8E8E8E] text-[12px] leading-[18px] font-medium">638,344.133 BTC</p>
                                    </div>
                                 </TableCell>
                                 <TableCell className="text-[#42AE29] text-[12px] leading-[18px] font-medium">1.92%</TableCell>
                              </TableRow>
                           </TableBody>
                        </Table>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* prediction section ends here */}


         {/* Purchase section start here */}
         <div className="purchase_section py-8 lg:py-20">
            <div className='max-w-6xl mx-auto'>
               <div className="text-center mb-10 lg:mb-14">
                  <h2 className="text-2xl lg:text-[60px] lg:leading-[70px] text-black font-bold mb-2 lg:mb-6">Purchase a <span>subscription</span></h2>
                  <p className="text-[#4C4B4B] text-base lg:text-[18px] leading-[30px] lg:px-32">Simple, Transparent Pricing</p>
               </div>
               <div className="subscription_tab_section">
                  <Tabs>
                     <TabList>
                        <Tab>Monthly</Tab>
                        <Tab>Yearly </Tab>
                     </TabList>

                     <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white rounded-4xl p-5 mx-4 lg:mx-0">
                           {
                              plans?.data?.map((planDatas, index) => {
                                 return (
                                    <>
                                       {
                                          index % 2 == 0 ? (
                                             <>
                                                <div className="pt-5" key={index}>
                                                   <div className="py-8 px-1">
                                                      <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">{planDatas?.plan_name}</h3>
                                                      <div className="flex items-center gap-2 mb-8">
                                                         <p className="text-[#1D2127] text-[36px] leading-[36px] font-extrabold">${planDatas?.price}</p>
                                                         <div>
                                                            <p className="text-[#cbced1] text-[12px] leading-[16px]">/month</p>
                                                         </div>
                                                      </div>
                                                      <div className="mb-16">
                                                         <div>
                                                            {
                                                               planDatas?.plan_features?.map((features) => {
                                                                  return (
                                                                     <>
                                                                        <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> {features}</div>
                                                                     </>
                                                                  )
                                                               })
                                                            }

                                                            {/* <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> real-time analysis</div> */}
                                                         </div>
                                                      </div>
                                                      <div className="mt-[120px]">
                                                         <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                                      </div>
                                                   </div>
                                                </div>
                                             </>
                                          ) : (
                                             <>
                                                <div className="most_popular_bg border-[10px] border-[#8ac6b1] rounded-4xl p-4" key={index}>
                                                   <div className="">
                                                      <div className="pt-2 px-1">
                                                         <div className="flex justify-between items-center pb-6">
                                                            <h3 className="text-[19px] text-[#F3F3F3] font-medium"> {planDatas?.plan_name}</h3>
                                                            <div className="text-[12px] font-medium rounded-md leading-[30px] text-[#023F9B] px-4 bg-white">
                                                               Most Popular
                                                            </div>
                                                         </div>
                                                         <div className="flex items-center gap-2 mb-8">
                                                            <p className="text-[#ffffff] text-[36px] leading-[36px] font-extrabold">${planDatas?.price}</p>
                                                            <div>
                                                               <p className="text-[#F3F3F3] text-[12px] leading-[16px]">/month</p>
                                                            </div>
                                                         </div>
                                                         <div className="mb-16">
                                                            <div>
                                                               {
                                                                  planDatas?.plan_features?.map((fet) => {
                                                                     return (
                                                                        <>
                                                                           <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> {fet}</div>
                                                                        </>
                                                                     )
                                                                  })
                                                               }

                                                               {/* <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> real-time analysis</div>
                                                               <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> priority analysis</div>
                                                               <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> 10 searches</div> */}
                                                            </div>
                                                         </div>
                                                         <div>
                                                            <button className="bg-[#013859] hover:bg-[#52A8CD] text-[#F3F3F3] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </>
                                          )
                                       }
                                    </>
                                 )
                              })
                           }

                           {/* <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Free</h3>
                                 <div className="flex items-center gap-2 mb-8">
                                    <p className="text-[#1D2127] text-[36px] leading-[36px] font-extrabold">$0</p>
                                    <div>
                                       <p className="text-[#cbced1] text-[12px] leading-[16px]">/month</p>
                                    </div>
                                 </div>
                                 <div className="mb-16">
                                    <div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> 2 searches/day</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> real-time analysis</div>
                                    </div>
                                 </div>
                                 <div className="mt-[120px]">
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                 </div>
                              </div>
                           </div> */}
                           {/* <div className="most_popular_bg border-[10px] border-[#8ac6b1] rounded-4xl p-4">
                              <div className="">
                                 <div className="pt-2 px-6">
                                    <div className="flex justify-between items-center pb-6">
                                       <h3 className="text-[19px] text-[#F3F3F3] font-medium">Pro</h3>
                                       <div className="text-[12px] font-medium rounded-md leading-[30px] text-[#023F9B] px-4 bg-white">
                                          Most Popular
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-8">
                                       <p className="text-[#ffffff] text-[36px] leading-[36px] font-extrabold">$10</p>
                                       <div>
                                          <p className="text-[#F3F3F3] text-[12px] leading-[16px]">/month</p>
                                       </div>
                                    </div>
                                    <div className="mb-16">
                                       <div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> Unlimited searches</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> real-time analysis</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> priority analysis</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> 10 searches</div>
                                       </div>
                                    </div>
                                    <div>
                                       <button className="bg-[#013859] hover:bg-[#52A8CD] text-[#F3F3F3] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                           {/* <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Premium</h3>
                                 <div className="flex items-center gap-2 mb-8">
                                    <p className="text-[#1D2127] text-[36px] leading-[36px] font-extrabold">$100</p>
                                    <div>
                                       <p className="text-[#cbced1] text-[12px] leading-[16px]">/month</p>
                                    </div>
                                 </div>
                                 <div className="mb-16">
                                    <div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> Unlimited searches</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> real-time analysis</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> priority analysis</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> 120 searches</div>
                                    </div>
                                 </div>
                                 <div>
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                 </div>
                              </div>
                           </div> */}
                           <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Enterprise</h3>

                                 <div className="mt-[240px]">
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Discuss with us</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white rounded-4xl p-5 mx-4 lg:mx-0">
                           <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Free</h3>
                                 <div className="flex items-center gap-2 mb-8">
                                    <p className="text-[#1D2127] text-[36px] leading-[36px] font-extrabold">$0</p>
                                    <div>
                                       <p className="text-[#cbced1] text-[12px] leading-[16px]">/month</p>
                                    </div>
                                 </div>
                                 <div className="mb-16">
                                    <div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> 2 searches/day</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> real-time analysis</div>
                                    </div>
                                 </div>
                                 <div className="mt-[120px]">
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                 </div>
                              </div>
                           </div>
                           <div className="most_popular_bg border-[10px] border-[#8ac6b1] rounded-4xl p-4">
                              <div className="">
                                 <div className="pt-2 px-6">
                                    <div className="flex justify-between items-center pb-6">
                                       <h3 className="text-[19px] text-[#F3F3F3] font-medium">Pro</h3>
                                       <div className="text-[12px] font-medium rounded-md leading-[30px] text-[#023F9B] px-4 bg-white">
                                          Most Popular
                                       </div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-8">
                                       <p className="text-[#ffffff] text-[36px] leading-[36px] font-extrabold">$10</p>
                                       <div>
                                          <p className="text-[#F3F3F3] text-[12px] leading-[16px]">/month</p>
                                       </div>
                                    </div>
                                    <div className="mb-16">
                                       <div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> Unlimited searches</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> real-time analysis</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> priority analysis</div>
                                          <div className="flex gap-1 text-[#F3F3F3] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#52A8CD] text-xl" /> 10 searches</div>
                                       </div>
                                    </div>
                                    <div>
                                       <button className="bg-[#013859] hover:bg-[#52A8CD] text-[#F3F3F3] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Premium</h3>
                                 <div className="flex items-center gap-2 mb-8">
                                    <p className="text-[#1D2127] text-[36px] leading-[36px] font-extrabold">$100</p>
                                    <div>
                                       <p className="text-[#cbced1] text-[12px] leading-[16px]">/month</p>
                                    </div>
                                 </div>
                                 <div className="mb-16">
                                    <div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> Unlimited searches</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> real-time analysis</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> priority analysis</div>
                                       <div className="flex gap-1 text-[#393d42] text-[14px] mb-2"><IoIosCheckmarkCircle className="text-[#bfc4c7] text-xl" /> 120 searches</div>
                                    </div>
                                 </div>
                                 <div>
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Choose Plan</button>
                                 </div>
                              </div>
                           </div>
                           <div className="pt-5">
                              <div className="py-8 px-6">
                                 <h3 className="text-[19px] text-[#1D2127] pb-6 font-medium">Enterprise</h3>

                                 <div className="mt-[240px]">
                                    <button className="bg-[#EBFFFC] hover:bg-[#055346] text-[#055346] hover:text-[#EBFFFC] text-[16px] leading-[40px] rounded-md w-full block cursor-pointer">Discuss with us</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </TabPanel>
                  </Tabs>
               </div>
            </div>
         </div>
         {/* Purchase section ends here */}


         {/* Testimonials section start here */}
         <div className="testimonials_section lg:pt-20 lg:pb-15 pt-10 pb-5 px-4 lg:px-0">
            <div className='max-w-[1400px] mx-auto'>
               <div className="text-center mb-4">
                  <h2 className="text-2xl lg:text-[60px] lg:leading-[70px] text-black font-bold mb-2 lg:mb-10">What the people Say <span>about us</span></h2>
                  <Testimonial />
               </div>
            </div>
         </div>
         {/* Testimonials section ends here */}


      </div>

   );
}
