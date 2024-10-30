import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import authHeaders from '@/helpers/Auth.headers';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { p } from "framer-motion/client";
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
        <Card className=" mx-20 py-2 bg-orange-50">
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerFullName}</b></p>
            </CardHeader> 
          <Divider/>
            <CardBody>
                <p>Hola amigos</p>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
               <p className="w-full">Telefono: <b>{data.managerPhoneNumber}</b></p>
               {
                data.location ? (
                    <p> Tienda :{data.location.locationName}                 </p>
                ):
                <p>No hay tienda </p>
               }
           </CardBody>

        </Card>
    )
}