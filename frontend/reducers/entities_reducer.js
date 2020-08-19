import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';
import storiesReducer from '../reducers/stories_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    stories: storiesReducer
});

export default entitiesReducer;