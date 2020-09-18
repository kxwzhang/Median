import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_action';

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {...oldState};
  switch (action.type) {
    case RECEIVE_LIKE:
      console.log('hitting RECEIVE LIKE');
      console.log(action);
      newState[action.like.id] = { ...oldState[action.like.id], liked: true };
      return newState;
    case REMOVE_LIKE:
      console.log('hitting REMOVE LIKE');
      delete newState[action.like.id];
      return newState;
    default:
      return oldState;
  }
};

export default likesReducer;