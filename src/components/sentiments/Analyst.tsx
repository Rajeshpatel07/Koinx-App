
export default function Analyst() {
  return (
    <div className="flex items-center gap-5 p-2">
      <div className='h-28 w-28 flex flex-none justify-center items-center font-medium rounded-full bg-green-200 md:h-40:w-40'> 73% </div>
      <div>

    <div className="flex flex-col gap-3">
        <div className=" flex gap-2 items-center w-48  flex-1 sm:w-96">
          <h1>Buy</h1>
          <div className="  w-11/12 h-1 rounded bg-green-500"></div>
          <h2>73%</h2>
        </div>

        <div className=" flex gap-2 items-center w-24  flex-1 sm:w-40 ">
          <h1>Hold</h1>
          <div className="  w-11/12 h-1 rounded bg-yellow-500"></div>
          <h2>8%</h2>
        </div>

        <div className=" flex gap-2 items-center w-32  flex-1 sm:w-64">
          <h1>Sell</h1>
          <div className="  w-11/12 h-1 rounded bg-red-500"></div>
          <h2>16%</h2>
        </div>
      </div>

      </div>
    </div>
  )
}
