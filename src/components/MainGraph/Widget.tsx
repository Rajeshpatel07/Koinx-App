import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function Widget() {
  return (
    <div className=" w-full h-41 border bg-white my-2  rounded-2xl xl:w-full">
      <TradingViewWidget
        symbol="BITSTAMP:BTCUSD"
        theme={Themes.Light}
        locale="en"
        enable_publishing={false}
        hide_top_toolbar={true}
        hide_legend={true}
        save_image={false}
        hide_volume={true}
        style="2"
        autosize
      />
    </div>
  )
}


