import { CREATE, READ, UPDATE, DELETE } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case CREATE:
            return state;
        case READ:
            return state;
        case UPDATE:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
};
