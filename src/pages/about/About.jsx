import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import profile from 'assets/photo.jpg';
import styles from './about.module.css';

export default function About() {
	return (
		<AnimatePage>
			<section className={styles.about}>
				<header>
					<div className={styles.titleContainer}>
						<div className={styles.aboutName}>
							<h1>
								About <span>john doe</span>
							</h1>
						</div>
						<p>
							I'm a creative developer with years of experience in building
							products and appealing web experiences.
						</p>
						<img src={profile} alt="profile" />
					</div>
				</header>
				<div className={styles.ball} />
			</section>
		</AnimatePage>
	);
}
