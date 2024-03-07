import RightBar from "./RightBar";
import Widget from "./Widget";


export default function MainGraph(){

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
                    <h1 className="text-2xl font-medium">$ 4234,253,2</h1>
                    <div className="px-5 py-3 rounded bg-green-200"></div>
                    <p>24H</p>
                </div>
                <h3 className="p-3">32,5335,35,3</h3>
                <div>
                    <Widget/>
                </div>
            </div>

            <RightBar/>
        </div>
    )
}