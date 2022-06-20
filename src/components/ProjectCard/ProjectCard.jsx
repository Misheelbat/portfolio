import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

import styles from './projectCard.module.css';

const item = {
	hidden: { opacity: 0, x: 300 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.3,
		},
	},
};
const container = {
	hidden: { opacity: 0, x: 200 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.7,
		},
	},
};
export const TYPE_CLASSES = {
	base: { right: 'baseRigth', left: 'baseLeft' },
	square: { right: 'squareRigth', left: 'squareLeft' },
	long: 'long',
};

export default function ProjectCard({
	type = TYPE_CLASSES.base.right,
	header,
	footer,
}) {
	return (
		<div className={cx(styles.card, styles[type])}>
			<div className={styles.image}></div>
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
