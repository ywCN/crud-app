import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class AddScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>AddScreen</Text>
                <Text>AddScreen</Text>
                <Text>AddScreen</Text>
                <Text>AddScreen</Text>
                <Text>AddScreen</Text>
                <Button
                    title="Save"
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default AddScreen;
