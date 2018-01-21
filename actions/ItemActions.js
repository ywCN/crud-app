import firebase from 'firebase';
import { CREATE, READ, UPDATE } from './types';

export const itemUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const itemCreate = ({ item }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items`)
            .push({ item })
            .then(() => {
                dispatch({ type: CREATE });
                // navigate back to list screen
            });
    };
};

export const itemsRead = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items`)
            .on('value', snapshot => {
                dispatch({
                    type: READ,
                    payload: snapshot.val()
                });
            });
    };
};

// async
export const itemUpdate = ({ item }) => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/items/${uid}`)
            .set({ item })
            .then(() => {
                dispatch({ type: UPDATE });
                // navigate back to list screen
            });
    };
};

export const itemDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                // no need to dispatch here
                // navigate back to list screen                
            });
    };
};
