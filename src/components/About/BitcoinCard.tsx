import { Button } from "../ui/button";


export default function BitcoinCard() {


  return (

    <div className="border-b-2 py-5">
      <h1 className="font-bold text-2xl my-6">Already own Bitcoin ?</h1>

      <div className="flex items-center just flex-wrap gap-3">

        <div className="card card-side bg-blue-500 shadow-xl flex items-center">
          <div className="w-36 h-36 bg-red-500 rounded-xl m-2"></div>
          <div className="card-body gap-8 p-3">
            <h2 className="card-title text-white">Calculate Your Profits</h2>
            <div className="card-actions justify-end">
            <Button variant="plan">Check Out </Button>
            </div>
          </div>
        </div>

        <div className="card card-side bg-green-500 shadow-xl flex items-center">
          <div className="w-36 h-36 bg-red-500 rounded-xl m-2"></div>
          <div className="card-body gap-8 p-3">
            <h2 className="card-title text-white">Calculate Your Profits</h2>
            <div className="card-actions justify-end">
              <Button variant="plan">Check Out </Button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
