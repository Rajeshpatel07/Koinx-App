import Analyst from "./Analyst"
import { CarouselOrientation } from "./Carousel"


function Sentiment() {
  return (
    <div className=" w-full  border p-1 bg-white my-2  rounded-xl xl:w-66 md:p-5">
      <h1 className="font-bold text-2xl">Sentiment</h1>

      <div className="p-2">
        <h2 className="font-medium text-2xl">Key Points</h2>
        <div className="">
          <CarouselOrientation />
        </div>
      </div>

      <div className="p-2">
        <h1 className="font-medium text-2xl mb-4">Analyst Estimates</h1>
        <Analyst />
      </div>
    </div>
  )
}

export default Sentiment
