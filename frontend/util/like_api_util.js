export const fetchLikes = id => (
  $.ajax({
    url: `/api/stories/${id}/likes`,
    method: 'GET'
  })
);

export const likeStory = id => (
  $.ajax({
    url: `/api/stories/${id}/like`,
    method: 'POST'
  })
);

export const unlikeStory = id => (
  $.ajax({
    url: `/api/stories/${id}/like`,
    method: 'DELETE'
  })
);