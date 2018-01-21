import { combineReducers } from 'redux';
import editReducer from './itemReducer';
import addReducer from './itemReducer';
import readReducer from './itemReducer';

export default combineReducers({
    read: readReducer,
    add: addReducer,
    edit: editReducer
});
