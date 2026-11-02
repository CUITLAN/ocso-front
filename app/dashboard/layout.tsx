import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
import DashboardContent from "./_components/DashboardContent";
import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import { redirect } from "next/navigation";

export default function LayoutDashboard({
  children,
  locations,
}: Readonly<{
  children: React.ReactNode;
  locations: React.ReactNode;
}>) {
  const token = cookies().get(TOKEN_NAME)?.value;

  if (!token) {
    redirect("/login");
  }

  let userRoles: string[] = [];
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedJson = Buffer.from(payloadBase64, "base64").toString("utf-8");
    const payload = JSON.parse(decodedJson);
    userRoles = Array.isArray(payload.userRoles)
      ? payload.userRoles
      : [payload.userRoles];
  } catch (e) {
    redirect("/login");
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Header />
      <div className="flex flex-row items-center">
        <Sidebar userRoles={userRoles} />
        <DashboardContent locations={locations} userRoles={userRoles}>
          {children}
        </DashboardContent>
      </div>
    </div>
  );
}