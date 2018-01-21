import { combineReducers } from 'redux';
import updateReducer from './updateReducer';
import readReducer from './readReducer';

export default combineReducers({
    readingItems: readReducer,
    updatingItem: updateReducer
});
