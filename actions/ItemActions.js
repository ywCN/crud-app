import firebase from 'firebase';
import { CREATE, READ, UPDATE, SET_UPDATE_ITEM } from './types';

const currentUserId = 'testing'; // firebase access setting is public

export const readItems = () => {
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
            .on('value', snapshot => {
                // console.log(snapshot.val());
                dispatch({
                    type: READ,
                    payload: snapshot.val()
                });
            });
    };
};

export const createItem = (item, callback) => {
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
            .push({ item })
            .then(() => {
                dispatch({ type: CREATE });
                callback(); // go back
            });
    };
};

export const updateItem = (item, uid, callback) => {
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .set({ item })
            .then(() => {
                dispatch({ type: UPDATE });
                callback(); // go back
            });
    };
};

export const deleteItem = (uid, callback) => {
    return () => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .remove()
            .then(() => {
                callback();
            });
    };
};

// current editing item in redux store
export const setUpdateItem = (uid, item, callback) => {
    callback(); // go to edit screen
    return {
        type: SET_UPDATE_ITEM,
        payload: { uid, item }
    };
};
