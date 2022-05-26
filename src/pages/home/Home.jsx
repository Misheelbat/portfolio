import React from 'react';
import Button from '../../components/Elements/Button/Button';
import { ReactComponent as Arrow } from '../../assets/downArrow.svg';

import styles from './home.module.css';
export default function Home() {
	return (
		<main className={styles.home}>
			<div>
				<h1>
					Hi, i'm <span>John doe</span>,<br /> a web developer
					<br /> based in Austria
				</h1>
				<Button>LET'S TALK!</Button>
			</div>
			<div className={styles.downArrow}>
				Scroll to explore <Arrow className={styles.arrow}/>
			</div>
		</main>
	);
}
