import { 
    RECEIVE_USER, 
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW, 
    RECEIVE_FOLLOWERS, 
    RECEIVE_FOLLOWEES
 } from '../actions/user_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_FOLLOW:
            newState[action.id] = {following: true};
            return newState;
        case REMOVE_FOLLOW:
            newState[action.id] = {following: false};
            return newState;
        case RECEIVE_FOLLOWERS:
            newState = {...oldState, ...action.users, ...{[action.id]: {followersIndex: action.follows}}};
            return newState;
        case RECEIVE_FOLLOWEES:
            newState = {...oldState, ...action.users, ...{[action.id]: {followeesIndex: action.follows}}};
            return newState;
        default:
            return oldState;
    }
};

export default usersReducer;