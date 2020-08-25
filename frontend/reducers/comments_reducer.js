import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_action';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return {...action.comments};
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;