import { CREATE, READ, UPDATE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case CREATE:
            return INITIAL_STATE;
        case READ:
            return action.payload;
        case UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
