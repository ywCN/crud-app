import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { CREATE, READ, UPDATE, SET_UPDATE_ITEM } from './types';

const currentUserId = 'testing';

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

export const itemsRead = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
            .on('value', snapshot => {
                dispatch({
                    type: READ,
                    payload: snapshot.val()
                });
            });
    };
};

// async
export const itemUpdate = ({ item, uid }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .set({ item })
            .then(() => {
                dispatch({ type: UPDATE });
                NavigationActions.navigate({ routeName: 'list' });
            });
    };
};

export const itemDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

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

export const setUpdateItem = item => {
    console.log(item);
    NavigationActions.navigate({ routeName: 'edit' });
    return {
        type: SET_UPDATE_ITEM,
        payload: { item }
    };
};
