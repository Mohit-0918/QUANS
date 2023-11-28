import React, { useState } from "react";
import "../CSS/login.css"   
import {useNavigate } from "react-router-dom";
import axios from "axios";

const Login =()=>{
    const history=useNavigate();
    const createAccount=()=>{
        history ("/signup")
    }  
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{username,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                history('/')
                window.alert("Login Success")
            }
            history('/')
        }).catch(err=>{
            window.alert("invalid username or password")
        })
    }
    return(
        <div id="body">
        <div id="login-container">
        <h1 className="my--heading">Login</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label> 
            <input 
            type="text" 
            id="username" 
            name="username" required 
            placeholder="Username"
            onChange={(e)=>{setUsername(e.target.value)}}
            />

            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id="password" 
            name="password" required 
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}/>
            
            <button type="submit" >Login</button>
            </form>
        <form>
                <button type="button" onClick={createAccount}>Create Account</button>
        </form>
    </div>
    </div>
        
    )
}
export default Login;