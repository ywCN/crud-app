import { CREATE, READ, UPDATE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case CREATE:
            // reset AddScreen input
            return state;
        case READ:
            return action.payload;
        case UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
