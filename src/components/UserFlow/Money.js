import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../index.css';
const Money = () => {
	const id = localStorage.getItem('userId');
	const [debt, setDebt] = useState(0);
	function getDebt(userId) {
		return axios.get(`http://localhost:5000/order/money/${userId}`).then(data => data.data);
	}
	useEffect(() => {
		if (id) {
			getDebt(id).then(debt => {
				setDebt(debt.debt);
			})
		}
	});
	
	return (
		<>
		<div className="money">
				<div className="back" >
					<Link to='/profile' className="back" variant="contained">Назад</Link>
				</div>
			<p>Вы должны оплатить {debt} рублей</p>
			<Link to='/myorders' className="back" variant="contained">Слишком дорого?</Link>
		</div>
		</>
	)
}

export default Money;