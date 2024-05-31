import React from 'react';
import "./Navbar.css"
import { NavLink} from 'react-router-dom';

const Navbar = () => {


    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='logo'>
                    <img className="logo-image"  src={require("../../images/logo.png")} alt='logo'/>
                    <div className='logo-text'>Rentorium</div>
                </div>
                
                <div className='navlinks'>
                    <NavLink to='/'>Our Mission</NavLink>
                    <NavLink to='/2'>Contact Us</NavLink>
                    <NavLink to='/3'>Knowledge Library</NavLink>
                    <NavLink to='/4'>For Tenants</NavLink>
                    <NavLink to='/5'>For Landlords</NavLink>
                </div>
            </div>
            <div className='navbar-right'>
                <NavLink to='/6'>Log In</NavLink>
                <div className='hamburger'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;