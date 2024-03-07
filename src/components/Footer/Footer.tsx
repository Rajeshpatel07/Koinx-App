import Recommend from "./Recommend"
import TrendingCoins from "./TrendingCoins"

export default function Footer(){

    return(
        <div className="mt-2">
            <div className="p-5">
            <h1 className="text-3xl">You may also like</h1>
            <div>
                <Recommend/>
            </div>
        </div>
        <div className="p-5">
            <h1 className="text-3xl">Trending Coins</h1>
            <div>
                <TrendingCoins/>
            </div>
        </div>
        </div>
    )
}