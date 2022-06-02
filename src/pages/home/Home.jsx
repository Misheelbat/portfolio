import React from 'react';
import AnimatePage from 'components/AnimatePage';
import styles from './home.module.css';

export default function Home() {
	return (
		<AnimatePage
			initial={{ x: -500 }}
			animate={{ x: 0 }}
			exit={{ x: '-100vw' }}
			transition={{ duration: 0.5 }}
		>
			<main className={styles.home}>
				<div className={styles.content}>
					<h1>
						Hi, i’m John Doe,
						<br /> a web developer
						<br /> based in Austria
					</h1>
					<button className={styles.contactBtn}>Let's Talk!</button>
				</div>
			</main>
		</AnimatePage>
	);
}
