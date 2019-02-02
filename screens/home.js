import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import DropDownBox from './components/DropDownComponent';
import HorizontalList from './components/HorizontalList';

export default class HomeScreen extends Component {
    render() {
        services = ['All Services', 'Beauty', 'Health', 'Car Service'];
        locations = ['Manama', 'Riffa', 'Muharraq', 'Bani Jamra', 'Madinat Hamad', 'A\'ali', 'Al Jasra', 'Madinat Isa'];

        pastBookingData = [
            {
                id: 1,
                serviceProvider: "Beauty Lines Saloon Spa",
                serviceStatus: "Successful",
                empName: "Arjun Reddy",
                serviceType: "Thai Massage",
                price: "18 BHD",
            },
            {
                id: 2,
                serviceProvider: "Car Care",
                serviceStatus: "Payment Pending",
                empName: "DQ",
                serviceType: "Tyre change",
                price: "50 BHD",
            },
            {
                id: 3,
                serviceProvider: "Health Care",
                serviceStatus: "Successful",
                empName: "Dr. Chandra Gupta Maurya",
                serviceType: "Monthly Checkup",
                price: "25 BHD",
            },
            {
                id: 4,
                serviceProvider: "Petinary Homes",
                serviceStatus: "Booked",
                empName: "Dr. Jim Carry",
                serviceType: "Vet Care",
                price: "18 BHD",
            },
            {
                id: 5,
                serviceProvider: "Car Care",
                serviceStatus: "Successful",
                empName: "Diasy De'Zousa",
                serviceType: "Car Wash and Cleaning",
                price: "22 BHD",
            },
            {
                id: 6,
                serviceProvider: "Bikerz Zone",
                serviceStatus: "Cancelled",
                empName: "Fahad Fazil",
                serviceType: "Maintenance",
                price: "15 BHD",
            },
        ];

        return (
            <View style={styles.container}>
                <View style={styles.box0}>
                    <Text style={styles.heading}>BOOK SERVICES IN BAHRAIN </Text>
                </View>
                <View style={styles.box1}>
                    <View style={{ flex: 1.5 }}>
                        <View style={styles.locationBox}>
                            <DropDownBox width={300} data={services} />
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
                        <DropDownBox width={350} data={locations} />
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
                        <HorizontalList></HorizontalList>
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
        // borderColor: 'red',
        // borderWidth: 3,
    },
    box3: {
        flex: 1.75,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        marginTop: 10,
        // justifyContent: 'space-around',
        // borderColor: 'red',
        // borderWidth: 3,
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
        alignItems: 'center',
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
        width: 300,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    },
})