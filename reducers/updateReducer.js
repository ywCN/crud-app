import { UPDATE, SET_UPDATE_ITEM } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case UPDATE:
            return '';
        case SET_UPDATE_ITEM:
            return action.payload;
        default:
            return state;
    }
};
