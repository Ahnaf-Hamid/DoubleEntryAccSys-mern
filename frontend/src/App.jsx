import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Entry from "./pages/Entry";
import Login from "./pages/login";

export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  // const navigate = useNavigate()
  return (
    <div>
      <ToastContainer />
      <Navbar setToken={setToken}/>
      <Routes>
        <Route path="/" element={!token ? <Login setToken={setToken}/> : <Navigate to='entry'/>} />
        <Route path="/entry" element={token ? <Entry token={token}/> : <Navigate to='/'/>} />
        {/* <Route path="/Entry" element={token ? <Entry token={token}/> : <Navigate to='/'/>}/> */}
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </div>
  );
};

export default App;
