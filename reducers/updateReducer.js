import { UPDATE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case UPDATE:
            return '';
        case SET_UPDATE_ITEM:
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};
