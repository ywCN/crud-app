import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

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
                        // call action
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default AddScreen;
