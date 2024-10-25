"use server"

import { API_URL, TOKEN_NAME } from "@/constants"
import axios from "axios"
import { cookies } from "next/headers"

export default  async function DeleteLocation (formData: FormData){
    const locationId= formData.get("deleteValue")
    if(!locationId)return null;
    const token = cookies().get(TOKEN_NAME)?.value
    axios.delete(`${API_URL}/location/${locationId}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}