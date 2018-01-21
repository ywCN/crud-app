import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { CREATE, READ, UPDATE } from './types';

const currentUserId = 'testing';

export const itemUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
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
export const itemSave = ({ item }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items/${uid}`)
            .set({ item })
            .then(() => {
                // no need to dispatch here
                // dispatch({ type: SAVE_SUCCESS });
                // navigate back to list screen
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
                // no need to dispatch here
                // navigate back to list screen
            });
    };
};
