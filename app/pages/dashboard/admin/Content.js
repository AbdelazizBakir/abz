import React from "react";
import styles from '../../../styles/Home.module.css';
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Tab from './Table/Tab.js'

//data for bar chart
const data = {
	labels: [
		"",
	],
	datasets: [
		{
			label: "Sales/ month",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
		},
	],
};
//ensemble de données

const data1 = {
	labels: ["", "Social Media", "Websites"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};

function Content() {
	return (
		<div className="h-screen">
			<div className={styles.contentcontainer}>
				<div className={styles.contentwrapper}>
					<div className={styles.tabs}>
						<div className={styles.categories}>
							<h2>Messages</h2>
						</div>
					</div>
					<div className={styles.tabs}>
						<div className={styles.categories}>
							<h2>Utilisateurs</h2>
						</div>
					</div>
					<div className={styles.tabs}>
						<div className={styles.categories}>
							<h2></h2>
						</div>
					</div>
					<div className={styles.tabs}>
						<div className={styles.categories}>
							<h2></h2>
						</div>
					</div>
				</div>
			</div>
			<Tab />
		</div>
	)
}

export default Content;