import React, { useEffect, useState } from "react";
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLinbk} from './NavBarElements'
import NavBar from "./NavBar";
import Cookbooks from "./Cookbooks";
import Recipes from "./Recipes";
import CreateNewRecipe from "./CreateNewRecipe";

function CookBooksPage() {
  const [cookbooks, setCookBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/cookbooks")
      .then((r) => r.json())
      .then((cookBookArray) => {
        setCookBooks(cookBookArray);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/recipes")
  //     .then((r) => r.json())
  //     .then((recipeArray) => {
  //       setRecipe(recipeArray);
  //     });
  // }, []);

  return (
    <main>
      <NavBar />
      <Cookbooks cookbooks={cookbooks} />
      {/* <CreateNewRecipe /> */}
    </main>
  );
}

export default CookBooksPage;
