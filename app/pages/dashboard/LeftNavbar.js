import React from "react";
import styles from '../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog, faSignOutAlt, faTachometerAlt, } from "@fortawesome/free-solid-svg-icons";

function LeftNavbar() {
	return (
		<div className={styles.navcontainer + ""}>
			<div className={styles.logo}>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
						className='flex mx-20 my-1'
							icon={faTachometerAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>
						<a href="#">Tableau de bord</a>
					</li>
					<li>
						<FontAwesomeIcon
						className='flex mx-20 my-1'
							icon={faCog}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Paramètre</a>
					</li>
					<li>
						<FontAwesomeIcon
						className='flex mx-20 my-1'
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<a href="#">Se déconnecter</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;