export const createFollow = id => ({
    url: `/api/users/${id}/follow`,
    method: 'POST'
});

export const deleteFollow = id => ({
    url: `/api/users/${id}/follow`,
    method : 'DELETE'
});