import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import { motion } from 'framer-motion';
// import { TYPE_CLASSES } from 'components/ProjectCard/ProjectCard';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import styles from './projects.module.css';

export default function Projects() {
	return (
		<AnimatePage>
			<section className={styles.projects}>
				<motion.header>
					<motion.span
						initial={{ x: -200, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
					>
						Featured Projects
					</motion.span>
				</motion.header>
				<ProjectCard
					header={'The Color of Space'}
					footer={'A Multimedia company landing website'}
				/>
			</section>
		</AnimatePage>
	);
}
