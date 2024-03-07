import { useEffect } from "react";


export default function FooterWidget({Coin}) {
    console.log(Coin)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol:Coin,
      width: 350,
      height: 220,
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'light',
      isTransparent: false,
      autosize: false,
      largeChartUrl: '',
      chartOnly: false,
      noTimeScale: true
    });
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    return () => {
      document.querySelector('.tradingview-widget-container__widget').innerHTML = '';
    };
  }, []);

  return (
  
      
        <div className="tradingview-widget-container__widget flex gap-5 "></div>
        
      
    
  )
}
