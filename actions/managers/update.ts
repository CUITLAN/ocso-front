"use server";

import { API_URL } from "@/constants";
import authHeaders from "@/helpers/Auth.headers";
import { revalidateTag } from "next/cache";

export default async function UpdateManagers(managerId: string, formData: FormData){

let manager: any = {}

    for (const key of formData.keys()) {
        const value = formData.get(key);
        manager[key] = formData.get(key);

        
    }
    const res = await fetch(`${API_URL}/managers/${managerId}`,{
        method: "PATCH",
        body: JSON.stringify(manager),
        headers: {...authHeaders()}
    })
    console.log(res.status);

    if(res.status==201){
        revalidateTag("dashbaord:managers")
        revalidateTag(`dashbaord:managers:${managerId}`)
    }
}