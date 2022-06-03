import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Circle } from 'assets/circle.svg';
import { ReactComponent as Eclipse } from 'assets/eclipse.svg';
import { ReactComponent as Play } from 'assets/play.svg';

import styles from './circles.module.css';
export default function Circles({ page }) {
	return (
		<div data-state={page} className={styles.circleContainer}>
			<Link to="/projects" className={styles.btn}>
				<div className={styles.border}>
					<div className={styles.circleBorder} />
				</div>
				<Play className={styles.play} />
			</Link>
			<Circle className={styles.circle} />
			<Eclipse className={styles.eclipse} />
		</div>
	);
}
