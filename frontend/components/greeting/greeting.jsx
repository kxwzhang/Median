import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const greetingMessage = () => (
        <div className='greeting-container'>
            <h2 className='greeting-welcome'>
                Welcome Back, {currentUser.username}
            </h2>
            <Link to='/'>
                <button className='logout-btn' onClick={logout}>Log Out</button>
            </Link>
        </div>
    );

    const sessionLinks = () => (
        <div className='session-links-container'>
            <Link to='/login'>
                <button className='login-btn'>Login</button>
            </Link>
            <Link to='signup'>
                <button className='signup-btn'>Sign Up</button>
            </Link>
        </div>
    );
    return currentUser ? greetingMessage() : sessionLinks();
}

export default Greeting;