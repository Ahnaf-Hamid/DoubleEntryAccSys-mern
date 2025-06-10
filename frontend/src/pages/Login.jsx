import { useState } from 'react'
import { backendUrl } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
  const [state,setState] = useState('SignUp')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(state === 'SignUp'){
        const response = await axios.post(`${backendUrl}/api/user/register`,{name,email,password})

        if(response.data.success){
          localStorage.setItem('token',response.data.token)
          setToken(response.data.token)
          navigate('/Entry')
        } else {
          toast.error(response.data.msg)
        }
        
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`,{email,password})

        if(response.data.success){
          localStorage.setItem('token',response.data.token)
          setToken(response.data.token)
          navigate('/Entry')
        } else {
          toast.error(response.data.msg)
        }
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-300'>
      <form onSubmit={handleSubmit} className='shadow-xl bg-white rounded-xl w-96 p-8 flex flex-col gap-4'>
        <h1 className='text-xl font-semibold text-center'>{state}</h1>
        {state === 'SignUp' && <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>}
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button type='submit' className='border text-white p-2 bg-blue-500 cursor-pointer'>{state}</button>
        {state === 'SignUp' ? (
          <p>Already have an account? <span className='text-blue-500 cursor-pointer underline' onClick={()=>{setState('Login')}}>Login here</span></p>
        ) : (
          <p>Dont have an account? <span className='text-blue-500 cursor-pointer underline' onClick={()=>{setState('SignUp')}}>SignUp here</span></p>
        )}
      </form>
    </div>
  )
}

export default Login