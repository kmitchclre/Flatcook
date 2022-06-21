import React from 'react'
// import CreateNewRecipe from './CreateNewRecipe'
import {useNavigate} from "react-router-dom"
import food from '../images/pot-of-food.svg'



function NavBar() {
  let navigate = useNavigate();

  function handleHome() {
    navigate("/RecipePage")
}
  return ( 
  
  <div className="NavBar">
    <div className="left-side">
      <h1 onClick={handleHome} a href="/RecipePage">Flatcook Recipes <img src={food} /></h1>
    </div>
    <div className="middle">
      <input type="text" placeholder="Search Recipes..."/>
    </div>
    <div className="right-side">
      <nav>
      
      </nav>

    </div>
    
  </div>
  
  
  )
}

export default NavBar






















// const Container = styled.div`
// display: flex;
// flex-direction: column
// `
// const Header = styled.div`
//   color: white;
//   background-color:black;
//   display: flex;
//   flex-direction: row;
//   padding: 20px
//   font-size: 25px;
//   font-weight: bold
//   box-shadow: 0 3px 6px 0 #555
// `


// function NavBar(){
//     return <Container>
//       <Header>Flatcook Recipes</Header>
//     </Container>
// }

// export default NavBar



{/* <div className="leftSide">
              <div className="links">
                <a href="/RecipePage">Flatcook</a>
            </div>
            </div>
            <div className="rightSide"></div>
              <input type="text" placeholder="Search..."/>
              <button>Search</button> */}


              // import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLinbk} from './NavBarElements'
// import styled from "styled-components";


// export const Container = styled.div`
// display: flex;
// flex-direction: column;
// `

// export const Header = styled.div`
// color: white;
// background-color: black;
// display: flex;
// flex-direction: row;
// padding: 20px;
// justify-content: space-between;
// align-items: center;
// font-size: 25px;
// font-weight: bold;
// box-shadow: 0 3px 6px 0 #555
// `

// export const RecipeNameComponent = styled.div`
// display: flex;
// align-items: center;
// font-size: 34px;
// `
// export const RecipeIcon = styled.img`
// width: 36px;
// height: 36px;
// margin: 15px;
// `
// export const SearchComponent = styled.div`
// display: flex;
//   flex-direction: row;
//   padding: 10px 10px;
//   border-radius: 6px;
//   margin-left: 20px;
//   width: 30%;
//   background-color: white;
// `

// export const SearchInput = styled.input`
// border: none;
// outline: none;
// margin-left: 15px;
// font-size: 18px;
// font-weight: bold;
// padding: 10px 10px;
// border-radius: 6px;
// right: 25%
// `

// <Container>
  //   <Header>
  //   <RecipeNameComponent><RecipeIcon src='pot-of-food.svg' />Flatcook Recipes</RecipeNameComponent>
  //   {/* <SearchComponent> */}
  //     {/* <img src="search-icon.svg" /> */}
  //     <SearchInput placeholder="Search Recipe..." />
  //   {/* </SearchComponent> */}
  //   </Header>
  // </Container>