import React from 'react';
import cx from 'classnames';

import styles from './projectCard.module.css';

export const TYPE_CLASSES = {
	base: { right: 'baseRigth', left: 'baseLeft' },
	square: { right: 'squareRigth', left: 'squareLeft' },
	long: 'long',
};
export default function ProjectCard({
	type = TYPE_CLASSES.base.right,
	children,
}) {
	return (
		<div className={cx(styles.card, styles[type])}>
			<div className={styles.image}></div>
			<div className={styles.info}>
				<p>RECENT PROJECTS</p>
				{children}
			</div>
		</div>
	);
}
