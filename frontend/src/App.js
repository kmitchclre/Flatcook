import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import RecipePage from "./components/RecipePage"
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar"
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/RecipePage" element={ <RecipePage /> } />
        {/* <Route path="/ContactUs" element={ <NavBar />} /> */}
        <Route path="/SignUp" element={ <SignUp />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
