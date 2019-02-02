import React from "react";
import PageTemplate from './components/PageBgComponent';
import LoginForm from './components/LoginComponent';

export default class LoginScreen extends React.Component {
	render() {
		return (
			<PageTemplate>
				<LoginForm />
			</PageTemplate>
		)
	}
}