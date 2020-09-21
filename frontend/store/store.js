import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Have logger for development
let configureStore;
if (process.env.NODE_ENV === "production") {
    configureStore = (preloadedState = {}) => {
        return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
    }
} else {
    configureStore = (preloadedState = {}) => {
        return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
    }
}

export default configureStore;