import * as likeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = id => ({
  type: REMOVE_LIKE,
  id
});

export const likeStory = like => dispatch => (
  likeApiUtil.likeStory(like)
    .then(like => dispatch(receiveLike))
);

export const unlikeStory = id => dispatch => (
  likeApiUtil.unlikeStory(id)
    .then(() => dispatch(removeLike(id)))
);