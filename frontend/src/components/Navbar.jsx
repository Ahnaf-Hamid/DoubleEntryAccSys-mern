import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-2xl">EntryAccountSystem</h1>
        <button className="font-mono text-lg border rounded-full py-2 px-4 bg-gray-500 hover:bg-gray-600 cursor-pointer">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
