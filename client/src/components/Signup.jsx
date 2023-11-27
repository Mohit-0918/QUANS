import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import '../CSS/signup.css';
import axios from "axios";

const Signup =()=>{
const [name,setName]=useState("")
const [username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const history = useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name,username,email,password})
    .then(result=>{
        window.alert("Signup successful!"); 
        history("/login");
    })
    .catch(err=>{
        console.log(err);
        window.alert("Signup failed. Please try again.");
    })
}
    return(
        <div id="body">
        <div id="login-container">
        <h1 className="my--heading">Signup</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name:</label> 
            <input 
            type="text" 
            id="Name" 
            name="Name" required
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}/>

            <label htmlFor="username">Username:</label> 
            <input 
            type="text" 
            id="username" 
            name="username" required
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}/>

            <label htmlFor="email">Email ID:</label> 
            <input 
            type="email" 
            id="email" 
            name="email" required
            placeholder="xyz@gamil.com"
            onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            name="password" required
            placeholder="**********"
            onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Login</button>
            </form>
        <form>
            <Link to="/login"><button type="button">Login to Account</button></Link>
        </form>
    </div>
    </div>
    )
}
export default Signup;