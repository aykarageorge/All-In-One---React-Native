import React from "react";
import PageTemplate from './components/PageBgComponent';
import { Text, View, TextInput, CheckBox, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';

const width = (Dimensions.get('window').width - 20);

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		header: null,
	}
	render() {
		return (
			<PageTemplate>
				<View style={styles.container}>
					<View style={styles.box0}>
						<Text style={styles.loginText}>Login</Text>
					</View>
					<View style={styles.box1}>
						<KeyboardAvoidingView behavior="padding">
							<TextInput style={styles.input}
								autoCapitalize="none"
								onSubmitEditing={() => this.passwordInput.focus()}
								autoCorrect={false}
								underlineColorAndroid="rgb(94, 91, 82)"
								keyboardType='email-address'
								returnKeyType="next"
								placeholder='Email or Mobile Num' />

							<TextInput style={styles.input}
								returnKeyType="go"
								ref={(input) => this.passwordInput = input}
								underlineColorAndroid="rgb(94, 91, 82)"
								placeholder='Password'
								secureTextEntry />
						</KeyboardAvoidingView>
						<View style={styles.otherOptions}>
							<View style={{ flexDirection: 'row' }}>
								<CheckBox
									checkedIcon='dot-circle-o'
									uncheckedIcon='circle-o'
								/>
								<Text style={styles.otherOptionsText}> Remember Me</Text>
							</View>
							<Text style={styles.otherOptionsText}> Forgot Password?</Text>
						</View>

						<TouchableOpacity
							style={styles.loginButtonContainer}
							onPress={() => this.props.navigation.navigate('Home')}
						>
							<Text style={styles.buttonText} >LOGIN</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.line}>
						<View
							style={{
								backgroundColor: 'grey',
								height: 2,
								alignSelf: 'center',
								width: width / 4,
							}}
						/>
						<Text> OR CONNECT WITH </Text>
						<View
							style={{
								backgroundColor: 'grey',
								height: 2,
								alignSelf: 'center',
								width: width / 4,
							}}
						/>
					</View>
					<View style={styles.box2}>
						<TouchableOpacity style={styles.fbButtonContainer} >
							<Text style={styles.buttonText}>Facebook</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={styles.signupButtonContainer} >Sign Up</Text>
						</TouchableOpacity>
					</View>

				</View>
			</PageTemplate>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
	},
	box0: {
		flex: 0.60,
		flexDirection: 'column',
		justifyContent: 'flex-end'
	},
	box1: {
		flex: 1.75,
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	line: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	box2: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	loginText: {
		color: '#000',
		fontWeight: 'bold',
	},
	input: {
		height: 40,
		padding: 12,
		color: '#000',
		width,
	},
	loginButtonContainer: {
		backgroundColor: 'rgb(247, 190, 4)',
		paddingVertical: 15,
		borderRadius: 20,
		width,
		alignSelf: 'center',
	},
	fbButtonContainer: {
		backgroundColor: 'rgb(59,89,152)',
		paddingVertical: 15,
		borderRadius: 20,
		width,
		alignSelf: 'center',
	},
	signupButtonContainer: {
		backgroundColor: 'white',
		paddingVertical: 15,
		borderWidth: 3,
		borderRadius: 20,
		borderColor: 'rgb(247, 190, 4)',
		color: 'rgb(247, 190, 4)',
		width,
		alignSelf: 'center',
		textAlign: 'center',
		fontWeight: '900',
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700',
	},
	otherOptions: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	otherOptionsText: {
		color: 'rgb(247, 190, 4)',
		alignSelf: 'center',
		fontWeight: '700',
	},
})