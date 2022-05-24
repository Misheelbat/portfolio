import React from 'react';

import styles from './button.module.css';
export default function Button({ children }) {
	return (
		<button className={styles.primaryButton}>
			{children} <span className={styles.arrow}>&#8250;</span>
		</button>
	);
}
