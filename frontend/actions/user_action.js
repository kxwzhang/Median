import * as UserApiUtil from '../util/user_api_util';
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveFollow = id => ({
    type: RECEIVE_FOLLOW,
    id
});

const removeFollow = id => ({
    type: REMOVE_FOLLOW,
    id
});

const receiveFollowers = details => ({
    type: RECEIVE_FOLLOWERS,
    follows: details.follows,
    users: details.users,
    id: details.id
});

const receiveFollowees = details => ({
    type: RECEIVE_FOLLOWEES,
    follows: details.follows,
    user: details.users,
    id: details.id
});

export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const followUser = id => dispatch => (
    FollowApiUtil.followUser(id).then(() => (
        dispatch(receiveFollow(id))))
);

export const unfollowUser = id => dispatch => (
    FollowApiUtil.unfollowUser(id).then(() => (
        dispatch(removeFollow(id))))
);

export const fetchFollowers = id => dispatch => (
    FollowApiUtil.fetchFollowers(id).then(details => (
        dispatch(receiveFollowers(details))))
);

export const fetchFollowees = id => dispatch => (
    FollowApiUtil.fetchFollowees(id).then(details => (
        dispatch(receiveFollowees(details))))
);