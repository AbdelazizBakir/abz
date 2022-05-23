import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Create from "./dashboard/parent/crud/Create";

export default function(req, res) {
	
	return (
		<div className={styles.container}>
			<div className={styles.container}>
				<Create />
			</div>
		</div>
	);
}

