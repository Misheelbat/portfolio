import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import styles from './contacts.module.css';

export default function Contacts() {
	return (
		<AnimatePage>
			<section className={styles.contacts}>
				<h1>let's get in touch</h1>
				<div className={styles.contactsContainer}>
					<div className={styles.contactsContent}>
						<div>
							<span>email</span>
							<span>example@email</span>
						</div>
						<div>
							<span>telefon</span>
							<span>06603214566</span>
						</div>
					</div>
					<button>Let's Talk!</button>
				</div>
			</section>
		</AnimatePage>
	);
}
