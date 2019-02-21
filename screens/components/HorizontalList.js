
import React, { Component } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HorizontalList extends Component {

    renderItem({ item }) {
        return (
            < View style={styles.card} key={item.id} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 12,
                        color: 'black',
                    }}>{item.serviceProvider}</Text>
                    <View style={{ alignSelf: 'stretch' }} ></View>
                    <Text style={{
                        alignSelf: 'flex-end',
                        color: item.serviceStatus.toUpperCase() === "SUCCESSFUL" ? 'green' : (item.serviceStatus.toUpperCase() === "CANCELLED" ? 'red' : 'brown'),
                        fontSize: 16,
                    }}>{item.serviceStatus}</Text>
                </View>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '700',
                    padding: 5,
                    color: 'black',
                }}>{item.empName}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'black',
                    }}>{item.serviceType}</Text>
                    <View style={{ alignSelf: 'stretch' }} ></View>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                    }}>{item.price}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingTop: 15,
                }}>
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}><Image style={{
                        alignSelf: 'center',
                        height: 45,
                        width: 45,
                        borderWidth: 3,
                        borderRadius: 25,
                        backgroundColor: 'grey',
                    }}
                        source={require('../images/receipt.png')}
                        resizeMode="cover"></Image><Text style={{ fontSize: 11, color: 'grey' }}>Receipt</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}><Image style={{
                        alignSelf: 'center',
                        height: 45,
                        width: 45,
                        borderWidth: 3,
                        borderRadius: 25,
                        backgroundColor: 'grey',
                    }}
                        source={require('../images/star.png')}
                        resizeMode="cover"></Image><Text style={{ fontSize: 11, color: 'rgb(247, 190, 4)' }}>Rate</Text></TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }}><Image style={{
                        alignSelf: 'center',
                        height: 45,
                        width: 45,
                        borderWidth: 3,
                        borderRadius: 25,
                        backgroundColor: 'grey',
                    }}
                        source={require('../images/refresh.png')}
                        resizeMode="cover"></Image><Text style={{ fontSize: 11, color: 'green' }}>Book</Text></TouchableOpacity>
                </View>
            </View >
        );
    }

    render() {
        return (
            <View style={styles.scrollview}>
                <FlatList
                    horizontal={true}
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    refreshing={true}
                />
            </View>
        )


    }
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        width: 300,
        height: undefined,
        borderWidth: 0.2,
        borderColor: 'grey',
        padding: 10,
        justifyContent: 'space-between',
        marginRight: 5,
    },

})