import React, {  useState } from 'react';
import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn, SetisLoggedIn] = useState(false);

  return (
    <div className="min-w-screen min-h-screen bg-[#000814] text-white flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} SetisLoggedIn={SetisLoggedIn}/>

      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login SetisLoggedIn={SetisLoggedIn}/>}/>
       <Route path="/signup" element={<Signup SetisLoggedIn={SetisLoggedIn}/>}/>
       <Route path="/dashboard" element={
         <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
       }/>
       <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
