import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, NetInfo, ImageBackground } from 'react-native';
import OfflineNotice from './components/OfflineNotice';

export default class HomeScreen2 extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log("Is " + (isConnected ? 'online' : 'offline'))
            if (isConnected) {
                fetch('http://onestopapi.brokzo.com/api/Values/getAllMainCategory')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            isLoading: false,
                            dataSource: responseJson,
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    }).done()
            } else {
                console.log("No Internet");
            }
        })
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else {
            var services = this.state.dataSource
        }


        function _convertToArray(arrayOfObjects, propertryName) {
            return arrayOfObjects.map(function (obj) {
                return obj[propertryName]
            })
        }


        description = _convertToArray(services, 'description')
        categoryName = _convertToArray(services, 'maincategory_name')
        navData = [
            {
                name: categoryName[0],
                api: 'http://onestopapi.brokzo.com/api/Values/getAllServicesCount/Bea-100'
            }, {
                name: categoryName[1],
                api: 'http://onestopapi.brokzo.com/api/Values/getAllServicesCount/Hea-101'
            }, {
                name: categoryName[2],
                api: 'http://onestopapi.brokzo.com/api/Values/getAllServicesCount/Aut-102'
            }
        ]

        return (
            <View style={styles.container}>

                <View style={styles.box}>
                    <ImageBackground source={require("./images/beauty.png")} style={styles.bgImage}>
                        <View style={{ flex: 1 }}></View>
                        <OfflineNotice />
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('CategoryItems', navData[0])}>
                            <View style={styles.content}>
                                <View style={{ flex: 1 }}></View>
                                <Text style={styles.head}>{categoryName[0]}</Text>
                                <Text style={styles.text}>{description[0]}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={styles.box}>
                    <ImageBackground source={require("./images/health.png")} style={styles.bgImage}>
                        <View style={{ flex: 1 }}></View>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('CategoryItems', navData[1])}>
                            <View style={styles.content}>
                                <View style={{ flex: 1 }}></View>
                                <Text style={styles.head}>{categoryName[1]}</Text>
                                <Text style={styles.text}>{description[1]}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <View style={styles.box}>
                    <ImageBackground source={require("./images/automobile.png")} style={styles.bgImage}>
                        <View style={{ flex: 1 }}></View>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('CategoryItems', navData[2])}>
                            <View style={styles.content}>
                                <View style={{ flex: 1 }}></View>
                                <Text style={styles.head}>{categoryName[2]}</Text>
                                <Text style={styles.text}>{description[2]}</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        alignItems: 'center'
    },
    box: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        padding: 5,
    },
    text: {
        // flex: 1,
        fontSize: 8,
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    head: {
        // flex: 1,
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginBottom: 15
    },
    bgImage: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    }
})