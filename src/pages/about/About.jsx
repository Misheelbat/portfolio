import React from 'react';
import AnimatePage from 'components/AnimatePage';
import styles from './about.module.css';

export default function About() {
	return (
		<AnimatePage>
			<section className={styles.projects}>About me</section>
		</AnimatePage>
	);
}
