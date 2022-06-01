import React from 'react';

import { motion } from 'framer-motion';

export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			initial={{ y: '90vw' }}
			animate={{ y: 0 }}
			exit={{ y: -1000 }}
			transition={{ duration: 0.5 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
