import React from 'react';
import { motion } from 'framer-motion';

import styles from './projectCard.module.css';

const item = {
	hidden: { opacity: 1, x: 1000 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.5,
		},
	},
};
const container = {
	hidden: { opacity: 0, x: 200 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.7,
		},
	},
};

export default function ProjectCard({ header, footer }) {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<div className={styles.imageCover}></div>
				<div className={styles.imageCover}></div>
			</div>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className={styles.info}
			>
				<p>RECENT PROJECT</p>
				<motion.h1 variants={item}>{header}</motion.h1>
				<motion.span variants={item}>{footer}</motion.span>
			</motion.div>
		</div>
	);
}
