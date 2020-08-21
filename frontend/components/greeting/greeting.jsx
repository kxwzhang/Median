import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const greetingMessage = () => (
        <div className='navbar-profile-container'>
            <h2 className='navbar-username'>
                {currentUser.username}
            </h2>
            <Link to='stories/new'>
                <button className='greeting-new-story'>New story</button>
            </Link>
            <Link to='/'>
                <button className='logout-btn' onClick={logout}>Log Out</button>
            </Link>
        </div>
    );

    const sessionLinks = () => (
        <div className='session-links-container'>
            <button 
                className='login-btn' 
                onClick={() => openModal('login')}>Login
            </button>
            <button 
                className='signup-btn' 
                onClick={() => openModal('signup')}>Get Started
            </button>
        </div>
    );
    return currentUser ? greetingMessage() : sessionLinks();
}

export default Greeting;