import React, { Component } from 'react';
import { View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setUpdateItem, itemsRead } from '../actions';

const item = {
    uid: 1,
    content: 'mie'
};

class ReadScreen extends Component {
    componentWillMount() {
        this.props.itemsRead();
    }
    renderItems() {
        // to do: map object from firebase into an array of views
        return (
            <View key={item.id}>
                <Button
                    title={item.content}
                    onPress={() => {
                        this.props.setUpdateItem(item);
                        // this.props.navigation.navigate('edit');
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>{this.renderItems()}</ScrollView>
                <Button
                    title="Add Item"
                    onPress={() => this.props.navigation.navigate('create')}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { items: state.readingItems };
}

export default connect(mapStateToProps, { setUpdateItem, itemsRead })(
    ReadScreen
);
