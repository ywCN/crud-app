import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

const item = {
    id: 1,
    content: 'mie'
};

class ListScreen extends Component {
    componentWillMount() {
        // call action to fetch updated list of item
    }
    renderItems() {
        return (
            <Card key={item.id}>
                <Text>{item.content}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        style={{ width: 100 }}
                        title="Edit"
                        onPress={() => this.props.navigation.navigate('edit')}
                    />
                    <Button
                        style={{ width: 100 }}
                        title="Delete"
                        // call action to del item in firebase
                        onPress={() => this.deleteItem(item.id)}
                    />
                </View>
            </Card>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>{this.renderItems()}</ScrollView>
                <Button
                    title="Add Item"
                    onPress={() => this.props.navigation.navigate('add')}
                />
            </View>
        );
    }
}

export default ListScreen;
