import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    switch (action.type) {
        case RECEIVE_COMMENT:
            
        case REMOVE_COMMENT:
    
        default:
            return oldState;
    }
};

export default commentsReducer;