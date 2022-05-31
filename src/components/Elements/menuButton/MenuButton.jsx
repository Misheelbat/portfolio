import React from 'react';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { ReactComponent as CloseMenu } from 'assets/closeMenu.svg';

import styles from './menuButton.module.css';
export default function MenuButton({ open, ...props }) {
	return (
		<button {...props} className={styles.menuButton}>
			{open ? <CloseMenu width="35px" /> : <Menu width="20px" height="25px" />}
		</button>
	);
}
