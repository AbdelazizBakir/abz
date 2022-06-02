import { getSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "/styles/Home.module.css";
import Content from "./dashboard/teacher/Content";
import Header from "./dashboard/teacher/Header";
import LeftNavbar from "./dashboard/teacher/LeftNavbar";

export default function teacher(req, res) {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const securePage = async () => {
			const session = await getSession()
			if (!session) {
				signIn()
			} else {
				setLoading(false)
			}
		}
		securePage()
	}, [])
	if (loading) {
		return	<h2>Loading...</h2>
	}
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
