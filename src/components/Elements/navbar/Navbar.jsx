import React from 'react';
import { NavLink } from 'react-router-dom';

import NavHeader from 'components/Elements/navbar/NavHeader/NavHeader';

import styles from './navbar.module.css';
export default function Navbar() {
	return (
		<>
			<NavHeader />
			<nav className={styles.navbar}>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/projects">Projects</NavLink>
					</li>
					<li>
						<NavLink to="/about">About me</NavLink>
					</li>
					<li>
						<NavLink to="/contacts">Contacts</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
