import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Entry from "./pages/Entry";
import Login from "./pages/login";

export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  return (
    <div>
      <ToastContainer />
      <Navbar setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Login setToken={setToken}/>} />
        <Route path="/Entry" element={<Entry token={token}/>} />
      </Routes>
    </div>
  );
};

export default App;
