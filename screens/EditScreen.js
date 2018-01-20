import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class EditScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderWidth: 1 }}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    autoCorrect={false}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}
                >
                    <Button
                        title="Save"
                        onPress={() => {
                            // call action to update this item in firebase
                            this.props.navigation.goBack();
                        }}
                    />
                    <Button
                        title="Delete"
                        onPress={() => {
                            // call action to update this item in firebase
                            this.props.navigation.goBack();
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default EditScreen;
