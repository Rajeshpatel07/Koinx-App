import { Button } from "../ui/button"
import { useState } from "react"

export default function RightBar({TCoin}) {
  
  const [size,setsize]=useState(true)
  
  const TrendingCoins=Array.from(TCoin).slice(0,3)
  console.log(TrendingCoins)

  return (
    <div className=" w-3/12 hidden xl:block">
      <div className= {`w-full py-10 bg-blue-600 hidden rounded-xl flex justify-center xl:block`}>
      <div className="flex justify-center items-center flex-col px-6 gap-5">
        <h1 className="text-white text-4xl">Get Started with Knoix for Free</h1>
        <p className=" text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quam consequatur obcaecati sint sunt quidem harum veniam,
          tempora maxime quod ad, expedita assumenda quos voluptates
          necessitatibus dicta ab illo minus autem?</p>

        <div className="">
          <img src="Trading img.png" alt="img" />
        </div>

        <Button variant="plan">Get Started For Free</Button>
      </div>
    </div>

    <div className="border w-full bg-white mt-8 rounded-xl p-3">
      <h1 className="text-3xl font-medium">Trending Coins 24H</h1>
      <div className="flex flex-col gap-3 mt-4 ">
        {
          TrendingCoins.map((coin)=>(
            <div className="flex justify-between items-center px-3" key={coin.item.coin_id}>
              <div className="flex gap-3 items-center">
              <img src={coin.item.small} alt={coin.item.name} className="rounded-full" />
              <h1>{coin.item.name}</h1>
              </div>
              <h2 className="bg-green-200 p-1 rounded-sm" >{(coin.item.data.price_change_percentage_24h.usd).toString().slice(1,6)}</h2>
        </div>
          ))
        }
      </div>
    </div>

    </div>
  )
}
