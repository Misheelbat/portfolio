import React from 'react';

import { motion } from 'framer-motion';
const container = {
	hidden: { y: '90vw' },
	show: {
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
	away: { y: -1000 },
};
export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			exit="away"
			{...props}
			// transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
}
