import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { useAddClassInterval } from 'hooks/useAddClassInterval';

import styles from './navbar.module.css';

const NAV_ITEMS = [
	{
		number: '00',
		page: 'portfolio',
		address: '/',
	},
	{
		number: '01',
		page: 'projects',
		address: '/projects',
	},
	{
		number: '02',
		page: 'about',
		address: '/about',
	},
	{
		number: '03',
		page: 'contacts',
		address: '/contacts',
	},
];
export default function NavDropdown({ pageNumber }) {
	const toggle = useAddClassInterval(8000);

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navLinksContainer}>
				{NAV_ITEMS.map((item) => (
					<li
						data-toggle={toggle}
						key={item.page}
						className={cx({
							[styles.active]: pageNumber === item.number,
						})}
					>
						<NavLink className={styles.navItem} to={item.address}>
							{item.page}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
