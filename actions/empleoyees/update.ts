"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData){
  const cleanData = new FormData()
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith("$")) {
      cleanData.append(key, value);
    }
  }
  const response = await fetch (`${API_URL}/empleoyees/${employeeId}`, {
    method: "PATCH",
    headers: {
      ...authHeaders()
    },
    body: cleanData,
  })
  console.log(response)
  console.log(await response.json())
  if (response.status === 200) revalidateTag("dashboard:employees");
  if (response.status === 200) revalidateTag(`dashboard:employees:${employeeId}`);
  return;
}