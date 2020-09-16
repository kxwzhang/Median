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