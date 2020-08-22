import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal, location }) => {
    let navbarButton;
    if (location.pathname === '/stories/new') {
        navbarButton = (
            <div className='story-form-btn-container'>
                <button className='story-form-btn'>{formType}</button>
            </div>
        )
    } else {
        navbarButton = (
            <Link to='/stories/new'>
                <button className='greeting-new-story'>New story</button>
            </Link>
        )
    }

    const greetingMessage = () => (
        <div className='navbar-profile-container'>
            <h2 className='navbar-username'>
                {currentUser.username}
            </h2>
            {navbarButton}
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

export default withRouter(Greeting);