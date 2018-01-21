import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import * as actions from '../actions';

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderWidth: 1 }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    autoCorrect={false}
                />
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
