import React from 'react'
import Form from "../components/Form"

function Register() {
  return (
    <div className='h-screen w-screen flex justify-center items-center absolute'>
      <Form route="/api/user/register/" method="register"/>
    </div>
  )
}

export default Register