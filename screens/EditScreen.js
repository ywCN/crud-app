import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

class EditScreen extends Component {
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
                            // then navigate back, 2nd argument?
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

function mapStateToProps(state) {
    return { editingItem: state.updatingItem };
}

export default connect(mapStateToProps)(EditScreen);
