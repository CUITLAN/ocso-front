import { Button, Input, SelectSection } from "@nextui-org/react";
import axios from "axios";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManger from "./SelectMangers";
export default async function FormNewLocation(){
    const token = cookies().get(TOKEN_NAME)?.value
    const {data} = await axios.get(`${API_URL}/manager`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocation = await axios.get(`${API_URL}/location`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input label="Nombre de tienda "  placeholder="Tienda 1" name="locationName"/>
            <Input label="Direccion  " placeholder="Avenida de las Ciencias" name="locationAddres"/>
            <Input label="Latitud " placeholder="20" name="locationLat"/>
            <Input label="Longitud " placeholder="34" name="locationLng"/>
            <SelectManger managers={data} locations={responseLocation.data}/>

            <Button type="submit" > subir</Button>
        </form>
    )
}