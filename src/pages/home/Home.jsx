import React from 'react';
import AnimatePage from 'components/AnimatePage';
import styles from './home.module.css';

export default function Home() {
	const handleClick = () => {
		document.querySelector('#pro').scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePage>
			<main className={styles.home}>
				<div className={styles.content}>
					<h1>Automate routine work</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, a
						qui! Dolores doloribus consequatur modi.
					</p>
					<button onClick={handleClick} className={styles.contactBtn}>
						Let's Talk!
					</button>
				</div>
			</main>
		</AnimatePage>
	);
}
