import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

const item = {
    id: 1,
    content: 'mie'
};

class ListScreen extends Component {
    renderItems() {
        return (
            <Card key={item.id}>
                <Text>{item.content}</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Button
                        title="Edit"
                        onPress={() => navigation.navigate('edit')}
                    />
                    <Button
                        title="Delete"
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
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add Item"
                        onPress={() => {
                            this.props.navigation.navigate('add');
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
};

export default ListScreen;
