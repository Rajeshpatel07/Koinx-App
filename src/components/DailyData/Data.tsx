import Table1 from "./Table1"
import Table2 from "./Table2"
import Tabs from "./Tabs"

export default function Data() {
  return (
    <div className=" w-full  mt-6 bg-white border my-2 rounded-xl xl:w-66">
      <Tabs/>
      <div className='h-6/12 w-full  flex flex-col gap-5 p-6'>
        <h1 className='text-4xl'>Performance</h1>
        <div className='flex items-center justify-evenly gap-5'>
          <div className='flex flex-col gap-2'>
            <h2 className='whitespace-nowrap'>Today's Low</h2>
            <h2 className='font-medium'>46,930,220</h2>
          </div>
          <div className=" h-1 w-8/12 rounded-xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 ..."></div>
          <div className='flex flex-col gap-2'>
            <h2 className='whitespace-nowrap'>Today's High</h2>
            <h2 className='font-medium'>46,930,220</h2>
          </div>
        </div>

        <div className='flex items-center justify-evenly gap-5'>
          <div className='flex flex-col gap-2'>
            <h2 className='whitespace-nowrap'>52W Low</h2>
            <h2 className='font-medium'>46,930,220</h2>
          </div>
          <div className=" h-1 w-8/12 rounded-xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 ..."></div>
          <div className='flex flex-col gap-2'>
            <h2 className='whitespace-nowrap'>52W High</h2>
            <h2 className='font-medium'>46,930,220</h2>
          </div>
        </div>
      </div>

      <div className='h-6/12 w-full p-6'>
        <h1 className='text-4xl'>Fundamentals</h1>

        <Table1/>
        <Table2/> 
        </div>
      </div>
  )
}
