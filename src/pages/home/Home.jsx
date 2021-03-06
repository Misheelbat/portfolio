import React from 'react';
import { motion } from 'framer-motion';
import AnimatePage from 'components/Layout/AnimatePage';

import CircleBtn from 'components/Elements/CircleBtn/CircleBtn';

import styles from './home.module.css';

const item = {
	hidden: { opacity: 0, x: -300 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.3,
		},
	},
	away: {
		opacity: 0,
		x: '-100vw',
		transition: {
			ease: 'easeIn',
			duration: 0.3,
		},
	},
};
const container = {
	hidden: { opacity: 0, x: -400 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.8,
			staggerChildren: 0.2,
		},
	},
	away: {
		opacity: 0,
		x: '-100vw',
		transition: { ease: 'easeIn', duration: 0.5, staggerChildren: 0.1 },
	},
};
export default function Home() {
	return (
		<AnimatePage variants={container}>
			<main className={styles.home}>
				<div className={styles.content}>
					<h1>
						<motion.span variants={item}>Hi, i’m John Doe,</motion.span>
						<motion.span variants={item}>a web developer </motion.span>
						<motion.span variants={item}>based in Austria</motion.span>
					</h1>
				</div>
				<CircleBtn />
			</main>
		</AnimatePage>
	);
}
