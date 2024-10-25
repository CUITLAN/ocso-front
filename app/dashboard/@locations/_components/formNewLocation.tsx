import { Button, Input, SelectSection } from "@nextui-org/react";
import axios from "axios";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManger from "./SelectMangers";
import authHeaders from "@/helpers/Auth.headers";
export default async function FormNewLocation({store}:  {store:  string | string[] | undefined  }){
    if(store) return null;

    const {data} = await axios.get(`${API_URL}/manager`,{
        headers:{
            ...authHeaders()
        }
    })
    const responseLocation = await axios.get(`${API_URL}/location`,{
        headers:{
            ...authHeaders()
        }
    })
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-2 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-xl text-white text-center">Crear Tiempo</h1>
            <Input label="Nombre de tienda "  placeholder="Tienda 1" name="locationName"/>
            <Input label="Direccion  " placeholder="Avenida de las Ciencias" name="locationAddres"/>
            <Input label="Latitud " placeholder="20" name="locationLat"/>
            <Input label="Longitud " placeholder="34" name="locationLng"/>
            <SelectManger managers={data}  locations={responseLocation.data}/>
            <Button type="submit" color="primary"> subir</Button>
        </form>
    )
}