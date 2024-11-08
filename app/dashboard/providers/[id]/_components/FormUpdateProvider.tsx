import { Providers } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import UpdateProvider from "@/actions/providers/update";

const FormUpdateProvider = ({ provider }: { provider: Providers }) => {
  const { providerId } = provider;
  const UpdateProviderById = UpdateProvider.bind(null, providerId);

  return (
    <>
      
      <form
        action={UpdateProviderById}
        className="flex flex-wrap gap-10 flex-grow-0 bg-orange-200 mr-20 rounded-md px-10 py-10 items-center justify-center"
      >
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerName}
          label="Nombre Proveedor"
          placeholder="CocaCola"
          name="providerName"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerEmail}
          label="Correo Electrónico del Proveedor"
          placeholder="Cocacola@ocso.com"
          name="providerEmail"
        />
        <Input
          className="max-w-[250px]"
          defaultValue={provider.providerPhoneNumber}
          label="Teléfono del Proveedor"
          placeholder="442-256-5635"
          name="providerPhoneNumber"
        />
        <Button type="submit" color="primary">
          Actualizar
        </Button>
      </form>
    </>
  );
};

export default FormUpdateProvider;
