import React from "react";
import styles from '../../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog, faSignOutAlt, faTachometerAlt, } from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function LeftNavbar() {
	return (
		<div className={styles.navcontainer}>
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
						<Link href="../admin"><a>Tableau de bord</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
						className='flex mx-20 my-1'
							icon={faCog}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
						<Link href="../user"><a>Utilisateurs</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
						className='flex mx-20 my-1'
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer" }}/>
						<Link href="http://localhost:3000/">
						<button onClick={() => signOut()}>Se déconnecter</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;