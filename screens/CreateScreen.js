import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { createItem } from '../actions';

class CreateScreen extends Component {
    state = { text: '' };

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
                        this.props.createItem(this.state.text, () => {
                            this.props.navigation.goBack();
                        });
                    }}
                />
            </View>
        );
    }
}

export default connect(null, { createItem })(CreateScreen);
