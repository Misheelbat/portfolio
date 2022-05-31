import React from 'react';
import { ReactComponent as Circle } from 'assets/circle.svg';
import { ReactComponent as Eclipse } from 'assets/eclipse.svg';
import Planet from 'assets/moon.png';

import styles from './circles.module.css';
export default function Circles({ page }) {
	console.log(page);
	return (
		<div data-state={page} className={styles.circleContainer}>
			<img src={Planet} alt="moon" />
			<Circle className={styles.circle} />
			<Eclipse className={styles.eclipse} />
		</div>
	);
}
