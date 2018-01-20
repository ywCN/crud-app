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
                <View>
                    <View>
                        <Text>{item.content}</Text>
                    </View>
                    {/* <View>
                        <Button
                            title="Edit"
                            backgroundColor="#03A9F4"
                            onPress={() => navigation.navigate('edit')}
                        />
                        <Button
                            title="Delete"
                            backgroundColor="#03A9F4"
                            onPress={() => this.deleteItem(item.id)}
                        />
                    </View> */}
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
                        large
                        title="Add Item"
                        backgroundColor="#009688"
                        onPress={this.onButtonPress}
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
