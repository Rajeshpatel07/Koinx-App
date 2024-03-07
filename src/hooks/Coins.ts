import { useState, useEffect } from 'react'
import axios from 'axios'

const BaseUrl = `https://api.coingecko.com/api/v3/`

const Coins = () => {

  const [coins, setcoins] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(`${BaseUrl}/search/trending`);
        // console.log(response.data)
        setcoins(response.data.coins)
      } catch (error) {
        console.log(error)
      }
    }
    )()
  }, [])
  return coins;

}

export default Coins;
