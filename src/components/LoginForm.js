import React, { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from "../store";
import { loginUser } from "../store/auth/actionCreators";
import '../index.css'
import { Link } from 'react-router-dom';

function LoginForm() {
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
	}

	const handleSubmit = async () => {
		const user = {
			email: email,
			password: password
		}
		await axios.post('http://localhost:5000/auth/login', user, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
			.then(res => {
				localStorage.setItem('accessToken',res.data.accessToken);
				localStorage.setItem('userId', res.data.checkUser.userId);
				localStorage.setItem('email', res.data.checkUser.email);
				dispatch(loginUser({ email, password }));
			})
	}

	return (
		<>
			<div className="form">
				<div className="form-body">
					<div className="email">
						<label className="form__label" label="email">Email </label>
						<input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
					</div>
					<div className="password">
						<label className="form__label" label="password">Password </label>
						<input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
					</div>
				</div>
				<div className="footer">
					<button onClick={() => handleSubmit()} type="submit" className="btn">Вход</button>
				</div>
				<Link to="/reg" className='text_li'>Регистрация</Link>
			</div>
		</>
	)
}
export default LoginForm;