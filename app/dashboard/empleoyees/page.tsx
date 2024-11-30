import { API_URL } from '@/constants'
import React from 'react'
import authHeaders from '@/helpers/Auth.headers';
import { Empleoyees } from '@/entities';
import EmpleoyeePhotoCard from './_Components/EmployeePhotoCard';
import EmpleoyeeCard from './_Components/Empleoyee.card';

 const Empleoyees_page = async() => {
  const response = await fetch (`${API_URL}/empleoyees`,{
    headers:{
      ...authHeaders()
    },
    next: {
      tags: ["dashboard:employees"]
    }
  })
  const empleoyees: Empleoyees[] = await response.json()
  return (
    <div className='flex flex-wrap flex-grow-0 h-[90vh] gap-4 overflow-y-auto p-10'>
    {
      empleoyees.map((empleoyee: Empleoyees) => {
        if(empleoyee.EmpleoyephotoUrl !== null){
          return <EmpleoyeePhotoCard key={empleoyee.employeeId} empleoyee={empleoyee}/>
        }
        else{
          return <EmpleoyeeCard key={empleoyee.employeeId} empleoyee={empleoyee}/>
        }
      })
    }
    </div>
  )
}

export default Empleoyees_page
