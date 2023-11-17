import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import { useState , useEffect} from "react";
import logo from '../Resources/logo.svg';  
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/NavBar.css"
import { useNavigate } from "react-router-dom";

export const NavBar =()=>{
    const [activeLink, setActiveLink] =useState('home');
    const [scrolled,setScrolled]=useState(false);

    const history=useNavigate();
    const Signup=()=>{
        history ("/signup")
    }
    const Login=()=>{
        history ("/login")
    }
    useEffect(() => {
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink=(value) =>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="md" className={scrolled?"scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
            <div className="brand-container">
                <img src={logo} alt="logo" className="logo" />
                <div className="brand-text">QUANS</div>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>    
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink ==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#Questions" className={activeLink ==='Questions'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('Questions')}>Questions</Nav.Link> 
                <Nav.Link href="#AboutUs" className={activeLink ==='AboutUs'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('AboutUs')}>AboutUs</Nav.Link>
                
            </Nav>
            <span className="navbar-text">
            <button className="vvd" onClick={Login}><span>Login</span></button>
            <button className="vvd" onClick={Signup}><span>Signup</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}