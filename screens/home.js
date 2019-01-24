import { React } from 'react';
import { Text, View, Button } from "react-native";
import { Component } from 'react';

export default class HomeScreen extends Component.React {
    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                />
            </View>
        );
    }
}
