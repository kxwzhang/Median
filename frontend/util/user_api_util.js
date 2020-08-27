export const fetchUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
);

export const fetchFollowers = userId => (
    $.ajax({
        url: `/api/users/${userId}/followers`,
        method: 'GET'
    })
);

export const fetchFollowees = userId => (
    $.ajax({
        url: `/api/users/${userId}/followers`
    })
);