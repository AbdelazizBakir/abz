import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "/styles/Home.module.css";
import Content from "./dashboard/admin/Content";
import Header from "./dashboard/admin/Header";
import Message from "./dashboard/admin/Message";
import LeftNavbar from "./dashboard/admin/LeftNavbar";

export default function(req, res) {
	
	return (
		<div className={styles.container}>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
				<Content />
				<Message />
			</div>
		</div>
	);
}


