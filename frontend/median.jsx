import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Testing imports:
import { fetchUser } from './actions/user_action';
import { signup, login, logout } from './actions/session_action';
// import { fetchUser } from './util/user_api_util';
// import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

    // Testing:
    // Add getState and dispatch to window
    window.getState = store.getState;
    window.dispatch = store.dispatch;
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