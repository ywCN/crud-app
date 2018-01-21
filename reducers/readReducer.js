import { READ } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case READ:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
