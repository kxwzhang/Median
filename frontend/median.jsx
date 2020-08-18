import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { fetchUser } from './actions/user_action';
// import { signup, login, logout } from './actions/session_action';
import { fetchUser } from './util/user_api_util';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>REACT IS LIVE</h1>, root);

    // Testing:
    // Thunk action creators
    window.fetchUser = fetchUser;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    // Testing API util --------------
    // window.fetchUser = fetchUser;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
});