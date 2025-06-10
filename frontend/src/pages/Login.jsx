import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState('SignUp')
  return (
    <div className='flex justify-center items-center h-screen bg-gray-300'>
      <form className='shadow-xl bg-white rounded-xl w-96 p-8 flex flex-col gap-4'>
        <h1 className='text-xl font-semibold text-center'>{state}</h1>
        {state === 'SignUp' && <input type='text' placeholder='name' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>}
        <input type='email' placeholder='email' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type='password' placeholder='password' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button type='submit' className='border text-white p-2 bg-blue-500'>{state}</button>
        {state === 'SignUp' ? (
          <p>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>{setState('Login')}}>Login here</span></p>
        ) : (
          <p>Dont have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>{setState('SignUp')}}>SignUp here</span></p>
        )}
      </form>
    </div>
  )
}

export default Login