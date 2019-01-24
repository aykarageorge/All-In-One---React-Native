import React from "react";
import { createStackNavigator } from 'react-navigation';
import { Text, View, Image, StyleSheet } from "react-native";
import PageTemplate from './components/PageBgComponent';

export default class SplashScreen extends React.Component {
	render() {
		return (
			<PageTemplate>
				<View style={styles.logo}><Image resizeMode="contain" style={styles.logo} source={require('./images/logo.png')} /></View>
				<View style={styles.backgroundFooter} >
					<Text>Made with pride in Bahrain</Text>
					<Text style={styles.text2}>Version 1.01</Text>
				</View>
			</PageTemplate>
		);
	}
}

// const AppStackNavigator = createStackNavigator({
// 	Login: LoginScreen,
// 	Home: SplashScreen
// })

const styles = StyleSheet.create({
	logo: {
		flex: 1,
		resizeMode: 'contain',
		height: undefined,
		width: undefined,
	},
	backgroundFooter: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 35,
		flex: 1,
		justifyContent: 'flex-end',
	},
	text1: {
		alignSelf: 'center',
	},
	text2: {
		alignSelf: 'center',
		fontSize: 12,
	},
})
