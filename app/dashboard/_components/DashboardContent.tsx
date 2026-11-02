"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardContent({
  children,
  locations,
  userRoles,
}: {
  children: ReactNode;
  locations: ReactNode;
  userRoles: string[];
}) {
  const path = usePathname();
  return (
    <>
      {children}
      {path === "/dashboard" ? locations : null}
    </>
  );
}