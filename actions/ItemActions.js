import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { CREATE, READ, UPDATE, SET_UPDATE_ITEM } from './types';

const currentUserId = 'testing';

export const itemsRead = () => {
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

export const itemCreate = item => {
    return async dispatch => {
        await firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
            .push({ item });
        dispatch({ type: CREATE });
        NavigationActions.navigate({ routeName: 'list' });
    };
};

export const itemUpdate = ({ item, uid }) => {
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .set({ item })
            .then(() => {
                dispatch({ type: UPDATE });
                NavigationActions.navigate({ screen: 'list' });
            });
    };
};

export const itemDelete = ({ uid }) => {
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

export const setUpdateItem = (uid, item) => {
    return {
        type: SET_UPDATE_ITEM,
        payload: { uid, item }
    };
};
