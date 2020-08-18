import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const greetingMessage = () => {
        <div className='greeting-container'>
            <h2 className='greeting-welcome'>
                Welcome Back, {currentUser.username}
            </h2>
            <Link>
                <button>Log Ogut</button>
            </Link>
        </div>
    };

    const sessionLinks = () => {

    };

    return currentUser ? greetingMessage : sessionLinks;
}