import React from 'react';
import AnimatePage from 'components/Layout/AnimatePage';
import { useAddClassInterval } from 'hooks/useAddClassInterval';
import styles from './contacts.module.css';

export default function Contacts() {
	const toggle = useAddClassInterval(8000);
	return (
		<AnimatePage>
			<section data-toggle={toggle} className={styles.contacts}>
				<div>
					<h1>let's get in touch</h1>
				</div>
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

					<a href="mailto:example@email.com">Let's Talk!</a>
				</div>
			</section>
		</AnimatePage>
	);
}
