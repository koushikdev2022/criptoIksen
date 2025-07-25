'use client';

import aboutBanner from "../assets/imagesource/about_banner.png";
import bannerImg from "../assets/imagesource/banner_img.png";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsDetails, toSearchData } from "../reducers/CoinSlice";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { Spinner } from "flowbite-react";
import TradingViewCandle from "./TradingView";
import { BiDollarCircle } from "react-icons/bi";
import { PiTargetBold } from "react-icons/pi";
import { GrMoney } from "react-icons/gr";
import { getSearchHistory } from "../reducers/SearchHistroySlice";
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
        dispatch(getCoinsDetails({ crypto_name: symbol, currency: currency })).then((res) => {
            if (res?.payload?.status !== '400') {
                dispatch(toSearchData({ search_query: res?.payload?.symbol, json_response: res?.payload }))
                dispatch( dispatch(getSearchHistory({ week: 0 })))
            }

        })
    }, [currency, symbol])
    console.log("coinsDatas", coinsDatas);

    return (

        <div>

            <div className="how_it_works_section py-4 px-4 lg:px-0 lg:py-0">

                <div className="">

                    {
                        loading ?
                            <div className="flex justify-center items-center">
                                <Spinner aria-label="Default status example" />
                            </div>
                            :
                            <div className={`${poppins.variable} antialiased home_wrapper_arera`}>
                                <div className="p-6 bg-white rounded-md mt-0">
                                    <div className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                                        {name}  <span className="text-gray-500 uppercase">({symbol})</span>
                                    </div>
                                    <TradingViewCandle symbol={coinsDatas?.symbol || symbol} />
                                    {
                                        coinsDatas?.status === '400' ? (
                                            <p className="text-center text-2xl text-red-600 mt-2">{coinsDatas?.message}</p>
                                        ) : (
                                            <>

                                                <div className="mb-10">
                                                    <div className="mt-14 mb-5 lg:mb-10">
                                                        <div className="mb-2 lg:mb-4">
                                                            <h5 className="text-[#202020] text-[20px] lg:text-[28px] leading-[30px] font-semibold">Spot Recommendations</h5>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[#767676] text-[14px] lg:text-[18px] leading-[20px] font-medium">Short-term and long-term insights based on market sentiment.</h5>
                                                        </div>
                                                    </div>

                                                    <div className="lg:flex gap-10">
                                                        <div className="bg-[#F8F9FB] px-8 py-10 rounded-2xl shadow-lg lg:w-6/12 mb-5 lg:mb-0">
                                                            <div className="mb-6 flex justify-between items-center">
                                                                <h5 className="text-[#055346] text-[20px] leading-[30px] font-semibold">Short Term </h5>
                                                                <div className="border-2 border-[#E49600] bg-[#FFF3DB] rounded-[25px]"><span className="text-[#E49600] text-[16px] leading-[38px] capitalize px-8">{coinsDatas?.spot_recommendations?.short_term?.action}</span></div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-600">
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><BiDollarCircle className="text-xl text-[#F28938] float-left mr-1" /> Entry Price: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.short_term?.entry_price}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" /> Take Profit: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.short_term?.take_profit}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" />Stop Loss: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.short_term?.stop_loss}</span></div>
                                                            </div>
                                                            <div className="text-[#2D2D2D] text-[16px] leading-[28px] font-medium">Analysis:<span className="text-[#2D2D2D] text-[16px] leading-[28px] font-normal"> {coinsDatas?.spot_recommendations?.short_term?.rationale?.sentiment_analysis}</span></div>
                                                        </div>

                                                        <div className="bg-[#F8F9FB] px-8 py-10 rounded-2xl shadow-lg lg:w-6/12">
                                                            <div className="mb-6 flex justify-between items-center">
                                                                <h5 className="text-[#055346] text-[20px] leading-[30px] font-semibold">Long Term</h5>
                                                                <div className="border-2 border-[#E49600] bg-[#FFF3DB] rounded-[25px]"><span className="text-[#E49600] text-[16px] leading-[38px] capitalize px-8">{coinsDatas?.spot_recommendations?.long_term?.action}</span></div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-600">
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><BiDollarCircle className="text-xl text-[#F28938] float-left mr-1" /> Entry Price: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.long_term?.entry_price}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" /> Take Profit: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.long_term?.take_profit}</span></div>

                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" /> Stop Loss: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.spot_recommendations?.long_term?.stop_loss}</span></div>
                                                            </div>
                                                            <div className="text-[#2D2D2D] text-[16px] leading-[28px] font-medium">Analysis:<span className="text-[#2D2D2D] text-[16px] leading-[28px] font-normal"> {coinsDatas?.spot_recommendations?.long_term?.rationale?.sentiment_analysis}</span></div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="mb-10">

                                                    <div className="mt-14 mb-6">
                                                        <div className="mb-2 lg:mb-4">
                                                            <h5 className="text-[#202020] text-[20px] lg:text-[28px] leading-[30px] font-semibold">Leveraged Recommendations</h5>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[#767676] text-[14px] lg:text-[18px] font-medium">Recommendations involving margin/leverage strategy.</h5>
                                                        </div>
                                                    </div>

                                                    <div className="lg:flex gap-10">

                                                        <div className="bg-[#F8F9FB] px-8 py-10 rounded-2xl shadow-lg lg:w-6/12 mb-5 lg:mb-0">
                                                            <div className="mb-6 flex justify-between items-center">
                                                                <h5 className="text-[#055346] text-[20px] leading-[30px] font-semibold">Short Term </h5>
                                                                <div className="border-2 border-[#E49600] bg-[#FFF3DB] rounded-[25px]">
                                                                    <span className="text-[#E49600] text-[16px] leading-[38px] capitalize px-8">{coinsDatas?.leveraged_recommendations?.short_term?.position}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-600">
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><BiDollarCircle className="text-xl text-[#F28938] float-left mr-1" /> Entry Price: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.short_term?.entry_price}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" /> Take Profit: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.short_term?.take_profit}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><GrMoney className="text-xl text-[#04425D] float-left mr-1" /> Leverage: <span className="font-medium">{coinsDatas?.leveraged_recommendations?.short_term?.leverage}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><GrMoney className="text-xl text-[#04425D] float-left mr-1" />Stop Loss : <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.short_term?.stop_loss}</span></div>
                                                            </div>
                                                            <div className="text-[#2D2D2D] text-[16px] leading-[28px] font-medium">Analysis:<span className="text-[#2D2D2D] text-[16px] leading-[28px] font-normal"> {coinsDatas?.leveraged_recommendations?.short_term?.rationale?.sentiment_macro_analysis}</span></div>
                                                        </div>


                                                        <div className="bg-[#F8F9FB] px-8 py-10 rounded-2xl shadow-lg lg:w-6/12">
                                                            <div className="mb-6 flex justify-between items-center">
                                                                <h5 className="text-[#055346] text-[20px] leading-[30px] font-semibold">Long Term </h5>
                                                                <div className="border-2 border-[#E49600] bg-[#FFF3DB] rounded-[25px]">
                                                                    <span className="text-[#E49600] text-[16px] leading-[38px] capitalize px-8">{coinsDatas?.leveraged_recommendations?.long_term?.position}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-600">
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><BiDollarCircle className="text-xl text-[#F28938] float-left mr-1" /> Entry Price: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.long_term?.entry_price}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><PiTargetBold className="text-xl text-[#E7202A] float-left mr-1" /> Take Profit: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.long_term?.take_profit}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><GrMoney className="text-xl text-[#04425D] float-left mr-1" /> Leverage: <span className="font-medium">{coinsDatas?.leveraged_recommendations?.long_term?.leverage}</span></div>
                                                                <div className="text-[#2D2D2D] text-[15px] font-normal"><GrMoney className="text-xl text-[#04425D] float-left mr-1" /> Stop Loss: <span className="font-medium">{currency == "USD" ? "$" : currency == 'EURO' ? "€" : currency === 'AUD' ? 'A$' : '₮'}{coinsDatas?.leveraged_recommendations?.long_term?.stop_loss}</span></div>
                                                            </div>
                                                            <div className="text-[#2D2D2D] text-[16px] leading-[28px] font-medium">Analysis:<span className="text-[#2D2D2D] text-[16px] leading-[28px] font-normal"> {coinsDatas?.leveraged_recommendations?.long_term?.rationale?.sentiment_macro_analysis}</span></div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </>
                                        )
                                    }




                                </div>
                            </div>
                    }



                </div>

            </div>
        </div>
    )
}
export default page