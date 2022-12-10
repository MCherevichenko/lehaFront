import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../../index.css';
import { Link } from "react-router-dom";

const handleSubmit = async (order) => {
	axios.delete(`http://localhost:5000/order/delete/${order.orderId}`, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
		.then(res => {
			return res.data;
		})
}

const handleDeleteAll = async () => {
	const userId = localStorage.getItem('userId');
	await axios.delete(`http://localhost:5000/order/${userId}`, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	})
		.then(res => {
			return res.data;
		})
}

const MyOrders = () => {
	const [list, setList] = useState([]);
	const id = localStorage.getItem('userId');
	function getOrders(userId) {
		return axios.get(`http://localhost:5000/order/${userId}`).then(data => data.data);
	}
	useEffect(() => {
		if(id){
			getOrders(id).then(items => {
				setList(items);
			})
		}
	});
	
	return (
		<>
			<div className="ul_block">
				<div className="order_title">Мои заказы</div>
				<div className="back">
					<Link to='/profile' className="back" variant="contained">Назад</Link>
				</div>
				<Button
					variant="contained"
					color="error"
					onClick={() => handleDeleteAll()}
					style={{marginTop: 10}}
				>
					УДАЛИТЬ ВСЕ
				</Button>
				<ul className="ul_orders">
					{
						list.length ? list.map(item =>
							<li key={item.orderId} className='order_li'>
								<p>Тип приложения: {item.type}</p>
								<p>Цена: {item.price}</p>
								<Button
									variant="contained" 
									color="error"
									onClick={() => handleSubmit(item)}
								>
									УДАЛИТЬ
								</Button>
							</li>
						) : 'У вас нет активных заказов'}
				</ul>
			</div>
		</>
	)
}

export default MyOrders;