import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { loginUser } from '../store/auth/actionCreators';
function RegistrationForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const dispatch = useAppDispatch();
	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
		if (id === "confirmPassword") {
			setConfirmPassword(value);
		}

	}
	
	const handleSubmit = async () => {
		if(password === confirmPassword) {
			const user = {
				email: email,
				password: password
			}
			await axios.post('http://localhost:5000/auth/register',user,{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(res => {
				localStorage.setItem('accessToken', res.data.accessToken);
				localStorage.setItem('userId', res.data.checkUser.userId);
				localStorage.setItem('email', res.data.checkUser.email);
				dispatch(loginUser({ email, password }));
			})
		}
	}

	return (
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
				<div className="confirm-password">
					<label className="form__label" label="confirmPassword">Confirm Password </label>
					<input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
				</div>
			</div>
			<div className="footer">
				<button onClick={() => handleSubmit()} type="submit" className="btn">Зарегистрироваться</button>
			</div>
			<Link to="/" className='text_li'>Вход</Link>
		</div>
	)
}
export default RegistrationForm;