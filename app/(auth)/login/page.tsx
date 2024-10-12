import React from 'react'
import { Input, Button } from '@nextui-org/react'
import Link from 'next/link'
const LoginPage = () => {
  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <div className="text-2xl md:text-white">Registrarse <span></span></div>
      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" type="password" isRequired={true} size="sm" />
¿      </div>
      <div className="flex flex-col items-center gap-2">
        <Button color="primary">Registrarse</Button>
        <p>¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
