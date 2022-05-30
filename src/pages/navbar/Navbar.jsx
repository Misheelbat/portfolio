import React from 'react';
import { Link } from 'react-router-dom';
import Circles from '../../components/Elements/circle/Circles';

import styles from './navbar.module.css';
export default function Navbar() {
	return (
		<>
			{/* <Circles /> */}
			<nav className={styles.navbar}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>About me</li>
					<li>Contacts</li>
				</ul>
			</nav>
		</>
	);
}
