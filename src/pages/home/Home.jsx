import React from 'react';
import AnimatePage from 'components/AnimatePage';
import styles from './home.module.css';

export default function Home() {
	return (
		<AnimatePage
			initial={{ x: -500 }}
			animate={{ x: 0 }}
			exit={{ x: -500 }}
			transition={{ duration: 0.5 }}
		>
			<main className={styles.home}>
				<div className={styles.content}>
					<h1>Automate routine work</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, a
						qui! Dolores doloribus consequatur modi.
					</p>
					<button className={styles.contactBtn}>Let's Talk!</button>
				</div>
			</main>
		</AnimatePage>
	);
}
