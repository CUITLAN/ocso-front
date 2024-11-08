import { Providers } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { LuPlus } from "react-icons/lu";

export default function ProvidersCards({ providers }: { providers: Providers }) {
    return (
        <Card className="">
            <CardHeader>
                <b>{providers.providerName}</b>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{providers.providerEmail}</b></p>
                <p>Teléfono: <b>{providers.providerPhoneNumber}</b></p>
                {
                    Array.isArray(providers.products) && providers.products.length > 0 ? (
                        <p>Productos: <b>{providers.products.length}</b> productos </p>
                    ) : (
                        <p>No tiene productos</p>
                    )
                }
            </CardBody>
        </Card>
    );
}
