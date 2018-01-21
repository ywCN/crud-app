import { READ } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case READ:
            return action.payload;
        default:
            return state;
    }
};
