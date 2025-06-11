import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { backendUrl } from "../App"

const Entry = ({ token }) => {
  const [description,setDescription] = useState('')
  const [credit,setCredit] = useState('')
  const [debit,setDebit] = useState('')
  const [getAllEntries,setGetAllEntries] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/entry/add`,{description,credit,debit}, {headers:{token}})

      // console.log(response.data);
      if(response.data.success){
        getEntries()
        toast.success(response.data.msg)
        setDescription('')
        setCredit('')
        setDebit('')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  
  const removeEntry = async (id) => {
    try {
      const response = await axios.post(`${backendUrl}/api/entry/delete`, {_id:id}, {headers:{token}})

      // console.log(response.data.msg);
      if(response.data.success){
        getEntries()
        toast.success(response.data.msg)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const getEntries = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/entry/get`, {}, {headers: {token}})

      console.log(response.data);
      setGetAllEntries(response.data.entry)
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    getEntries()
  },[])
  return (
    <div className='bg-gray-100 h-screen'>
      <hr />
      <form onSubmit={handleSubmit} className='rounded-lg m-5 p-5 bg-white flex flex-col gap-3 shadow'>
        <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type="number" placeholder='Credit Amount' value={credit} onChange={(e)=>setCredit(e.target.value)} className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type="number" placeholder='Debit Amount' value={debit} onChange={(e)=>setDebit(e.target.value)} className='w-full border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        <button type='submit' className='flex items-start border w-[90px] text-white rounded-lg bg-blue-500 p-2 cursor-pointer'>Add Entry</button>
      </form>
      <div className='bg-white p-5 m-5 rounded shadow'>
        <h2 className='text-2xl font-semibold mb-2'>Entries</h2>
        <table className='w-full border'>
          <thead>
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Credit</th>
              <th className="border p-2">Debit</th>
              <th className="border p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {getAllEntries.map((item, index) => (
             <tr key={index}>
               <td className="border p-2">{new Date(item.date).toLocaleDateString()}</td>
               <td className="border p-2 capitalize">{item.description}</td>
               <td className="border p-2">{item.credit.toFixed(2)}</td>
               <td className="border p-2">{item.debit.toFixed(2)}</td>
               <td onClick={()=>removeEntry(item._id)} className="border p-2 text-center cursor-pointer">X</td>
             </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Entry