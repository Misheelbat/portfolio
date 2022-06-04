import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import styles from './projects.module.css';

export default function Projects() {
	return (
		<AnimatePage>
			<section className={styles.projects}>
				<div className={styles.card}>
					<div className={styles.image}></div>
					<div className={styles.info}>
						<p>RECENT PROJECTS</p>
						<h1>The Color out of Space</h1>
						<button>Explore details</button>
						<p>A Multimedia company landing website</p>
					</div>
				</div>
			</section>
		</AnimatePage>
	);
}
