import React from 'react';
import { ReactComponent as Circle } from '../../assets/circle.svg';
import { ReactComponent as Eclipse } from '../../assets/eclipse.svg';

import styles from './home.module.css';
export default function Home() {
	return (
		<main className={styles.home}>
			<div className={styles.content}>
				<h1>Automate routine work</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, a
					qui! Dolores doloribus consequatur modi.
				</p>
				<button className={styles.contactBtn}>Let's Talk!</button>
			</div>
			<div className={styles.circleContainer}>
				<Circle className={styles.circle} />
				<Eclipse className={styles.eclipse} />
			</div>
		</main>
	);
}
/* TODO */
/* active link, hover-state, moving contact, horizontal-scroll

*/
