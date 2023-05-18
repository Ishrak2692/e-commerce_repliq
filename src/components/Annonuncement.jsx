import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Container=styled.div`

height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;

justify-content:center;

font-size:14px;
font-weighht:500;
text-align:center;

`
const NavbarLink = styled(Link)`
 color:white;
 font-size:20px;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: Yellow;
}
&:active{
    color: red;
};

`










const Right=styled.div`

flex:1;
display:flex;
align-items:center;

justify-content:flex-end;



`
const A1=styled.h1`

margin-left: 800px;
font-size:14px;
text-align:center;
`







const Annonuncement = () => {
  return (
    
    <Container>

<A1>Super Deal ! Free Shipping on Orders Over $50</A1>


<Right>  
    
<NavbarLink className="nav-link" to="/Admin">
        Admin
        </NavbarLink>

    </Right>

    </Container>


  
    
    
  )
}

export default Annonuncement