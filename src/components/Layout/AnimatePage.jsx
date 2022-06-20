import React from 'react';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 1, y: '100vh' },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.8,
		},
	},
	away: {
		opacity: 0,
		y: -500,
		transition: { duration: 0.5, ease: 'easeIn' },
	},
};
export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			exit="away"
			{...props}
		>
			{children}
		</motion.div>
	);
}
