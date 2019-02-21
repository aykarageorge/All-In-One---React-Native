import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, NetInfo, ImageBackground, Dimensions } from 'react-native';
import OfflineNotice from './components/OfflineNotice';
import { Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import EmptyListMessage from './components/EmptyListMessage';
import GridView from './components/GridView';

const deviceWidth = Dimensions.get('window').width;

export default class SubCategoryItems extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // title: 'Sub Category' //navigation.state.params.name,
        };
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true,
    //         dataSource: null,
    //     }
    // }

    // componentDidMount() {
    //     api = this.props.navigation.state.params.api
    //     NetInfo.isConnected.fetch().then(isConnected => {
    //         console.log("Is " + (isConnected ? 'online' : 'offline'))
    //         if (isConnected) {
    //             fetch(api)
    //                 .then((response) => response.json())
    //                 .then((responseJson) => {
    //                     console.log(responseJson);
    //                     this.setState({
    //                         isLoading: false,
    //                         dataSource: responseJson,
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     console.error(error);
    //                 }).done()
    //         } else {
    //             console.log("No Internet");
    //         }
    //     })
    // }

    render() {
        var images = [];

        for (var i = 0; i < 3; i++) {
            images.push(
                <View key={i} style={styles.box}>
                    <ImageBackground style={styles.image} opacity={0.6} resizeMode='cover' source={require('./images/banner.jpg')}>
                        <View style={{
                            flex: 1,
                            alignItems: 'stretch',
                            padding: 20,
                        }}>
                            <Text style={styles.text1}>Banner 1</Text>
                            <Text style={styles.text2}>Header</Text>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.imageScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {images}
                </ScrollView>
                <View style={{ flex: 2 }}>
                    <GridView />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceWidth - 30,
        flex: 1,
        flexDirection: 'row',
    },
    imageScroll: {
        flex: 1,
        backgroundColor: 'rgb(81, 10, 47)',
    },
    box: {
        flex: 1,
        backgroundColor: 'black',
        marginRight: 2
    },
    text1: {
        color: 'rgb(252, 194, 5)',
        justifyContent: 'flex-end',
        fontSize: 20
    },
    text2: {
        color: '#fff',
        justifyContent: 'flex-end',
        fontSize: 16
    },
})