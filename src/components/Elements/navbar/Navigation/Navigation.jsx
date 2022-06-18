import React from 'react';
import { useGetPageInfo } from 'hooks/useGetPageInfo';
import NavDropdown from '../NavDropdown/NavDropdown';
import { motion } from 'framer-motion';

import styles from './navigation.module.css';

export default function NavHeader() {
	const pageInfo = useGetPageInfo();

	return (
		<motion.header
			initial={{ opacity: 0, y: -180 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
			className={styles.header}
		>
			<span>{pageInfo.number}</span>
			<NavDropdown pageNumber={pageInfo.number} />
			<p>
				<span>JOHN</span>
				<span>DOE</span>
			</p>
		</motion.header>
	);
}
