import React from 'react';

import { motion } from 'framer-motion';

export default function AnimatePage({ children, ...props }) {
	return (
		<motion.div
			initial={{ x: '90vw' }}
			animate={{ x: 0 }}
			exit={{ x: -1000 }}
			transition={{ duration: 0.5 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
