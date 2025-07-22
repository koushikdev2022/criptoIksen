'use client';

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsDetails } from "../reducers/CoinSlice";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { Spinner } from "flowbite-react";
import TradingViewCandle from "./TradingView";
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // specify desired weights
    display: 'swap',
});
const page = () => {
    const { coinsDatas, loading } = useSelector((state) => state?.coinData)
    const searchParams = useSearchParams()
    console.log("searchParams", searchParams);
    const currency = searchParams.get("currency")
    const symbol = searchParams.get("symbol")
    const name = searchParams.get("name")
    console.log("currency", currency, symbol);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoinsDetails({ crypto_name: symbol, currency: currency }))
    }, [currency, symbol])
    console.log("coinsDatas", coinsDatas);

    return (

        <div>
            <div className='banner_area p-4 lg:p-0'>
                {/* home banner section start here */}
                <div className="home_banner_area relative">
                    <Image src={aboutBanner} alt='aboutBanner' className="hidden lg:block" />
                    <Image src={bannerImg} alt='bannerImg' className="block lg:hidden" />
                    <div className="banner_content_area absolute w-full h-full left-0 top-0">
                        <div className='max-w-6xl mx-auto flex justify-center items-center h-full'>
                            <div className="w-full px-0 pt-14 lg:pt-24 text-center">
                                <h1 className="text-xl leading-[24px] lg:text-[60px] lg:leading-[60px] text-black font-bold mb-0 lg:mb-4">Coin <span>Details</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="how_it_works_section py-4 px-4 lg:px-0 lg:py-24">

                <div className="max-w-6xl mx-auto">

                    {
                        loading ?
                            <div className="flex justify-center items-center">
                                <Spinner aria-label="Default status example" />
                            </div>
                            :
                            <div className={`${poppins.variable} antialiased home_wrapper_arera`}>
                                <div className="p-6 bg-white rounded-md mt-0">
                                    <div className="text-2xl lg:text-3xl font-bold text-gray-800">
                                        {name}  <span className="text-gray-500 uppercase">({symbol})</span>
                                    </div>
                                    <TradingViewCandle symbol={coinsDatas?.symbol || symbol} />
                                    <div className="mt-14"> <h5>Spot Recommendations </h5></div>
                                    <div> <h5>Short Term </h5></div>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">

                                        <div>Action: <span className="text-green-600">{coinsDatas?.spot_recommendations?.short_term?.action}</span></div>
                                        <div>Entry Price: <span className="text-black">{currency == "USD" ? "$" : "€"}  {coinsDatas?.spot_recommendations?.short_term?.entry_price}</span></div>
                                        <div>Take Profit: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.spot_recommendations?.short_term?.take_profit}</span></div>
                                    </div>
                                    <div>Analysis:<span> {coinsDatas?.spot_recommendations?.short_term?.rationale?.sentiment_analysis}</span></div>
                                    {/* <div className="mt-4 flex gap-4">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Buy {symbol}</button>
                                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 cursor-pointer">Trade now</button>
                                    </div> */}



                                    <div className="mt-3"> <h5>Long Term </h5></div>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">

                                        <div>Action: <span className="text-green-600">{coinsDatas?.spot_recommendations?.long_term?.action}</span></div>
                                        <div>Entry Price: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.spot_recommendations?.long_term?.entry_price}</span></div>
                                        <div>Take Profit: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.spot_recommendations?.long_term?.take_profit}</span></div>
                                    </div>
                                    <div>Analysis:<span> {coinsDatas?.spot_recommendations?.long_term?.rationale?.sentiment_analysis}</span></div>
                                    {/* <div className="mt-4 flex gap-4">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Buy {symbol}</button>
                                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 cursor-pointer">Trade now</button>
                                    </div> */}

                                    <div> <h5>Leveraged Recommendations </h5></div>
                                    <div> <h5>Short Term </h5></div>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">

                                        <div>Action: <span className="text-green-600">{coinsDatas?.leveraged_recommendations?.short_term?.position}</span></div>
                                        <div>Entry Price: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.leveraged_recommendations?.short_term?.entry_price}</span></div>
                                        <div>Take Profit: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.leveraged_recommendations?.short_term?.take_profit}</span></div>
                                        <div>Leverage: <span className="text-black">{coinsDatas?.leveraged_recommendations?.short_term?.leverage}</span></div>
                                    </div>
                                    <div>Analysis:<span> {coinsDatas?.leveraged_recommendations?.short_term?.rationale?.sentiment_macro_analysis}</span></div>
                                    {/* <div className="mt-4 flex gap-4">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">Buy {symbol}</button>
                                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 cursor-pointer">Trade now</button>
                                    </div> */}



                                    <div className="mt-3"> <h5>Long Term </h5></div>
                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">

                                        <div>Action: <span className="text-green-600">{coinsDatas?.leveraged_recommendations?.long_term?.position}</span></div>
                                        <div>Entry Price: <span className="text-black">${coinsDatas?.leveraged_recommendations?.long_term?.entry_price}</span></div>
                                        <div>Take Profit: <span className="text-black">{currency == "USD" ? "$" : "€"}{coinsDatas?.leveraged_recommendations?.long_term?.take_profit}</span></div>
                                        <div>Leverage: <span className="text-black">{coinsDatas?.leveraged_recommendations?.long_term?.leverage}</span></div>
                                    </div>
                                    <div>Analysis:<span> {coinsDatas?.leveraged_recommendations?.long_term?.rationale?.sentiment_macro_analysis}</span></div>
                                </div>
                            </div>
                    }



                </div>

            </div>
        </div>
    )
}
export default page