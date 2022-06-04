import React from 'react';
import { useGetPageInfo } from 'hooks/useGetPageInfo';

import styles from './navHeader.module.css';
export default function NavHeader() {
	const pageInfo = useGetPageInfo();
	
	return (
		<div className={styles.header}>
			<span>{pageInfo.number}</span>
			<span>{pageInfo.page}</span>
			<p>
				<span>BATJARGAL</span>
				<span>MISHEEL</span>
			</p>
		</div>
	);
}
