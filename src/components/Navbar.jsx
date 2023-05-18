import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import {mobile} from "../responsive"
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`

height:60px;
${mobile({height:"50px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
${mobile({ padding :"10px  0px   "})};


`;
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language=styled.div`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})};

`
const SearchContainer=styled.div`


border 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input=styled.input`

border:none;
${mobile({width:"50px"})}


`

const Center=styled.div`
flex:1;
text-align:center;

`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})};

`
const Right=styled.div`

flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({  flex:2,justifyContent:"center"})};


`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`
const NavbarContainer= styled.nav`
width: 100%;
height:50px;
left: 1500px;
background-color: white;
display: flex;
flex-direction: column;
`

const NavbarLinkContainer = styled.div`
     display: flex;
`
const NavbarLink = styled(Link)`
 color:black;
 font-size:20px;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: Green;
}
&:active{
    color: red;
};
`
const Navbar = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input  placeholder='Search' />
            
            <Search style={{color:"gray",fontSize:"16"}}  ></Search>
        </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Commerce.</Logo>
          </Center>
      <Right>  
        <MenuItem>


        <NavbarLink className="nav-link active" to="/">
            Home
            </NavbarLink>
            <NavbarLink className="nav-link" to="/Productlist">
  Products
            </NavbarLink>
<NavbarLink className="nav-link active" to="/Register">
            Register
            </NavbarLink>


<NavbarLink className="nav-link" to="/Login">
            Sign In
            </NavbarLink>

</MenuItem>

<MenuItem>
<NavbarLink className="nav-link active" to="/Cart">
<ShoppingCartOutlinedIcon/>
            </NavbarLink>
<Badge badgeContent={0} color="primary">
      </Badge>
</MenuItem>


        </Right>
        
        </Wrapper> 
        </Container>
  );
}

export default Navbar