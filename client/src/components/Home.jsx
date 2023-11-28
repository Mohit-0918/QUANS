import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Home.css";
// import logo from '../Resources/logo.svg';
// import logo from '../Resources/logo.png';
import logo from '../Resources/logo.svg';
const Home= () => {
return (
<div className='nav--contianer'>
    <div className='right--logo--container'>
      <img src={logo} alt="logo" className='app--logo' />  
      <div style={{color:'#0a678c'}} className='logo--quans'>QUANS</div>
    </div>
    <div className='middle--itm'>
        <Link className='middle--home'>Home</Link>
        <Link className='middle--questions'>Questions</Link>
        <Link className='middle--about'>About us</Link>
    </div>
    <div className='btns'>
        <Link style={{textDecoration:'none'}} to="/login">
             <button className='login--btn'>
                Login
            </button>
        </Link>
        <Link style={{textDecoration:'none',color:'white'}} to="/signup">
            <button className='signup--btn'style={{backgroundColor:'#3a87d5',color:'white'}}>
                Sign Up
            </button>
        </Link>
    </div>
</div>
);
}

export default Home;