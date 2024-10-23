import { Empleoyees } from "@/entities"
import axios from "axios"
import { API_URL, TOKEN_NAME } from "@/constants"
import { cookies } from "next/headers"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

export default  async function EmpleoyeesLocation ({store}: {store: string | string[] | undefined}) {
    const token = cookies().get(TOKEN_NAME)?.value
    console.log('Token AQUI ESTA EL TOKEEEEEEN:', token);
    const {data} = await axios.get<Empleoyees[]>(`${API_URL}/empleoyees/location/${store}`,{
        headers:{Authorization: `Bearer ${token}`},
    })
    console.log(data);
    if(!data) return null;
    
        return data.map((employee)=>{
            const fullname = employee.Empleoyename + " " + employee.EmpleoyelastName
            return (
                <Card className="mx-10 my-10">
                    <CardHeader>
                    <p className="w-full">Nombre: <b>{fullname}</b></p>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                    <p className="w-full">Email: <b>{employee.Empleoyeemail}</b></p>
                    <p className="w-full">Telefono: <b>{employee.EmpleoyePhoneNumber}</b></p>
                    </CardBody>

                </Card>
            )
        })
    

    
}