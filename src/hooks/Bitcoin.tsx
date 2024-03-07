import {useState,useEffect} from 'react'
import axios from 'axios'

const BaseUrl=`https://api.coingecko.com/api/v3/`

const Bitcoin =()=>{
    const [data,setdata]=useState({})
    const [error,seterror]=useState(false)

    useEffect(()=>{
        ;(async ()=>{
            try {
                seterror(false)
                const response =await axios(`${BaseUrl}/coins/bitcoin`);
                console.log(response.data)
                setdata(response.data)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
        }
        )()
    },[])
    return data;
    
}

export default Bitcoin;