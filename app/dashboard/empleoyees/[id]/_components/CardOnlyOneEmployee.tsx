import { Empleoyees } from "@/entities";
import React from "react";
import { Image} from "@nextui-org/react"
import Link from "next/link";
const CardOnlyOneEmployee = ({ employee }: { employee: Empleoyees }) => {
  return (
    <div className="flex flex-row gap-2 bg-white rounded-md flex-grow-0 h-fit px-10 py-4 m-2 items-center border-2 border-orange-200">
      <div className="text-xl">
        <h1 className="font-bold">
          {employee.Empleoyename + " " + employee.EmpleoyelastName}
        </h1>
        <h1>{employee.Empleoyeemail}</h1>
        <h1>{employee.EmpleoyePhoneNumber}</h1>
        <Link className="underline" href={{pathname: `/dashboard/`, 
            query:{
                store: String(employee.location?.locationId)}
        }}>
          <h1>{employee.location?.locationName}</h1>
        </Link>
      </div>
      <div className="h-full py-20 w-1 bg-zinc-300 mx-6" />
      <Image
        src={employee.EmpleoyephotoUrl}
        alt="Esta es la imagen"
        classNames={{ img: "size-60" }}
        className="object-cover "
      />
    </div>
  );
};

export default CardOnlyOneEmployee;
