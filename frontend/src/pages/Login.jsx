import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState('SignUp')
  return (
    <div className='flex justify-center items-center h-screen '>
      <form >
        <h1>{state}</h1>
        <input type='text'/>
        <input type='text'/>
        <input type='text'/>
        <button type='submit'>{state}</button>
      </form>
    </div>
  )
}

export default Login