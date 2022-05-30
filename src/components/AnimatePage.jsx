import React from 'react';

import { motion } from 'framer-motion';

export default function AnimatePage({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: 500 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
}