import { TOKEN_NAME } from '@/constants'
import { cookies } from 'next/headers'
import React, { cache } from 'react'


const authHeaders = cache (() => {
    const token = cookies().get(TOKEN_NAME)?.value;
    console.log("Called");
  return {
    'Authorization': `Bearer ${token}`
  }
})

export default authHeaders
