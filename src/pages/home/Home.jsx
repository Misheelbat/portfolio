import React, { Fragment } from 'react';
import Button from '../../components/Elements/Button/Button';

import styles from './home.module.css';
export default function Home() {
	return (
		<main className={styles.home}>
			<div>
				<h1>
					Hi, i'm <span>Misheel</span>,<br /> a web developer based in Austria
				</h1>
				<Button>LET'S TALK!</Button>
			</div>
		</main>
	);
}
