import FooterWidget from "./FooterWidget"


export default function Recommend(){

    return(

           
           <div className="carousel carousel-center p-2 space-x-4 rounded-box w-full bg-white">
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:BTCUSD"/>
            </div> 
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:ETHUSD"/>
            </div> 
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:BTCUSD"/>
            </div> 
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:ETHUSD"/>
            </div> 
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:BTCUSD"/>
            </div> 
            <div className="carousel-item">
              <FooterWidget Coin="BITSTAMP:ETHUSD"/>
            </div> 
            
          </div>

    )
}
