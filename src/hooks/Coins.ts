import {useState,useEffect} from 'react'
import axios from 'axios'

const BaseUrl=`https://api.coingecko.com/api/v3/`

const Coins =()=>{
    const [data,setdata]=useState({})

    const [coins,setcoins]=useState({})
    const [error,seterror]=useState(false)

    useEffect(()=>{
        ;(async ()=>{
            try {
                seterror(false)
                const response =await axios(`${BaseUrl}/search/trending`);
                // console.log(response.data)
                setcoins(response.data.coins)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
        }
        )()
    },[])
    return coins;
    
}

export default Coins;