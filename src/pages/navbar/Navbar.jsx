import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './navbar.module.css';
export default function Navbar() {
	return (
		<>
			<nav className={styles.navbar}>
				<ul>
					<li>Home</li>
					<li>Projects</li>
					<li>About me</li>
					<li>Contacts</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}
