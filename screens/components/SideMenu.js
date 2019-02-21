import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 18,
                        color: '#fff',
                    }}>Anonymous Customer</Text>
                    <View>
                        <Image resizeMode="cover" style={styles.logo} source={require('../images/user.png')} />
                    </View>
                </View>
                <View style={styles.sideBody}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}><Text style={styles.text}>HOME</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Service')}><Text style={styles.text}>ACCOUNT</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Grid')}><Text style={styles.text}>APPOINTMENT</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.text}>CUSTOMER SUPPORT</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.text}>SETTINGS</Text></TouchableOpacity>

                    <View style={styles.logout}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.text}>LOGOUT</Text></TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(252, 194, 5)',
        justifyContent: 'space-around',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 20,
    },
    header: {
        alignItems: 'center',
        flex: 0.75,
        justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderWidth: 1,
        borderRadius: 75,
        margin: 5
    },
    sideBody: {
        marginLeft: 20,
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        padding: 10,
        fontWeight: '300'
    },
    logout: {
        flex: 0.85,
        justifyContent: 'flex-end',
    }
})