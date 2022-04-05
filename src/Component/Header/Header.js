import React from 'react';
import {Link} from "react-router-dom"
import CustomLink from './../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <header className='header_area'>
            <div className='logo'>
               <Link to="/" className='header_logo'>OCTA Guitar Shop</Link>
               
            </div>
            <div className='header_links'>
             <CustomLink to="/" className='link'>Home</CustomLink>         
             <CustomLink to="/reviewers" className='link'>Reviews</CustomLink>
             <CustomLink to="/dashboard" className='link'>Dashboard</CustomLink>
             <CustomLink to="/blogs" className='link'>Blog</CustomLink>
             <CustomLink to="/about" className='link'>About</CustomLink>
            

            </div>
        </header>
    );
};

export default Header;