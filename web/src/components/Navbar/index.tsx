// import React from 'react';
import './styles.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Navbar(){
    return(
        <nav  className="main-navbar" >
            <Logo />
             <a href="home" className="logo-text" >DS Delivery</a> 
        </nav>
    );
}
