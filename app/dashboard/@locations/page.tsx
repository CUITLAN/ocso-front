import axios from 'axios'
import { cookies } from 'next/headers'
import {TOKEN_NAME} from '@/constants'
import { Location } from '@/entities'
import SelectLocation from './_components/SelectLocations';
import { useSearchParams } from 'next/navigation';
import LocationCard from './_components/Location.card';
import FormNewLocation from './_components/formNewLocation';

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME) ?.value
    let {data}= await axios.get<Location[]>('http://127.0.0.1:3002/location',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    data = [
        {locationId: 0, locationName: "Ninguna", locationLat: [0,0], locationAddres: ""},
        ...data

    ]
    return ( 
    <div className='w-8/12'> 
        <div className='w-full h-[90vh] flex flex-col items-center bg-red-50'>
            <div className='px-10 w-1/2 my-10'>
            <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div className='w-8/12'>
            <LocationCard store={searchParams.store}/>
            </div>
            <FormNewLocation/>
        </div>
    </div>)
}

export default LocationsPage
