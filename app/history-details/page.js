'use client';
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getSearchHistoryDetails } from "../reducers/SearchHistroySlice";
const page=()=>{
    const{singleHitory}=useSelector((state)=>state?.his)
    const searchParams = useSearchParams();
    const dispatch=useDispatch()
  const id = searchParams.get('id');

  
    useEffect(()=>{
dispatch(getSearchHistoryDetails({search_history_id:id}))
    },[])
    console.log("singleHitory",singleHitory);
    
    return(
        <>
        <p>
            {id}
        </p>
        </>
    )
}
export default page