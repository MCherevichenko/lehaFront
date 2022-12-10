import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { logoutUser } from "../../store/auth/actionCreators";
import '../../index.css';

const UserPage = () => {
	const dispatch = useAppDispatch();
	return <>
	<ul className="complex_list">
		<li>
			<Link to="/create">Создать заказ</Link>
		</li>
		<li>
			<Link to="/money">Сколько я должен</Link>
		</li>
		<li>
			<Link to="/myorders">Мои заказы</Link>
		</li>
		<li>
			<Link to="/about">О компании</Link>
		</li>
		<li>
			<button onClick={() => dispatch(logoutUser())} style={{height: 44}}>Выйти</button>
		</li>
	</ul>
		<div className="main_text">
			Добро пожаловать на наш сайт. Здесь вы сможете заказать разработку необходимого программного обеспечения.
		</div>
	</>
}

export default UserPage;