import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as CloseMenu } from '../../assets/closeMenu.svg';

import styles from './navigation.module.css';
export default function Navigation() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<header className={styles.navHeader}>
				<Logo className={styles.logo} />
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
				<button onClick={() => setOpen(!open)} className={styles.menuButton}>
					{open ? (
						<CloseMenu width="25px" />
					) : (
						<Menu width="20px" height="25px" />
					)}
				</button>
			</header>
			<Outlet />
		</>
	);
}
