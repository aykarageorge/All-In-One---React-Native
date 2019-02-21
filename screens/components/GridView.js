import React, { Component } from 'react'
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";

export default class GridView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            GridListItems: [
                { key: "Skptricks" },
                { key: "Sumit" },
                { key: "Amit" },
                { key: "React" },
                { key: "React Native" },
                { key: "Java" },
                { key: "Javascript" },
                { key: "PHP" },
                { key: "AJAX" },
                { key: "Android" },
                { key: "Selenium" },
                { key: "HTML" },
                { key: "Database" },
                { key: "MYSQL" },
                { key: "SQLLite" },
                { key: "Web Technology" },
                { key: "CSS" },
                { key: "Python" },
                { key: "Linux" },
                { key: "Kotlin" },
            ]
        };
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.GridListItems}
                    renderItem={({ item }) =>
                        <View style={styles.Grid}>
                            <Text style={styles.GridText} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                        </View>}
                    numColumns={3}
                    ItemSeparatorComponent={this.renderSeperator}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    Grid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        borderColor: 'grey',
        borderRightWidth: 0.25,
        borderBottomWidth: 0.20,
        margin: 2,
        backgroundColor: 'rgb(252, 252, 252)'
    },
    GridText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#000',
    }
});
