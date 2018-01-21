import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setUpdateItem, itemsRead } from '../actions';

const uid = '-L3LFnxZ8SRXmvF49llb';

class ReadScreen extends Component {
    componentWillMount() {
        this.props.itemsRead();
    }
    renderItems() {
        // if (this.props.items) {
        //     console.log(this.props.items);
        //     debugger;
        //     console.log(this.props.items.uid);
        //     debugger;

        //     return (
        //         <View key={this.props.items.uid}>
        //             <Button
        //                 title={this.props.items.uid.item}
        //                 onPress={() => {
        //                     this.props.setUpdateItem(uid, val);
        //                     this.props.navigation.navigate('edit');
        //                 }}
        //             />
        //         </View>
        //     );
        // }
        if (this.props.items) {
            _.map(this.props.items, (val, uid) => {
                console.log(val.item, uid);
                // debugger;
                return <Text>val.item</Text>;
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
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>a</Text>
                {this.renderItems()}
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
