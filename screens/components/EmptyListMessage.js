import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height - 60;

export default class EmptyListMessage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image resizeMode="cover" style={styles.logo} source={require('../images/sad-face.png')} />
                </TouchableOpacity>
                <Text style={styles.text}>We are sorry to be not able to provide you service in this category. But don't you worry as we will be back soon with a good news.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderWidth: 2,
        width,
        height,
    },
    logo: {
        height: 150,
        width: 150,
    },
    text: {
        fontSize: 14,
        padding: 20,
        textAlign: 'center',
        lineHeight: 40,
        textShadowOffset: {
            width: 0.7,
            height: 0.7,
        },
        textShadowColor: 'black',
        textShadowRadius: 5,

    }
})