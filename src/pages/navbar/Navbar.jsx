import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/about">About me</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
			</ul>
		</nav>
	);
}
