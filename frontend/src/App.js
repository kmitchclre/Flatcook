import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CookBooksPage from "./components/CookBooksPage";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Contact from "./components/Contact";
import CreateNewRecipe from "./components/CreateNewRecipe";
import Recipes from "./components/Recipes";

function App() {
  // const [activeRecipies, setActiveRecipies] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/CookBooksPage" element={<CookBooksPage />} />
          <Route path="/CookBooksPage/:cookbookId" element={<Recipes />} />
          {/* <Route path="/ContactUs" element={ <NavBar />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CreateNewRecipe" element={<CreateNewRecipe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
