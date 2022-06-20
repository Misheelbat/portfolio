import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import { motion } from 'framer-motion';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import styles from './projects.module.css';

const container = {
	hidden: { x: 400, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: { ease: 'easeInOut', duration: 0.5, delay: 0.3 },
	},
};

export default function Projects() {
	return (
		<AnimatePage>
			<section className={styles.projects}>
				<motion.header>
					<motion.span variants={container} initial="hidden" animate="show">
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
