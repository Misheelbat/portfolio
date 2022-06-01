import React from 'react';
import { ReactComponent as Circle } from 'assets/circle.svg';
import { ReactComponent as Eclipse } from 'assets/eclipse.svg';
import Sun from 'assets/sun.svg';

import styles from './circles.module.css';
export default function Circles({ page }) {
	console.log(page);
	return (
		<div data-state={page} className={styles.circleContainer}>
			{/* <div className={styles.sun}>
				<img src={Sun} alt="moon" />
			</div> */}
			<div className={styles.sun}>Welcome!</div>
			<Circle className={styles.circle} />
			<Eclipse className={styles.eclipse} />
		</div>
	);
}
