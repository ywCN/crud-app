import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setUpdateItem, itemsRead } from '../actions';

class ReadScreen extends Component {
    componentWillMount() {
        this.props.itemsRead();
    }
    renderItems() {
        _.map(this.props.items, (val, uid) => {
            console.log(val.item, uid);
            // debugger;
            return <Text>uid</Text>;
            // return (
            //     <View key={uid}>
            //         <Button
            //             title={val.item}
            //             onPress={() => {
            //                 this.props.setUpdateItem(uid, val);
            //                 this.props.navigation.navigate('edit');
            //             }}
            //         />
            //     </View>
            // );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderItems()}
                <Button
                    title="Add Item"
                    onPress={() => this.props.navigation.navigate('create')}
                />
            </ScrollView>
        );
    }
}

function mapStateToProps({ readingItems }) {
    return { items: readingItems };
}

export default connect(mapStateToProps, { setUpdateItem, itemsRead })(
    ReadScreen
);
