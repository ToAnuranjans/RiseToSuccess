import { combineReducers } from 'redux';
import homeReducer from '../screens/home/reducer';
import usersReducer from '../screens/users/reducer';

const reducer = combineReducers({
    home: homeReducer,
    users: usersReducer,
});

export default reducer;
