import firebase from 'firebase';
import { CREATE, READ, UPDATE, SET_UPDATE_ITEM } from './types';

const currentUserId = 'testing';

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

export const createItem = item => {
    return async dispatch => {
        await firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
            .push({ item })
            .then(() => {
                dispatch({ type: CREATE });
                // navigate to list?
            });
    };
};

export const updateItem = ({ item, uid }) => {
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .set({ item })
            .then(() => {
                dispatch({ type: UPDATE });
            });
    };
};

export const deleteItem = ({ uid }) => {
    return () => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/employees/${uid}`)
            .remove()
            .then(() => {
                NavigationActions.navigate({ routeName: 'list' });
            });
    };
};

// current editing item in redux store
export const setUpdateItem = (uid, item, callback) => {
    callback();
    console.log('after callback');
    return {
        type: SET_UPDATE_ITEM,
        payload: { uid, item }
    };
};
