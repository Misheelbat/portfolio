import React from 'react';
import { useGetPageNumber } from 'hooks/useGetPageNumber';

import styles from './navHeader.module.css';
export default function NavHeader() {
	const pageNumber = useGetPageNumber();
	return (
		<div className={styles.header}>
			<span>{pageNumber}</span>
			<span>PORTFOLIO</span>
			<p>
				<span>BATJARGAL</span>
				<span>MISHEEL</span>
			</p>
		</div>
	);
}
