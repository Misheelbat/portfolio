import React from 'react';
import { useGetPageInfo } from 'hooks/useGetPageInfo';
import NavDropdown from '../NavDropdown/NavDropdown';

import styles from './navHeader.module.css';

export default function NavHeader() {
	const pageInfo = useGetPageInfo();

	return (
		<header className={styles.header}>
			<span>{pageInfo.number}</span>
			<NavDropdown pageNumber={pageInfo.number} />
			<p>
				<span>JOHN</span>
				<span>DOE</span>
			</p>
		</header>
	);
}
