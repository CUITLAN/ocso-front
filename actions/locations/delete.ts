"use server"

import { API_URL } from "@/constants"
import authHeaders from "@/helpers/Auth.headers";

export default  async function DeleteLocation (formData: FormData){
    const locationId= formData.get("deleteValue")
    if(!locationId)return null;
    const res = await fetch(`${API_URL}/location/${locationId}`,{
        method: "DELETE",
        headers:{
           ...authHeaders()
        }
    })
}