import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator, NetInfo, Dimensions } from 'react-native';
import DropDownBox from './components/DropDownComponent';
import HorizontalList from './components/HorizontalList';
import OfflineNotice from './components/OfflineNotice';


const width = (Dimensions.get('window').width);

export default class HomeScreen extends Component {
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

        // services = [{ 'service': 'All Services' }, { 'service': 'Beauty' }, { 'service': 'Health' }, { 'service': 'Car Service' }];
        locations = [{ 'place': 'Manama' }, { 'place': 'Riffa' }, { 'place': 'Muharraq' }, { 'place': 'Bani Jamra' }, { 'place': 'Madinat Hamad' }, { 'place': 'A\'ali' }, { 'place': 'Al Jasra' }, { 'place': 'Madinat Isa' }];
        pastBookingData = [
            {
                id: "1",
                serviceProvider: "Beauty Lines Saloon Spa",
                serviceStatus: "Successful",
                empName: "Arjun Reddy",
                serviceType: "Thai Massage",
                price: "18 BHD",
            },
            {
                id: "2",
                serviceProvider: "Car Care",
                serviceStatus: "Payment Pending",
                empName: "DQ",
                serviceType: "Tyre change",
                price: "50 BHD",
            },
            {
                id: "3",
                serviceProvider: "Health Care",
                serviceStatus: "Successful",
                empName: "Dr. Chandra Gupta Maurya",
                serviceType: "Monthly Checkup",
                price: "25 BHD",
            },
            {
                id: "4",
                serviceProvider: "Petinary Homes",
                serviceStatus: "Booked",
                empName: "Dr. Jim Carry",
                serviceType: "Vet Care",
                price: "18 BHD",
            },
            {
                id: "5",
                serviceProvider: "Car Care",
                serviceStatus: "Successful",
                empName: "Diasy De'Zousa",
                serviceType: "Car Wash and Cleaning",
                price: "22 BHD",
            },
            {
                id: "6",
                serviceProvider: "Bikerz Zone",
                serviceStatus: "Cancelled",
                empName: "Fahad Fazil",
                serviceType: "Maintenance",
                price: "15 BHD",
            },
        ];

        function _convertToArray(arrayOfObjects, propertryName) {
            return arrayOfObjects.map(function (obj) {
                return obj[propertryName]
            })
        }

        return (
            <View style={styles.container}>
                <OfflineNotice />
                <View style={styles.box0}>
                    <Text style={styles.heading}>BOOK SERVICES IN BAHRAIN </Text>
                </View>
                <View style={styles.box1}>
                    <View style={{ flex: 1.5 }}>
                        <View style={styles.locationBox}>
                            <DropDownBox width={width - 50} data={_convertToArray(services, 'maincategory_name')} />
                            <TouchableOpacity>
                                <View style={styles.gps}>
                                    <Image resizeMode="contain" style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        width: undefined,
                                        height: undefined,
                                    }} source={require('./images/location.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <DropDownBox width={width} data={_convertToArray(locations, 'place')} />
                    </View>
                    <View style={{
                        padding: 10,
                        justifyContent: 'center',
                    }}>
                        <TouchableOpacity style={styles.findbutton}>
                            <Text style={styles.buttonText} >FIND SERVICES</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Box 3 */}
                <View style={styles.box3}>
                    <View style={styles.box3head}>
                        <View >
                            <Text style={styles.heading}>PAST BOOKINGS </Text>
                        </View >
                        <View style={{ alignSelf: 'stretch' }} ></View>
                        <View>
                            <Text style={styles.seeall}>See all </Text>
                        </View>
                    </View>

                    <View style={styles.box3card} >
                        <HorizontalList data={pastBookingData}></HorizontalList>
                    </View>

                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 10,
    },
    box0: {
        flex: .75,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    box1: {
        flex: 1,
        width: undefined,
        height: undefined,
        justifyContent: 'space-between',
        // borderWidth: 3,
    },
    box3: {
        flex: 1.75,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        marginTop: 10,
    },
    box3head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    seeall: {
        alignSelf: 'flex-end',
        color: 'rgb(247, 190, 4)',
        fontWeight: 'bold',
    },
    box3card: {
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
    },

    locationBox: {
        flexDirection: 'row',
        marginBottom: 5,
        alignSelf: 'center',
    },
    gps: {
        backgroundColor: 'rgb(247, 190, 4)',
        borderWidth: 3,
        width: 45,
        height: 45,
        borderRadius: 25,
        borderColor: 'rgb(247, 190, 4)',
    },
    heading: {
        color: '#000',
        fontWeight: 'bold',
    },
    findbutton: {
        backgroundColor: 'rgb(247, 190, 4)',
        paddingVertical: 15,
        borderRadius: 20,
        width: width - 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    }
})