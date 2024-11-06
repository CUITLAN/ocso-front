import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import authHeaders from '@/helpers/Auth.headers';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { p } from "framer-motion/client";
import ManagerCardmini from "./_components/managerCardmini";
export default async function ManagerPage ({params}: {params: {id:string}}) {
    const res = await fetch (`${API_URL}/manager/${params.id}`,{
        headers:{
            ...authHeaders()
        },
        next:{
            tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
        }
    })
    const data: Manager = await res.json();
    return (
       <div>
            <ManagerCardmini manager={data}/>
       </div>
    )
}