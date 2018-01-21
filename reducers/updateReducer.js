import { UPDATE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
