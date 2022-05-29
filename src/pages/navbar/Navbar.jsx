import React from 'react';
import Circles from '../../components/Elements/circle/Circles';

import styles from './navbar.module.css';
export default function Navbar() {
	return (
		<>
			{/* <Circles /> */}
			<nav className={styles.navbar}>
				<ul>
					<li>Home</li>
					<li>Projects</li>
					<li>About me</li>
					<li>Contacts</li>
				</ul>
			</nav>
		</>
	);
}
