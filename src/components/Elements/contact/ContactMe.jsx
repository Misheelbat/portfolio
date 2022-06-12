import React from 'react';
import { Link } from 'react-router-dom';

import styles from './contactMe.module.css';
export default function ContactMe() {
	return (
		<div className={styles.contact}>
			<h2 className={styles.subheader}>Lets's chat </h2>
			<div className={styles.contactsContainer}>
				<Link to="/contacts" className={styles.contactsContent1}>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
				</Link>
				<Link to="/contacts" className={styles.contactsContent2}>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
				</Link>
			</div>
		</div>
	);
}
