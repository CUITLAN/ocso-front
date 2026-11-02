import {
  LuLogOut,
  LuStore,
  LuTruck,
  LuUser,
  LuUsers,
  LuWheat,
} from "react-icons/lu";
import NavItem from "./NavItem";
import logout from "@/actions/auth/logout";

export default function Sidebar({ userRoles = [] }: { userRoles?: string[] }) {
  const isAdmin = userRoles.includes("Admin");
  const isManager = userRoles.includes("Manager");
  const isEmployee = userRoles.includes("Employee");

  return (
    <nav className="w-1/12 min-w-[8.3333%] h-[90vh] bg-orange-200 flex flex-col items-center py-10 justify-between">
      <div className="flex flex-col items-center gap-8 w-full">
        <NavItem icon={<LuStore className="text-4xl" />} path="/dashboard" />
        {(isAdmin || isManager) && (
          <NavItem
            icon={<LuTruck className="text-4xl" />}
            path="/dashboard/providers"
          />
        )}
        {(isAdmin || isManager || isEmployee) && (
          <NavItem
            icon={<LuWheat className="text-4xl" />}
            path="/dashboard/products"
          />
        )}
        {isAdmin && (
          <NavItem
            icon={<LuUser className="text-4xl" />}
            path="/dashboard/managers"
          />
        )}
        {(isAdmin || isManager) && (
          <NavItem
            icon={<LuUsers className="text-4xl" />}
            path="/dashboard/employees"
          />
        )}
      </div>
      <form action={logout} className="w-full flex justify-center">
        <button
          type="submit"
          title="Cerrar sesión"
          className="w-10/12 py-2 flex justify-center rounded-md hover:bg-red-500 hover:text-white transition-colors text-red-700"
        >
          <LuLogOut className="text-4xl" />
        </button>
      </form>
    </nav>
  );
}