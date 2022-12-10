import React from 'react';
function AuthHeader({ name }) {
	return (
		<nav className="bg-dark navbar-dark navbar" style={{marginLeft: 700}}>
			<div className="row col-12 d-flex justify-content-center text-white">
				<h3 style={{color: 'white'}}>{name}</h3>
			</div>
		</nav>
	)
}
export default AuthHeader;