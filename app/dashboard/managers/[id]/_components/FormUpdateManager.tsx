// app/dashboard/managers/[id]/_components/FormUpdateManager.tsx
"use client";
import updateManager from "@/actions/managers/update";
import { Manager, Location } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormUpdateManager({
  manager,
  stores 
}: {
  manager: Manager;
  stores: Location[]; 
}) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2 p-4">
      <h1 className="text-2xl text-white font-semibold text-center"> Actualizar Manager </h1>
      <Input required isRequired label="Nombre completo" defaultValue={manager.managerFullName} name="managerFullName" />
      <Input required isRequired label="Correo Electrónico" defaultValue={manager.managerEmail} name="managerEmail" />
      <Input required isRequired label="Salario" defaultValue={String(manager.managerSalary)} name="managerSalary" />
      <Input required isRequired label="Número de teléfono" defaultValue={manager.managerPhoneNumber} name="managerPhoneNumber" />
      
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={visible ? "text" : "password"}
        name="managerPassword"
        label="Nueva Contraseña"
        placeholder="(Dejar en blanco para no cambiar)"
        endContent={
          <button type="button" onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)}>
            <LuEye size="30" />
          </button>
        }
      />
      <Button color="danger" size="sm" onPress={() => setPassword(generate({ length: 10 }))}>
        Generar nueva contraseña
      </Button>

      <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
      
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}