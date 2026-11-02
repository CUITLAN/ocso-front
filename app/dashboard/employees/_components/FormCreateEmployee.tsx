"use client";
import { Button, Input } from "@nextui-org/react";
import createEmployee from "@/actions/employees/create";
import SelectLocations from "./SelectLocation";
import { Location } from "@/entities";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateEmployee({ stores }: { stores: Location[] }) {
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
      <Input isRequired label="Nombre" name="employeeName" placeholder="Marco"/>
      <Input isRequired label="Apellidos" name="employeeLastName" placeholder="Aurelio"/>
      <Input isRequired label="Correo electrónico" name="employeeEmail" placeholder="marco@marco.com"/>
      <Input isRequired label="Num. de Teléfono" name="employeePhoneNumber" placeholder="444XXXXX"/>
      <Input type="file" name="employeePhoto"/>
      
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={visible ? "text" : "password"}
        name="employeePassword"
        label="Contraseña de acceso"
        endContent={
          <button type="button" onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)}>
            <LuEye size="30" className="text-default-400" />
          </button>
        }
      />
      <Button color="danger" size="sm" onPress={() => setPassword(generate({ length: 10 }))}>
        Generar Contraseña
      </Button>

      <SelectLocations stores={stores} />
      
      <Button type="submit" color="primary" >
        Crear empleado
      </Button>
    </form>
  );
}