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
        case RECEIVE_FOLLOWEES:    
        case RECEIVE_FOLLOW:    
        case REMOVE_FOLLOW:    
        default:
            return oldState;
    }
};

export default followsReducer;