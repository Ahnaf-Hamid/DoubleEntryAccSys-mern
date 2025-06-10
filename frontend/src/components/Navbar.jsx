import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }
  return (
    <div className="bg-gray-400 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-2xl">EntryAccountSystem</h1>
        <button onClick={logOut} className="font-mono text-lg border rounded-full py-2 px-4 bg-gray-500 hover:bg-gray-600 cursor-pointer">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
