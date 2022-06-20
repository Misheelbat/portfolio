import React from 'react';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0, y: 300 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeOut',
			duration: 0.5,
		},
	},
	away: { opacity: 0, y: -300 },
};
export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			exit="away"
			transition={{ duration: 0.5, ease: 'backInOut' }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
