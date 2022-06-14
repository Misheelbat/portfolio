import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Play } from 'assets/play.svg';

import styles from './circleBtn.module.css';
export default function CircleBtn() {
	return (
		<Link to="/projects" className={styles.btn}>
			<Play className={styles.play} />
		</Link>
	);
}
