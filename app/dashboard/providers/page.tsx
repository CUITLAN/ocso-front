import { API_URL } from "@/constants";
import { Providers } from "@/entities";
import authHeaders from "@/helpers/Auth.headers";
import ProvidersCards from "./_components/ProvidersCard";
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import { Button } from "@nextui-org/react";
export default async function ProviderPage() {
  const res = await fetch(`${API_URL}/providers`, {
    headers: {
      ...authHeaders(),
    },
  });
  const provider: Providers[] = await res.json();
  return (
    <div className="flex flex-grow-0 flex-col h-[90vh] items-end w-full px-10 pt-10">
        <Button className="w-fit" color="primary">
            <LuPlus size={20}/>
        </Button>
      <div className="flex flex-wrap w-full flex-grow-0 gap-14 px-20 h-[90vh] ">
        {provider.map((provider: Providers) => (
          <Link
            className="hover:scale-110 transition-transform"
            href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
          >
            <ProvidersCards providers={provider} key={provider.providerId} />
          </Link>
        ))}
      </div>
    </div>
  );
}
