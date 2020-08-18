import { RECEIVE_USER } from '../actions/user_action';
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
        default:
            return oldState;
    }
};

export default usersReducer;