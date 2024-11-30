import { Empleoyees } from "@/entities";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

export default function EmpleoyeePhotoCard({
  empleoyee,
}: {
  empleoyee: Empleoyees;
}) {
  return (
    <Card className="max-h-72 isFooterBlurred">
      <CardHeader className="absolute top-0 bg-black bg-opacity-25 z-10">
        <h1 className="font-bold text-xl text-white drop-shadow-sm">
          {empleoyee.Empleoyename + " " + empleoyee.EmpleoyelastName}
        </h1>
      </CardHeader>
      <Divider />
      <Image
        src={empleoyee.EmpleoyephotoUrl}
        className="z-0 object-cover"
        classNames={{ img: "size-72" }}
      />
      <CardFooter className="absolute bottom-0 py-2  h-14">
        <Link href={`/dashboard/empleoyees/${empleoyee.employeeId}`}>
          <Button variant="ghost">Actualizar Datos</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
