export const fetchFollowers = userId => (
    $.ajax({
        url: `/api/users/${userId}/followers`,
        method: 'GET'
    })
);

export const fetchFollowees = userId => (
    $.ajax({
        url: `/api/users/${userId}/followees`,
        method: 'GET'
    })
);

export const createFollow = userId => (
    $.ajax({
        url: `/api/users/${userId}/follow`,
        method: 'POST'
    })
);

export const deleteFollow = userId => (
    $.ajax({
        url: `/api/users/${userId}/follow`,
        method: 'DELETE'
    })
);