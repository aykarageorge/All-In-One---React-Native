
import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class HorizontalList extends Component {

    renderItem({ item }) {
        return (
            <Text>{item}</Text>
        );
    }

    render() {
        return (
            <View style={styles.scrollview}>
                {console.log(data)}
                <FlatList data={['1', '2', '3', '4']}
                    renderItem={this.renderItem}
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

    scrollview: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    }
})