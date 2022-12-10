import React from "react";
import AuthHeader from "./AuthHeader";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
	return (
		<div className="App">
			<AuthHeader name={'Регистрация'}/>
			<RegistrationForm />
		</div>
	);
}

export default Registration;