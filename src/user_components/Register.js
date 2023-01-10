import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
left : 2px;
font-size: 2rem;
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

function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        password: "",
        confirmpassword: ""
    })
    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const {name, password, confirmpassword} = user
        if(name && password && (password === confirmpassword)) {
            axios.post("http://localhost:5000/register", user)
            .then( res => {alert(res.data.message)
                navigate.push("/")
            })
        } else {
            alert("Invalid")
        }
    }
    return(
        <>
        <Box>
         <Main>
            <Heading>Register</Heading>
            <Input type="text" name="name" value={user.name} placeholder="Username" onChange={handleChange}></Input>
            <Input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></Input>
            <Input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Confirm Password" onChange={handleChange}></Input>
            <Button onClick={register}>Register</Button>
            </Main>
         </Box>
        </>
    )
}


export default Register;