import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';

const entitiesReducer = combineReducers({
    users: userReducer
});

export default entitiesReducer;