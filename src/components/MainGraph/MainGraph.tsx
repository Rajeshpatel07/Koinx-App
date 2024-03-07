import RightBar from "./RightBar";
import Widget from "./Widget";
import { useState,useEffect } from "react";
import axios from 'axios'

const BaseUrl=`https://api.coingecko.com/api/v3/`


export default function MainGraph(){

    const [currency,setcurrency]=useState({})
    const [error,seterror]=useState(false)

    useEffect(()=>{
        ;(async ()=>{
            try {
                seterror(false)
                const response =await axios(`${BaseUrl}/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true`);
                // console.log(response.data)
                setcurrency(response.data.bitcoin)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
        }
        )()
    },[])



    return(

        <div className="flex gap-4">
            <div className="p-5 w-full xl:w-9/12 bg-white rounded-xl">
                <div className="flex items-center gap-4 p-3">
                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                    <h1 className="text-xl">Bitcoin</h1>
                    <h6>BTC</h6>
                    <div className="px-3 py-2 bg-yellow-300 rounded">Rank #1</div>
                </div>
                <div className="flex items-center gap-4 p-3">
                    <h1 className="text-2xl font-medium">$ {currency.usd}</h1>
                    <div className="px-5 py-3 rounded bg-green-200"></div>
                    <p>24H</p>
                </div>
                <h3 className="p-3">{currency.inr}</h3>
                <div>
                    <Widget/>
                </div>
            </div>

            <RightBar/>
        </div>
    )
}