import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatePage from 'components/Layout/AnimatePage';

import CircleBtn from 'components/Elements/CircleBtn/CircleBtn';

import styles from './home.module.css';

const item = {
	hidden: { x: -1000 },
	show: {
		x: 0,
		transition: {
			type: 'spring',
			bounce: 0.1,
		},
	},
};
const container = {
	hidden: { x: -1000 },
	show: {
		x: 0,
		transition: {
			staggerChildren: 0.2,
		},
	},
	away: { x: '-100vw' },
};
export default function Home() {
	return (
		<AnimatePage
			variants={container}
			transition={{ duration: 0.5, ease: 'backInOut' }}
		>
			<main className={styles.home}>
				<div className={styles.content}>
					<h1>
						<motion.span variants={item}>Hi, i’m John Doe,</motion.span>
						<motion.span variants={item}>a web developer </motion.span>
						<motion.span variants={item}>based in Austria</motion.span>
					</h1>
					<Link to="/contacts">
						<motion.div variants={item} className={styles.contactBtn}>
							Let's Talk!
						</motion.div>
					</Link>
				</div>
				<CircleBtn />
			</main>
		</AnimatePage>
	);
}
