import React from 'react';
import { Link } from 'react-router-dom';
import { GreetingContainer } from '../greeting/greeting_container';

const navBar = () => (
    <div className='navbar-container'>
        <nav className='navbar'>
            <Link to='/'><h1 className='navbar-name'>Median</h1></Link>
            <GreetingContainer />
        </nav>
    </div>
);

export default navBar;