import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../index.css';



const CreateOrder = () => {
	const [type, setAge] = React.useState('');
	const [price, setPrice] = React.useState(0);
	const [open, setOpen] = React.useState(false);

	const Alert = React.forwardRef(function Alert(
		props,
		ref,
	) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	
	const handleChange = (event) => {
		setAge(event.target.value);
		switch(event.target.value) {
			case 'веб приложение': 
				setPrice(50000);
				break;
			case 'приложение для рабочего стола':
				setPrice(25000);
				break;
			case 'мобильное приложение':
				setPrice(40000);
				break;
			case 'игра':
				setPrice(10000);
				break;
			default:
				setPrice(0);
				break;
		}
	};
	
	const handleSubmit = async () => {
		if (price && type) {
			const order = {
				type: type,
				price: price,
				owner: localStorage.getItem('userId'),
			}
			await axios.post('http://localhost:5000/order/create', order, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
				.then(res => {
					return res.data; // тут ответ лежит
				});
			setOpen(true);
		}
	}
	
	const handleClose = (_, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	
	return (
		(
			<><div style={{ display: 'flex' }}>
				<Box sx={{ minWidth: 500, marginBottom: 5 }}>
					<FormControl style={{ width: 300 }}>
						<InputLabel id="demo-simple-select-label">Тип приложения</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={type}
							label="Type"
							onChange={handleChange}
						>
							<MenuItem value={'веб приложение'}>веб приложение</MenuItem>
							<MenuItem value={'приложение для рабочего стола'}>приложение для рабочего стола</MenuItem>
							<MenuItem value={'мобильное приложение'}>мобильное приложение</MenuItem>
							<MenuItem value={'игра'}>игра</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<TextField id="outlined-basic" label="Цена" variant="outlined" disabled={true} value={price} />
			</div>
			<div style={{ marginBottom: 5 }}>
					<Button variant="contained" onClick={() => handleSubmit()}>Заказать</Button>
			</div>
			<div className="back">
				<Link to='/profile' className="back" variant="contained">Назад</Link>
			</div>
				<div className="back" style={{ backgroundColor: 'lightgreen', border: 'none' }}>
					<Link to='/myorders' className="back" variant="contained" style={{ backgroundColor: 'lightgreen', border: 'none' }}>Мои заказы</Link>
			</div>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
						Заказ создан, спасибо, что пользуетесь нашим сервисом!
					</Alert>
				</Snackbar>
			</>
		)
	)
}

export default CreateOrder;