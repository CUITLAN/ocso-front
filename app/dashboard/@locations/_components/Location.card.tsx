import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { Location } from "@/entities"
import axios from 'axios';
import { API_URL, TOKEN_NAME } from '@/constants';
import Link from 'next/link';
import authHeaders from '@/helpers/Auth.headers';
export default async function LocationCard ({store}: {store: string | string []| undefined}){
    if(!store)return null;
    const {data} = await axios.get<Location>(`${API_URL}/location/${store}`,{
        headers:{
            ...authHeaders()
        }
    })
    return (
        <Card>
           
            <CardHeader>
                <p className="w-full"><b>{data.locationName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className='w-full'> Manager: <Link href={`/dashboard/managers`}> <b>{data.manager?.managerFullName}</b> </Link></p>

            </CardBody>
        </Card>
    )
}