"use client";
import updateEmployee from "@/actions/employees/update";
import { Employee, Location } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectLocations from "../../_components/SelectLocation";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormUpdateEmployee({
  employee, 
  stores 
}: {
  employee: Employee;
  stores: Location[];
}) {
  const { employeeId } = employee;
  const updateEmployeeById = updateEmployee.bind(null, employeeId);
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
      <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName} />
      <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName} />
      <Input label="Correo electrónico" name="employeeEmail" defaultValue={employee.employeeEmail} />
      <Input label="Num. de Teléfono" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber} />
      <Input type="file" name="employeePhoto" />
      
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={visible ? "text" : "password"}
        name="employeePassword"
        label="Nueva Contraseña"
        placeholder="(Dejar en blanco para no cambiar)"
        endContent={
          <button type="button" onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)}>
            <LuEye size="30" className="text-default-400" />
          </button>
        }
      />
      <Button color="danger" size="sm" onPress={() => setPassword(generate({ length: 10 }))}>
        Generar nueva contraseña
      </Button>

      <SelectLocations stores={stores} defaultStore={employee.location?.locationId}/>
      <Button type="submit" color="primary" >
        Actualizar datos
      </Button>
    </form>
  );
}