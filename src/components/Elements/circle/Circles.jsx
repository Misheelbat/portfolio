import React from 'react';
import { ReactComponent as Circle } from 'assets/circle.svg';
import { ReactComponent as Eclipse } from 'assets/eclipse.svg';

import styles from './circles.module.css';
export default function Circles() {
	return (
		<div className={styles.circleContainer}>
			<Circle className={styles.circle} />
			<Eclipse className={styles.eclipse} />
		</div>
	);
}
