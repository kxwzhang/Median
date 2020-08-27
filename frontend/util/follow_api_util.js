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

export const createFollow = userId => ({
    url: `/api/users/${userId}/follow`,
    method: 'POST'
});

export const deleteFollow = userId => ({
    url: `/api/users/${userId}/follow`,
    method : 'DELETE'
});