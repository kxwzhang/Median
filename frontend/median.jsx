import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// Testing imports:
import { 
    fetchAllStories,
    fetchStory,
    createStory,
    updateStory,
    deleteStory
} from './actions/story_action';
import {
    fetchComment,
    createComment,
    deleteComment
} from './actions/comment_action';

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
    // window.fetchAllStories = fetchAllStories;
    // window.fetchStory = fetchStory;
    // window.createStory = createStory;
    // window.updateStory = updateStory;
    // window.deleteStory = deleteStory;
    window.fetchComment = fetchComment;
    window.createComment = createComment;
    window.deleteComment = deleteComment;
});