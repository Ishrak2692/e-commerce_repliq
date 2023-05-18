import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'
import {mobile} from"../responsive";
const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)
),
 url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
center;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;

`
const Wrapper=styled.div`
width:25%;
padding:20px;
background-color:white;
${mobile({ width:"75%"})}



`
const Form=styled.form`
display:flex;
flex-direction:column;

`
const Title=styled.h1`
font-size:24px;
font-weight:300;

`
const Input =styled.input`

flex:1;
min-width:40%;
margin: 10px 0px ;
padding:10px;

`

const Button =styled.button`

width:40%;
border:none;
padding:15px 20px ;
background-color:teal;
color:white;
cursor:pointer;

`
const Links=styled.a`
margin:10px 0px;
font-size:12px;
text-decoration:underline;
cursor:ponter;
margin-bottom:10px;
text-decoration: none;

`
const NavbarLink = styled(Link)`

width:40%;
border:none;
padding:15px 20px ;
text-decoration: none;
background-color:teal;
color:white;
cursor:pointer;

 `




const Login = () => {
  return (
    <Container>
    <Wrapper>
    
        <Title>SIGN IN</Title>
        <Form>
    
            <Input placeholder="Username"></Input>
            <Input placeholder="Password"></Input>
           
           
            <Button>
            <NavbarLink className="nav-link" to="/">
        LOGIN
            </NavbarLink>

            </Button>
            <Links>DO NOT REMEMBER THE PASSWORD?</Links>
            <Links>
            <Link className="nav-link active" to="/Register">
            CREATE A NEW ACCOUNT
            </Link>

            </Links>
        </Form>
    </Wrapper>
    
    
       </Container>
  )
}

export default Login