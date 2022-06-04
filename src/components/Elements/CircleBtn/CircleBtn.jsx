import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Play } from 'assets/play.svg';

import styles from './circleBtn.module.css';
export default function CircleBtn() {
	return (
		<Link to="/projects" className={styles.btn}>
			<div className={styles.border}>
				<div className={styles.circleBorder} />
			</div>
			<Play className={styles.play} />
		</Link>
	);
}
