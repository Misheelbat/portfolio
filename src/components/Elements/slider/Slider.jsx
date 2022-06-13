import React from 'react';
import html from 'assets/skills/html.svg';
import css from 'assets/skills/css.svg';
import js from 'assets/skills/js.svg';
import ts from 'assets/skills/ts.svg';
import react from 'assets/skills/react.svg';
import node from 'assets/skills/node.svg';
import git from 'assets/skills/git.svg';
import mongodb from 'assets/skills/mongodb.svg';
import graphql from 'assets/skills/graphql.svg';

import styles from './slider.module.css';
export default function Slider() {
	return (
		<div className={styles.slider}>
			<div className={styles.sliderContainer}>
				<div className={styles.sliderContent1}>
					<img src={html} alt="html logo" />
					<img src={css} alt="css logo" />
					<img src={js} alt="javascript logo" />
					<img src={react} alt="react logo" />
					<img src={ts} alt="typescript logo" />
					<img src={node} alt="node logo" />
					<img src={git} alt="git logo" />
					<img src={mongodb} alt="mongodb logo" />
					<img src={graphql} alt="graphql logo" />
				</div>
				<div className={styles.sliderContent2}>
					<img src={html} alt="html logo" />
					<img src={css} alt="css logo" />
					<img src={js} alt="javascript logo" />
					<img src={react} alt="react logo" />
					<img src={ts} alt="typescript logo" />
					<img src={node} alt="node logo" />
					<img src={git} alt="git logo" />
					<img src={mongodb} alt="mongodb logo" />
					<img src={graphql} alt="graphql logo" />
				</div>
			</div>
		</div>
	);
}
