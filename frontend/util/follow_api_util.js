// To be handled in it's own actions

// export const fetchFollowers = userId => (
//     $.ajax({
//         url: `/api/users/${userId}/followers`,
//         method: 'GET'
//     })
// );

// export const fetchFollowees = userId => (
//     $.ajax({
//         url: `/api/users/${userId}/followees`,
//         method: 'GET'
//     })
// );

// export const createFollow = userId => (
//     $.ajax({
//         url: `/api/users/${userId}/follow`,
//         method: 'POST'
//     })
// );

// export const deleteFollow = userId => (
//     $.ajax({
//         url: `/api/users/${userId}/follow`,
//         method: 'DELETE'
//     })
// );

export const fetchFollowers = id => (
    $.ajax({
        url: `/api/users/${id}/subscribers`,
        method: 'GET',
    })
);

export const fetchFollowees = id => (
    $.ajax({
        url: `/api/users/${id}/subscriptions`,
        method: 'GET',
    })
);

export const followUser = id => (
    $.ajax({
        url: `/api/users/${id}/follow`,
        method: 'POST',
    })
);

export const unfollowUser = id => (
    $.ajax({
        url: `/api/users/${id}/follow`,
        method: 'DELETE',
    })
);