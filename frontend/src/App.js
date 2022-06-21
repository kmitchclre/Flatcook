import './App.css';
import React, { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import RecipePage from "./components/RecipePage"
import SignUp from "./components/SignUp"

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/RecipePage" element={ <RecipePage /> } />
        <Route path="/SignUp" element={ <SignUp /> } />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
