import { Button } from "../ui/button"

export default function RightBar() {
  return (
    <div className=" w-3/12 hidden xl:block">
      <div className=" w-full py-10 bg-red-500 hidden rounded-xl flex justify-center xl:block ">
      <div className="flex justify-center items-center flex-col px-6 gap-5">
        <h1 className="text-white text-4xl">Get Started with Knoix for Free</h1>
        <p className=" text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quam consequatur obcaecati sint sunt quidem harum veniam,
          tempora maxime quod ad, expedita assumenda quos voluptates
          necessitatibus dicta ab illo minus autem?</p>

        <div className="w-28 h-40 border"></div>

        <Button>Get Started For Free</Button>
      </div>
    </div>

    <div className="border w-full bg-white mt-8 rounded-xl p-3">
      <h1 className="text-3xl font-medium">Trending Coins 24H</h1>
      <div className="flex flex-col gap-3 mt-4 ">
        <div className="flex justify-between px-3">
          <h1>Etherum</h1>
          <div className="w-10 h-5  bg-green-200 rounded"></div>
        </div>
        <div className="flex justify-between px-3">
          <h1>Etherum</h1>
          <div className="w-10 h-5  bg-green-200 rounded"></div>
        </div>
        <div className="flex justify-between px-3">
          <h1>Etherum</h1>
          <div className="w-10 h-5  bg-green-200 rounded"></div>
        </div>
      </div>
    </div>

    </div>
  )
}
