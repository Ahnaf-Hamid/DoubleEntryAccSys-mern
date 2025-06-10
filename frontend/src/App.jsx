import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Login  from "./pages/Login";
import Entry  from "./pages/Entry";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Entry" element={<Entry />} />
      </Routes>
    </div>
  );
};

export default App;
