import { RECEIVE_CURRENT_USER } from '../actions/session_action';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/error_action';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case REMOVE_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default sessionErrorsReducer;