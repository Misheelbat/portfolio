import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import styles from './navigation.module.css';
export default function Navigation() {
	return (
		<>
			<header>
				<nav>
					<ul className={styles.navlinks}>
						<li>
							<NavLink to="/">
								Home
							</NavLink>
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
			</header>
			<Outlet />
		</>
	);
}
