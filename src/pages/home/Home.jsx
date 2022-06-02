import React from 'react';
import { animate, motion } from 'framer-motion';
import AnimatePage from 'components/AnimatePage';
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
			staggerChildren: 0.3,
		},
	},
	away: { x: '-100vw' },
};
export default function Home() {
	return (
		<AnimatePage
			variants={container}
			initial="hidden"
			animate="show"
			exit="away"
			transition={{ duration: 0.5, ease: 'backInOut' }}
		>
			<main>
				<div className={styles.content}>
					<h1>
						<motion.span variants={item}>Hi, i’m John Doe,</motion.span>
						<motion.span variants={item}>a web developer </motion.span>
						<motion.span variants={item}>based in Austria</motion.span>
					</h1>
					<motion.button variants={item} className={styles.contactBtn}>
						Let's Talk!
					</motion.button>
				</div>
			</main>
		</AnimatePage>
	);
}
