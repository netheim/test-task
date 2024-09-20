import React from 'react';
import '../../index.css'
import Header from "../../components/header/Header.jsx";
import styles from './HelpDesk.module.css'
const HelpDesk = () => {
	return (
		<>
			<div className="page">
				<Header/>
				<div className={styles.helpDesk}>
					<div className={styles.container}>
						<div className={styles.helpDeskInner}>

						</div>
					</div>
				</div>
				<footer>
					<div className="container">
						<div className="footerInner">
							-
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default HelpDesk;