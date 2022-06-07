import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import profile from 'assets/photo.svg';
import styles from './about.module.css';

export default function About() {
	return (
		<AnimatePage>
			<section className={styles.about}>
				<header className={styles.title}>
					<h1>
						About <span>john doe</span>
						<img src={profile} alt="profile" />
					</h1>
					<p>
						I'm a creative developer with years of experience in building
						products and appealing web experiences.
					</p>
				</header>
			</section>
		</AnimatePage>
	);
}
