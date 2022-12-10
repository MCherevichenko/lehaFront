import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserPage from "./UserFlow/UserPage";

const Header = () => {
	const isLoggedIn = useSelector(
		(state) => !!state.auth.authData.accessToken
	);

	return (
		<nav>
			<ul>
				<li>
					<Link to="/profile">Main</Link>
				</li>
				{isLoggedIn && (
					<React.Fragment>
						<UserPage />
					</React.Fragment>
				)}
			</ul>
		</nav>
	);
};

export default Header;