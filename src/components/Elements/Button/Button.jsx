import React, { useState } from 'react';
import { ReactComponent as Contact } from '../../../assets/contact.svg';

import styles from './button.module.css';
export default function Button() {
	const [click, setClicked] = useState(false);

	return (
		<button
			onClick={() => setClicked(!click)}
			data-click={click}
			className={styles.primaryButton}
		>
			<Contact className={styles.contact} />
			<div className={styles.content}>
				LET'S TALK! <span className={styles.arrow}>&#8250;</span>
			</div>
		</button>
	);
}
