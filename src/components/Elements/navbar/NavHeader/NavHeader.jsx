import React from 'react';
import { useGetPageInfo } from 'hooks/useGetPageInfo';
import { useAddClassInterval } from 'hooks/useAddClassInterval';

import styles from './navHeader.module.css';
export default function NavHeader() {
	const pageInfo = useGetPageInfo();
	const toggle = useAddClassInterval(8000);

	return (
		<div data-toggle={toggle} className={styles.header}>
			<span>{pageInfo.number}</span>
			<span>{pageInfo.page}</span>
			<p>
				<span>JOHN</span>
				<span>DOE</span>
			</p>
		</div>
	);
}
