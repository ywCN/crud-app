import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class EditScreen extends Component {
    render() {
        return (
            <View>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Text>EditScreen</Text>
                <Button
                    title="Save"
                    onPress={() => {
                        // call action to update this item in firebase
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default EditScreen;
