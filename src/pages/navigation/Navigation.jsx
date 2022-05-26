import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MenuButton from '../../components/Elements/menuButton/MenuButton';

import styles from './navigation.module.css';
export default function Navigation() {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<>
			<header className={styles.navHeader}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<nav>
					<ul data-open={open} className={styles.navlinks}>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/about">About</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
				</nav>
				<MenuButton open={open} onClick={toggleMenu} />
			</header>
			<Outlet />
		</>
	);
}
