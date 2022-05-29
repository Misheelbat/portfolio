import React from 'react';
import Home from '../../pages/home/Home';
import Projects from '../../pages/projects/Projects';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

import styles from './pagesContainer.module.css';
export default function PageContainer() {
	const scrollRef = useHorizontalScroll();

	return (
		<div ref={scrollRef} className={styles.container}>
			<Home />
			<Projects />
		</div>
	);
}
