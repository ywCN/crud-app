import { CREATE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case CREATE:
            // reset AddScreen init state
            return '';
        default:
            return state;
    }
};
