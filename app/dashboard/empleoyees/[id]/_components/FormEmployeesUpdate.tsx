import UpdateEmpleoyee from "@/actions/empleoyees/update";
import { Empleoyees } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import React from "react";

const FormEmployeesUpdate = ({ employee }: { employee: Empleoyees }) => {

    const {employeeId} = employee
    const UpdateEmployeebYId= UpdateEmpleoyee.bind(null, employeeId)
  return (
    <form className="flex flex-col gap-2 p-8 bg-orange-600 rounded-md h-fit m-2" action={UpdateEmployeebYId}>
      <Input
        label="Nombre"
        name="Empleoyename"
        defaultValue={employee.Empleoyename}
      />
      <Input
        label="Apellidos"
        name="EmpleoyelastName"
        
        defaultValue={employee.EmpleoyelastName}
      />
      <Input
        label="Correo"
        name="Empleoyeemail"
        defaultValue={employee.Empleoyeemail}
      />
      <Input
        label="Telefono"
        name="EmpleoyePhoneNumber"
        defaultValue={employee.EmpleoyePhoneNumber}
      />
      <Input
        type="file"
        name="EmpleoyephotoUrl"
        defaultValue={employee.EmpleoyephotoUrl}
      />
      <Button type="submit" variant="bordered" color="primary">
        Actualizar datos
      </Button>
    </form>
  );
};

export default FormEmployeesUpdate;
