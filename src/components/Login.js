import React from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<div className="App">
			<AuthHeader name={'Вход'} />
			<LoginForm />
		</div>
	);
}

export default Login;