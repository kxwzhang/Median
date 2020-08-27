import { 
    RECEIVE_FOLLOWERS, 
    RECEIVE_FOLLOWEES, 
    RECEIVE_FOLLOW, 
    REMOVE_FOLLOW 
} from '../actions/follow_action';

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    switch (action.type) {
        case RECEIVE_FOLLOWERS:
            newState[action.id] = action.followers;
            return newState;
        case RECEIVE_FOLLOWEES:    
            newState[action.id] = action.followees;
            return newState;
        // case RECEIVE_FOLLOW:    
        // case REMOVE_FOLLOW:    
        default:
            return oldState;
    }
};

export default followsReducer;