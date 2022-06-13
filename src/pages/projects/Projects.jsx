import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import { TYPE_CLASSES } from 'components/ProjectCard/ProjectCard';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import styles from './projects.module.css';

export default function Projects() {
	return (
		<AnimatePage>
			<section className={styles.projects}>
				<header>Featured Projects</header>
				<ProjectCard>
					<h1>The Color of Space</h1>
					<span>A Multimedia company landing website</span>
				</ProjectCard>
				<ProjectCard type={TYPE_CLASSES.base.left}>
					<h1>The Base Left</h1>
					<span>A Multimedia company landing website</span>
				</ProjectCard>
				<ProjectCard type={TYPE_CLASSES.square.right}>
					<h1>The Square Left</h1>
					<span>A Multimedia company landing website</span>
				</ProjectCard>
				<ProjectCard type={TYPE_CLASSES.square.left}>
					<h1>The Square Left</h1>
					<span>A Multimedia company landing website</span>
				</ProjectCard>
				<ProjectCard type={TYPE_CLASSES.long}>
					<h1>The Type of Long</h1>
					<span>A Multimedia company landing website</span>
				</ProjectCard>
			</section>
		</AnimatePage>
	);
}
