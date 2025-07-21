'use client';
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoinsDetails } from "../reducers/CoinSlice";
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // specify desired weights
    display: 'swap',
});
const page = () => {
    const { coinsDatas } = useSelector((state) => state?.coinData)
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
        <>
            <div className={`${poppins.variable} antialiased home_wrapper_arera`}>
                <div className="p-6 bg-white rounded-md shadow-md mt-56">
                    <div className="text-3xl font-bold text-gray-800">
                        {name} <span className="text-gray-500 uppercase">({symbol})</span>
                    </div>
                    <div>Short Term</div>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">

                        <div>Action: <span className="text-green-600">{coinsDatas?.spot_recommendations?.short_term?.action}</span></div>
                        <div>Entry Price: <span className="text-black">${coinsDatas?.spot_recommendations?.short_term?.entry_price}</span></div>
                        <div>Take Profit: <span className="text-black">${coinsDatas?.spot_recommendations?.short_term?.take_profit}</span></div>
                    </div>
                    <div>Analysis:<span>{coinsDatas?.spot_recommendations?.short_term?.rationale?.sentiment_analysis}</span></div>
                    <div className="mt-4 flex gap-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy {symbol}</button>
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">Trade now</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default page