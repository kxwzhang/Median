// import * as FollowApiUtil from '../util/follow_api_util';

// export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
// export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES'; 
// export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
// export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

// const receiveFollowers = followers => ({
//     type: RECEIVE_FOLLOWERS,
//     followers
// });

// const receiveFollowees = followees => ({
//     type: RECEIVE_FOLLOWEES,
//     followees
// });

// const receiveFollow = userId => ({
//     type: RECEIVE_FOLLOW,
//     userId
// });

// const removeFollow = userId => ({
//     type: REMOVE_FOLLOW,
//     userId
// });

// export const fetchFollowers = userId => dispatch => (
//     FollowApiUtil.fetchFollowers(userId)
//         .then(followers => dispatch(receiveFollowers(followers)))
// );

// export const fetchFollowees = userId => dispatch => (
//     FollowApiUtil.fetchFollowees(userId)
//         .then(followees => dispatch(receiveFollowees(followees)))
// );

// export const createFollow = userId => dispatch => (
//     FollowApiUtil.createFollow(userId)
//         .then(() => dispatch(receiveFollow(userId)))
// );

// export const deleteFollow = userId => dispatch => (
//     FollowApiUtil.deleteFollow(userId)
//         .then(() => dispatch(removeFollow(userId)))
// );