import { combineReducers } from 'redux';
import createReducer from './createReducer';
import updateReducer from './updateReducer';
import readReducer from './readReducer';

export default combineReducers({
    readingItems: readReducer,
    addingItem: createReducer,
    updatingItem: updateReducer
});
