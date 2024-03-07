
import Coins from "@/hooks/Coins";

export default function TrendingCoins(){

    const CoinsData=Coins();
    // console.log(CoinsData)
    const Data=Array.from(CoinsData)
    // console.log(Data)

    return(

      <div className="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box">
  
      {
        Data.map((coin)=>(
          <div className="carousel-item border w-72 h-52 rounded-xl relative" key={coin.item.coin_id}>
            <div className="absolute flex flex-col p-5 gap-2 ">
              <div className="flex gap-3">
                <img className="w-8 h-8 rounded-xl" src={coin.item.large} alt={coin.item.id} />
                <h1>{coin.item.name}</h1>
              </div>
            <h1 className="text-2xl">{coin.item.data.price}</h1>
            </div>  
            <div className="mt-5 ml-4">
            <img className="w-40 h-32 mt-8 ml-9 " src={coin.item.data.sparkline} alt={coin.item.id} />
            </div>
        </div>  
        ))
      }
        </div>
    )
}