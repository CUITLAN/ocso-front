import React from "react";
import EmpleoyeeCard from "../_Components/Empleoyee.card";
import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { Empleoyees } from "@/entities";
import { Image } from "@nextui-org/react";
import FormEmployeesUpdate from "./_components/FormEmployeesUpdate";
import CardOnlyOneEmployee from "./_components/CardOnlyOneEmployee";
const EmpleoyeePage = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`${API_URL}/empleoyees/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
  });
  const employee: Empleoyees = await response.json();
  return (
    <div className="w-full h-[90vh] flex flex-row items-center justify-center">
      <CardOnlyOneEmployee employee={employee}/>
      <FormEmployeesUpdate employee={employee} />
    </div>
  );
};

export default EmpleoyeePage;
