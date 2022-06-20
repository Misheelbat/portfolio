import React from 'react';
import { motion } from 'framer-motion';

import AnimatePage from 'components/Layout/AnimatePage';
import Slider from 'components/Elements/slider/Slider';
import ContactMe from 'components/Elements/ContactSection/ContactMe';
import profileImg from 'assets/photo.jpg';

import styles from './about.module.css';

export default function About() {
	return (
		<AnimatePage>
			<section className={styles.about}>
				<header>
					<div className={styles.titleContainer}>
						<div className={styles.aboutName}>
							<motion.div
								initial={{ flexBasis: '10%' }}
								animate={{
									flexBasis: '100%',
									transition: { ease: 'easeInOut', duration: 0.5, delay: 0.6 },
								}}
								className={styles.lineBefore}
							/>
							<h1>
								About <span>john doe</span>
							</h1>
							<motion.div
								initial={{ flexBasis: '100%' }}
								animate={{
									flexBasis: '20%',
									transition: { ease: 'easeInOut', duration: 0.5, delay: 0.6 },
								}}
								className={styles.lineAfter}
							/>
						</div>
						<motion.p
							initial={{ opacity: 0, x: '-100vw' }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { ease: 'easeInOut', duration: 0.5, delay: 0.6 },
							}}
						>
							I'm a creative developer with years of experience in building
							products and appealing web experiences.
						</motion.p>
						<div className={styles.aboutImg}>
							<img src={profileImg} alt="profile" />
						</div>
					</div>
				</header>
				<div className={styles.ball} />
				<div className={styles.skills}>
					<h2 className={styles.subheader}>My skills set</h2>
					<Slider />
					<div className={styles.skillsContainer}>
						<article className={styles.skillsSet}>
							<div>
								<h5>01</h5>
								<div className={styles.skillsSetBorder} />
								<h3>html && css</h3>
								<p>
									I am a pretty chill person. I like being with friends,
									surfing, playing videogames and going to the gym
								</p>
							</div>
						</article>
						<article className={styles.skillsSet}>
							<div>
								<h5>02</h5>
								<div className={styles.skillsSetBorder} />
								<h3>ReactJS</h3>
								<p>
									I am a pretty chill person. I like being with friends,
									surfing, playing videogames and going to the gym
								</p>
							</div>
						</article>
						<article className={styles.skillsSet}>
							<div>
								<h5>03</h5>
								<div className={styles.skillsSetBorder} />
								<h3>Javascript</h3>
								<p>
									I am a pretty chill person. I like being with friends,
									surfing, playing videogames and going to the gym
								</p>
							</div>
						</article>
						<article className={styles.skillsSet}>
							<div>
								<h5>04</h5>
								<div className={styles.skillsSetBorder} />
								<h3>Others</h3>
								<p>
									I am a pretty chill person. I like being with friends,
									surfing, playing videogames and going to the gym
								</p>
							</div>
						</article>
					</div>
				</div>
				<div className={styles.ball} />
				<ContactMe />
			</section>
		</AnimatePage>
	);
}
