import React from "react";
import { ImageBackground } from "react-native";

export default class PageTemplate extends React.Component {
    render() {
        return (
            <ImageBackground source={require("../images/bg.png")} style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
            }}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

