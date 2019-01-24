import React from "react";
import { Button } from "react-native";
import PageTemplate from './components/PageBgComponent';
import LoginForm from './components/LoginComponent';

export default class LoginScreen extends React.Component {
	render() {
		return (
			<PageTemplate>
				<LoginForm />
				<Button
					title="Add some friends"
					onPress={() =>
						this.props.navigation.navigate('Friends')
					}
				/>
			</PageTemplate>
		)
	}
}