import * as CommentApiUtil from '../util/comment_api_util';
import { receiveErrors } from './error_action';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComment = commentId => dispatch => (
    CommentApiUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
    CommentApiUtil.createComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveErrors(errors))
        )
);

export const deleteComment = commentId => dispatch => (
    CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
);