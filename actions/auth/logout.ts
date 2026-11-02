"use server";

import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
  cookies().delete(TOKEN_NAME);
  redirect("/login");
}