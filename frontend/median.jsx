import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// Testing:
// import { likeStory, unlikeStory } from './util/like_api_util';
import { likeStory, unlikeStory } from './actions/story_action';

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
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.likeStory = likeStory;
    window.unlikeStory = unlikeStory;
});