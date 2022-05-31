import React from 'react';

import { motion } from 'framer-motion';

export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -500 }}
			transition={{ duration: 0.5 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
