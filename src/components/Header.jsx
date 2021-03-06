import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>
				<h1 className='Header-title'>Platzi Conf Merch</h1>
			</Link>
			<div className='Header-checkout'>
				<Link to='/checkout'>
					<i className='fas fa-shopping-basket fa-2x' />
				</Link>
			</div>
		</div>
	);
};

export default Header;
