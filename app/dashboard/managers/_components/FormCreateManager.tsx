"use client";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Location } from "@/entities";
import createManager from "@/actions/managers/create";
import { useState } from "react";
import { generate } from "generate-password";
import { LuEye } from "react-icons/lu";

export default function FormCreateManager({stores}: {stores: Location[]}) {
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form action={createManager} className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-white">Crear Manager </h1>
      <Input label="Nombre completo" name="managerFullName" />
      <Input label="Salario" name="managerSalary" />
      <Input label="Correo" name="managerEmail" />
      <Input label="Número de teléfono" name="managerPhoneNumber" />
  
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={visible ? "text" : "password"}
        name="managerPassword"
        label="Contraseña de acceso"
        endContent={
          <button type="button" onMouseUp={() => setVisible(false)} onMouseDown={() => setVisible(true)}>
            <LuEye size="30" className="text-default-400" />
          </button>
        }
      />
      <Button
        color="danger"
        onPress={() => {
          setPassword(generate({ length: 10 }));
        }}
      >
        Generar Contraseña
      </Button>

      <SelectStore stores={stores}/>
      <Button color="primary" type="submit">
        Crear Manager
      </Button>
    </form>
  );
}
