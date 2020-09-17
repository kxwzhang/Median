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