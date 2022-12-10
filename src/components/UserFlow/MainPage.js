import React from "react";
import { useSelector } from "react-redux";
import '../../index.css';

import Login from "../../components/Login";
import UserPage from "./UserPage";

const MainPage = () => {
	const isLoggedIn = useSelector(
		(state) => !!state.auth.authData.accessToken
	);

	const renderProfile = () => (
		<div>
			<UserPage />
			<div className="main_text">
				Добро пожаловать на наш сайт. Здесь вы сможете заказать разработку необходимого программного обеспечения.
			</div>
		</div>
	);

	return (
		<div>
			{isLoggedIn ? renderProfile() : <Login />}
		</div>
	);
};

export default MainPage;