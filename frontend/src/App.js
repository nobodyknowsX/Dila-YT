import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home"; // ✅ Correct path
import Users from "./Components/UserDetails/Users"; // ✅ Correct path
import AddUser from "./Components/AddUser/AddUser"; // ✅ Correct path
import UpdateUser from "./Components/UpdateUser/UpdateUser"; // ✅ Correct path
//
//
//
//



function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/mainhome" element={<Home/>}/>
          <Route path ="/userdetails" element={<Users/>}/>
          <Route path ="/userdetails/:id" element={<UpdateUser/>}/>
          <Route path ="/adduser" element={<AddUser/>}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
