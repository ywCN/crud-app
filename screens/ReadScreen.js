import _ from 'lodash';
import React, { Component } from 'react';
import { View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setUpdateItem, itemsRead } from '../actions';

class ReadScreen extends Component {
    componentWillMount() {
        this.props.itemsRead();
    }
    renderItems() {
        const uid = '-L3LFnxZ8SRXmvF49llb';
        return (
            <View key={this.props.items.uid}>
                <Button
                    title={this.props.items.uid.item}
                    onPress={() => {
                        this.props.setUpdateItem(uid, val);
                        this.props.navigation.navigate('edit');
                    }}
                />
            </View>
        );
        // _.map(this.props.items, (val, uid) => {
        //     console.log(val.item, uid);
        //     return (
        //         <View key={uid}>
        //             <Button
        //                 title={val.item}
        //                 onPress={() => {
        //                     this.props.setUpdateItem(uid, val);
        //                     this.props.navigation.navigate('edit');
        //                 }}
        //             />
        //         </View>
        //     );
        // });
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

function mapStateToProps({ readingItems }) {
    return { items: readingItems };
}

export default connect(mapStateToProps, { setUpdateItem, itemsRead })(
    ReadScreen
);
