import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MenuButton from '../../components/Elements/menuButton/MenuButton';

import styles from './navigation.module.css';
export default function Navigation() {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<header className={styles.navHeader}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<nav>
				<ul data-open={open} className={styles.navlinks}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="#projects">Projects</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<MenuButton open={open} onClick={toggleMenu} />
		</header>
	);
}
