import axios from 'axios'
import { cookies } from 'next/headers'
import {TOKEN_NAME} from '@/constants'
import { Location } from '@/entities'
import SelectLocation from './_components/SelectLocations';
import LocationCard from './_components/Location.card';
import FormNewLocation from './_components/formNewLocation';
import DeleteLocationButton from './_components/DeleteLocationButton';
import authHeaders from '@/helpers/Auth.headers';

const LocationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    const userCookies = cookies()
    let {data}= await axios.get<Location[]>('http://127.0.0.1:3002/location',{
        headers: {
           ...authHeaders()
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
            <div className='w-6/12'>
                <FormNewLocation store={searchParams.store} />
            </div>
            <DeleteLocationButton store={searchParams.store}/>
        </div>
    </div>)
}

export default LocationsPage
