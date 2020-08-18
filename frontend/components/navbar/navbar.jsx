import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const Navbar = () => (
    <div className='navbar-container'>
        <nav className='navbar'>
            <Link to='/' className='navbar-link'>
                <h1 className='navbar-name'>Median</h1>
            </Link>
            <GreetingContainer />
        </nav>
    </div>
);

export default Navbar;