import { Empleoyees } from "@/entities";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

export default function EmpleoyeeCard({
  empleoyee,
}: {
  empleoyee: Empleoyees;
}) {
  return (
    <Card className="size-72 max-h-72 min-h-72">
      <CardHeader>
        <h1 className="font-bold text-xl">
          {empleoyee.Empleoyename + " " + empleoyee.EmpleoyelastName}
        </h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          Correo: <b>{empleoyee.Empleoyeemail}</b>
        </p>
        <p>
          Teléfono: <b>{empleoyee.EmpleoyePhoneNumber}</b>
        </p>
      </CardBody>
      <CardFooter className="absolute bottom-0 py-2  h-14">
        <Link href={`/dashboard/empleoyees/${empleoyee.employeeId}`}>
         <Button variant="ghost">Actualizar Datos</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
