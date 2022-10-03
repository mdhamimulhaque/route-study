import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/team' >Team</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
        </header>
    );
};

export default Header;