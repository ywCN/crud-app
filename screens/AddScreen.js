import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AddScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>AddScreen</Text>
                    <Text>AddScreen</Text>
                    <Text>AddScreen</Text>
                    <Text>AddScreen</Text>
                    <Text>AddScreen</Text>
                </View>
                <Button
                    title="Save"
                    onPress={() => {
                        // call action to create this item in firebase
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default AddScreen;
