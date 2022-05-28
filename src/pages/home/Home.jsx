import React from 'react';
import Button from '../../components/Elements/Button/Button';
import { ReactComponent as Arrow } from '../../assets/downArrow.svg';
import { ReactComponent as Art } from '../../assets/art-group.svg';


import styles from './home.module.css';
export default function Home() {
	return (
		<main className={styles.home}>

			<div className={styles.content}>
				<h1>
					Hi, i'm <span>John doe</span>,<br /> a web developer
					<br /> based in Austria
				</h1>
				<Button />
			</div>

			<div className={styles.scrollIndicator}>
				Scroll to explore <Arrow className={styles.arrow} />
			</div>
			
			<Art className={styles.art} />
		</main>
	);
}
