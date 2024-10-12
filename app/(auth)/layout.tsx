import Image from "next/image";
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-orange-50 w-screen items-center h-screen overflow-hidden grid ">
            <div className="place-content-center place-self-center">
            <Image src='/Oxxo_Logo.svg' alt="Oxxo Imagen" width={100} height={0} className="place-self-center w-full"/>
                {children}
            </div>
        </div>
    )
 }