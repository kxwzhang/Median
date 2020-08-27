import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = userId => ({
    type: RECEIVE_FOLLOW,
    userId
});

const removeFollow = userId => ({
    type: REMOVE_FOLLOW,
    userId
});

export const createFollow = userId => dispatch => (
    FollowApiUtil.createFollow(userId)
        .then(() => dispatch(receiveFollow(userId)))
);

export const deleteFollow = userId => dispatch => (
    FollowApiUtil.deleteFollow(userId)
        .then(() => dispatch(removeFollow(user)))
);