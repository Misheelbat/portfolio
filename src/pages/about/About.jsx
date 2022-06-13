import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';

import Slider from 'components/Elements/slider/Slider';
import ContactMe from 'components/Elements/ContactMe/ContactMe';
import profileImg from 'assets/photo.jpg';
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
						<img src={profileImg} alt="profile" />
					</div>
				</header>
				<div className={styles.ball} />
				<div className={styles.skills}>
					<h2 className={styles.subheader}>My skills set</h2>
					<Slider />
					<div className={styles.skillsContainer}>
						<article className={styles.skillsSet}>
							<h5>01</h5>
							<div className={styles.skillsSetBorder} />
							<h3>html && css</h3>
							<p>
								I am a pretty chill person. I like being with friends, surfing,
								playing videogames and going to the gym
							</p>
						</article>
						<article className={styles.skillsSet}>
							<h5>02</h5>
							<div className={styles.skillsSetBorder} />
							<h3>ReactJS</h3>
							<p>
								I am a pretty chill person. I like being with friends, surfing,
								playing videogames and going to the gym
							</p>
						</article>
						<article className={styles.skillsSet}>
							<h5>03</h5>
							<div className={styles.skillsSetBorder} />
							<h3>Javascript</h3>
							<p>
								I am a pretty chill person. I like being with friends, surfing,
								playing videogames and going to the gym
							</p>
						</article>
						<article className={styles.skillsSet}>
							<h5>04</h5>
							<div className={styles.skillsSetBorder} />
							<h3>Others</h3>
							<p>
								I am a pretty chill person. I like being with friends, surfing,
								playing videogames and going to the gym
							</p>
						</article>
					</div>
				</div>
				<div className={styles.ball} />
				<ContactMe />
			</section>
		</AnimatePage>
	);
}
