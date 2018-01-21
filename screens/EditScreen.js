import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateItem, deleteItem } from '../actions';

class EditScreen extends Component {
    componentWillMount() {
        console.log(this.props.editingItem);
        this.setState({ text: this.props.editingItem.item });
    }
    render() {
        const { uid } = this.props.editingItem;

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
                            this.props.updateItem(this.state.text, uid, () => {
                                this.props.navigation.goBack();
                            });
                        }}
                    />
                    <Button
                        title="Delete"
                        onPress={() => {
                            this.props.deleteItem(uid, () => {
                                this.props.navigation.goBack();
                            });
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

export default connect(mapStateToProps, { updateItem, deleteItem })(EditScreen);
