// import Bitcoin from "@/hooks/Bitcoin"
import axios from "axios"
import { useState,useEffect } from "react"

const BaseUrl=`https://api.coingecko.com/api/v3/`

export default function Table(){
  const [info,setinfo]=useState({})
  const [error,seterror]=useState(false)

  useEffect(()=>{
    ;(async ()=>{
      try{
        seterror(false)
        const response =await axios(`${BaseUrl}/coins/bitcoin`);
        console.log(response.data)
        setinfo(response.data.bitcoin)
      }catch(error){
        console.log(error)
        seterror(true)
      }
    }
    )()
},[])

console.log(info)

    return(
        <div className='flex justify-evenly flex-wrap'>
          <div className="overflow-x-auto">
            <table className="table ">

                <tbody>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Bitcoin Price</td>
                  <td>{info.market_data.current_price.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28"> 24h Low / 24h High</td>
                  <td>{info.market_data.low_24h.usd}/{info.market_data.high_24h.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28"> 7d Low / 7d High</td>
                  <td >{info.market_data.low_24h.usd}/{info.market_data.high_24h.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Trading Value</td>
                  <td>{info.market_data.total_volume.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Market Cap</td>
                  <td># {info.market_data.market_cap_rank}</td>
                </tr>

        </tbody>
            </table>

            <table className="table ">

                <tbody>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Bitcoin Price</td>
                  <td>{info.market_data.current_price.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28"> 24h Low / 24h High</td>
                  <td>{info.market_data.low_24h.usd}/{info.market_data.high_24h.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28"> 7d Low / 7d High</td>
                  <td >{info.market_data.low_24h.usd}/{info.market_data.high_24h.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Trading Value</td>
                  <td>{info.market_data.total_volume.usd }</td>
                </tr>

                <tr className='border-b-2 border-gray-200'>
                  <td className="text-grey-500 pr-28">Market Cap</td>
                  <td># {info.market_data.market_cap_rank}</td>
                </tr>

        </tbody>


            </table>

          </div>
          </div>
    )
}