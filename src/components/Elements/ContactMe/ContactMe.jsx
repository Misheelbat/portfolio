import React from 'react';
import { Link } from 'react-router-dom';

import styles from './contactMe.module.css';
export default function ContactMe() {
	return (
		<div className={styles.contact}>
			<h2 className={styles.subheader}>Lets's chat </h2>
			<div className={styles.contactsContainer}>
				<Link scroll="false" to="/contacts" className={styles.contactsContent1}>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
				</Link>
				<Link scroll="false" to="/contacts" className={styles.contactsContent2}>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
					<span>Contact me</span>
				</Link>
			</div>
			<div className={styles.btns}>
				<a href="mailto:example@email.com">example@email.com</a>
				<a href="tel:066032112354">066032112354</a>
			</div>
		</div>
	);
}
