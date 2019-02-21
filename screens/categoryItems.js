import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, NetInfo, ImageBackground } from 'react-native';
import OfflineNotice from './components/OfflineNotice';
import { Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import EmptyListMessage from './components/EmptyListMessage';

export default class CategoryItems extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.name,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount() {
        api = this.props.navigation.state.params.api
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log("Is " + (isConnected ? 'online' : 'offline'))
            if (isConnected) {
                fetch(api)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson);
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


    renderItem({ item }) {
        // navData = {
        //     name= item.service_Name,
        //     subAPI = 'input api path'
        // }
        return (
            <View style={styles.box}>
                <TouchableOpacity key={item.service_uniqueid} style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('SubCategoryItems')}>
                    <ImageBackground source={{ uri: item.photo }} style={styles.bgImage}>

                        <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                            <View style={styles.polygon}></View>
                            <View style={styles.content}>
                                <Text style={styles.head}>{item.service_Name}</Text>
                                <Text style={styles.text}>{item.count} Services available</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else {
            var itemList = this.state.dataSource
        }

        return (
            <View style={styles.container}>
                <OfflineNotice />
                <FlatList
                    data={itemList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.service_uniqueid}
                    refreshing={true}
                    ListHeaderComponent={() => (!itemList.length ? <EmptyListMessage /> : null)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        alignItems: 'stretch'
    },
    box: {
        height: 290,
        alignSelf: 'stretch',
        padding: 5,
    },
    text: {
        fontSize: 12,
    },
    head: {
        fontWeight: '900',
        fontSize: 16,
    },
    content: {
        width: 150,
        position: 'absolute',
        paddingBottom: 50
    },
    bgImage: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    polygon: {
        flex: 1,
        width: 180,
        borderBottomWidth: 290,
        borderBottomColor: '#fff',
        borderRightWidth: 90,
        borderRightColor: 'transparent',
        borderStyle: 'solid',

    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    }
})