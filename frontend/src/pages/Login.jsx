import React from 'react'
import Form from "../components/Form"
function Login() {
  return (
    <div className='h-screen w-screen flex justify-center items-center absolute'>
      <Form route="/api/token/" method="login"/>
    </div>
  )
}

export default Login