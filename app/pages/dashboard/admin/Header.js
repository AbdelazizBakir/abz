import React from "react";
import styles from '../../../styles/Home.module.css';
import Image from 'next/image';

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Bonjour, <span>monsieur</span>
					</h2>
					<p>Bienvenue sur le tableau de bord</p>
				</div>
				<div className={styles.profile}>
				</div>
			</div>
		</div>
	);
}

export default Header;