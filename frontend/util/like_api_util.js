// export const fetchLikes = id => (
//   $.ajax({
//     url: `/api/stories/${id}/likes`,
//     method: 'GET'
//   })
// );

// export const likeStory = id => (
//   $.ajax({
//     url: `/api/stories/${id}/like`,
//     method: 'POST'
//   })
// );

// export const unlikeStory = id => (
//   $.ajax({
//     url: `/api/stories/${id}/like`,
//     method: 'DELETE'
//   })
// );

// export const likeStory = like => {
//   console.log(like) 
//   return $.ajax({
//     url: '/api/likes',
//     data: { like },
//     method: 'POST'
//   })
// };

// export const unlikeStory = id => (
//   $.ajax({
//     url: `/api/likes/${id}`,
//     method: 'DELETE'
//   })
// );

export const likeStory = id => (
  $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id },
  })
)

export const unlikeStory = id => (
  $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id },
  })
);