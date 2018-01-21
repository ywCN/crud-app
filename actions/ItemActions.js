import firebase from 'firebase';
import { CREATE, READ, UPDATE } from './types';

const currentUserId = 'mSld03ZwZtYXTfpNzco3I7pjE5Z2';

export const itemUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const itemCreate = item => {
    console.log(item);

    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUserId}/items`)
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
