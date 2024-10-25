"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";

export async function createLocation(formdata: FormData) {
    const token = cookies().get(TOKEN_NAME)?.value
    let location: any = {};
    let locationLatLng = [0, 0];
    
    for (const key of formdata.keys()) {
        const value = formdata.get(key);
        
        if (value) {
            if (key === "locationLat") {
                locationLatLng[0] = +value;
            } else if (key === "locationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }

    location.locationLatLng = locationLatLng;
    axios.post(`${API_URL}/location`,{
        ...location
    },{
        headers: {
            Authorization: `Bearer ${token}` 
        }
    })
}
