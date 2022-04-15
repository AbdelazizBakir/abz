import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Content from "./dashboard/admin/Content";
import Header from "./dashboard/admin/Header";
import LeftNavbar from "./dashboard/admin/LeftNavbar";

export default async function(req, res) {
	/*const [loading, setLoading] = useState(true)
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
	}*/

	return (
		<div className={styles.container}>
			<div className={styles.container}>

			</div>
		</div>
	);
}


