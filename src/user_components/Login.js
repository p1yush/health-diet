import {  useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const Box = styled.div`
background-color: #FFEFEF; 
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 50em) {
    flex-direction: column;
    padding: 8rem 0;
    height: auto;
}
`
const Heading = styled.h1`
font-size: 2rem;
text-align: center;
@media (max-width: 70em) {
    font-size: 1.5rem;
}
@media (max-width: 60em) {
      font-size: 1rem;
}
@media (max-widht: 40em) {
    font-size: 0.8rem
}
@media (max-width: 25em) {
      font-size: 0.8rem;
}
@media (max-height: 45em) {
      font-size: 2rem;
}
@media (max-height: 30em) {
      font-size: 1rem;
}
@media (max-height: 25em) {
      font-size: 1rem;
}
@media (max-width: 25em) and (max-height: 45em) {
      font-size: 2rem;
}
@media (max-width: 30em) and (max-height: 45em) {
      font-size: 1rem;
}
@media (max-width: 25em) and (max-height: 35em) {
      font-size: 1rem;
}
`
const Main = styled.div`
background: #FFEFEF;
box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
padding: 2rem;
width: 30vw;
line-height: 1.5;
display: flex;
flex-direction: column;
justfy_content: space-between;
@media (max-width: 60em) {
    height: 55vh;
}
@media (max-width: 50em) {
    width: 50vw;
    height: max-content;
    margin-bottom: 4rem;
}
@media (max-width: 45em) {
        margin-bottom: 5rem;
}
@media (max-width: 30em) {
      margin-bottom: 4rem;
  }
@media (max-height: 55em) {
    height: max-content;
}
`
const Input = styled.input`
border-radius: 30px;
border: 2px solid #FFEFEF;
outline: none;
color: #000;
margin: 0.5rem 0;
padding: 1rem 1rem;
width: 92%;
font-size: 1rem;
`
const Button = styled.div`
background-color: #000;
border: 2px solid #000;
color: #FFEFEF;
font-size: 1.2rem;
padding: 0.5rem 1rem;
margin: 1rem 1rem;
border-radius: 30px;
outline: none;
cursor: pointer;
`
const Toreg = styled.p`
text-align: center;
`
const Reg = styled(NavLink)`
color: violet;
text-decoration: none;
`
const Line = styled.div`
border-left: 2px solid black;
z-index: 1;
height: 400px;
position: absolute;
left: 46%;
margin-left: -3px;
top: 30%;
@media (max-width: 90em) {
    left: 52%;
}
@media (max-width: 75em) {
    left: 55%;
}
@media (max-width: 70em) {
      left: 50%;
}
@media (max-width: 60em) {
    left: 45%;
}
@media (max-width: 50em) {
    z-index: -1;
}
`

function Login({setLoginUser}) {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        password: ""
    })
    const handleChange = e => {
        const {name , value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate.push("/")
        })
    }
    return(
        <>
        <Box>
            <Heading>
                <h1>Welcome To Your </h1>
                <h1>Daily Journal</h1>
            </Heading>
            <Line />
         <Main>
            <h1>Login</h1>
            <Input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Username"></Input>
            <Input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password"></Input>
            <Button onClick={login}>Login</Button>
            <Toreg>Not Registered Yet? <Reg to="/register">Register Here</Reg></Toreg>
            </Main>
         </Box>
        </>
    )
}


export default Login;