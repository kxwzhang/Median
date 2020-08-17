import React from 'react';
import ReactDOM from 'react-dom';
import { fetchUser } from './actions/user_action';
import { signup, login, logout } from './actions/session_action';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>REACT IS LIVE</h1>, root);

    // Testing:
    window.fetchUser = fetchUser;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
});