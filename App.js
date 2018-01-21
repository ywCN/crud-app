import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCk0lbxBpymCQt60u0FCQyT2Sj-wnKR_xI',
            authDomain: 'simple-react-firebase.firebaseapp.com',
            databaseURL: 'https://simple-react-firebase.firebaseio.com',
            projectId: 'simple-react-firebase',
            storageBucket: 'simple-react-firebase.appspot.com',
            messagingSenderId: '772412300021'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(thunk));
        const MainNavigator = StackNavigator(
            {
                read: { screen: ReadScreen },
                create: { screen: CreateScreen },
                edit: { screen: EditScreen }
            }
            // {
            //     lazy: true
            // }
        );
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
