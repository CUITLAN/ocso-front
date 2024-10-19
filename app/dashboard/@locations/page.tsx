import axios from 'axios'
import { cookies } from 'next/headers'
import {TOKEN_NAME} from '@/constants'
import { div } from 'framer-motion/client'
import { Select } from '@nextui-org/react'
const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME) ?.value
    const countLocations= await axios.get('http://127.0.0.1:3002/location',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const cantidad = countLocations?.data.length;
    return <div className='w-2/12'> <Select>{}</Select> </div>
}

export default CountPage
