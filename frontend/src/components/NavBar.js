import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  Button,
} from "./Navbar.style";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      //mobile
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              Flatcook <img src="/pot-of-food.svg" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/Recipes" onClick={closeMobileMenu}>
                  Recipes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/CreateNewRecipe" onClick={closeMobileMenu}>
                  Create Recipe
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/Contact" onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/">
                    <Button primary>LOG OUT</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      LOG OUT
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

// function NavBar() {
//   let navigate = useNavigate();

//   function handleHome() {
//     navigate("/RecipePage")
// }
//   return (

//   <div className="NavBar">
//     <div className="left-side">
//       <h1 onClick={handleHome} a href="/RecipePage">Flatcook Recipes <img src={food} /></h1>
//     </div>
//     <div className="middle">
//       <input type="text" placeholder="Search Recipes..."/>
//     </div>
//     <div className="right-side">
//       <nav>

//       </nav>

//     </div>

//   </div>

//   )
// }

// export default NavBar

//   const Container = styled.div`
// display: flex;
// flex-direction: column;
// `

// const Header= styled.div`
// color: white;
// background-color: black;
// display: flex;
// flex-direction: row;
// align-items: center;
// justify-content: space-between;
// padding: 20px;
// font-size: 45px;
// font-weight: bold;
// box-shadow: 0 3px 6px #555
// `

// const RecipeNameComponent = styled.div`
// display: flex;
// align-items: center;
// `
// const RecipeIcon = styled.img`
// width: 36px;
// height: 46px;
// margin: 5px;

// `
// const SearchComponent = styled.div`
//  display: flex;
// flex-direction: row;
// backgroud-color: white;
// border-radius: 10px;
// padding: 13px;
// width: 15%;
// font-size: 50px;
// height: 70px;
// `

// const SearchInput = styled.input`
// border: none;
// outline: none;
// margin-left: 10px;
// font-size: 16px;
// font-weight: bold;
// padding: 30px;
// width: 120%;
// `

// function NavBar() {
//   return(
//     <Container>
//       <Header>
//       <RecipeNameComponent><RecipeIcon src='/pot-of-food.svg'/>
//       Flatcook Recipes
//       </RecipeNameComponent>

//       <SearchComponent>
//         <SearchInput placeholder="Search Recipes..." />
//       </SearchComponent>
//       </Header>
//       Hello
//       </Container>
//   )
// }

// export default NavBar
