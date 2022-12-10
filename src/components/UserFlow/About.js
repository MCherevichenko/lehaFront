import React from "react";
import { Link } from "react-router-dom";
import '../../index.css';
const About = () => {
	return (
		<div>
			Наша компания занимается разработкой программного обеспечения различного уровня сложности уже более 8 лет.
			<div className="back">
				<Link to='/profile' className="back" variant="contained">Назад</Link>
			</div>
		</div>
	)
}

export default About;