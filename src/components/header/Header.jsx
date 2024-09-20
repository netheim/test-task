import React from 'react';
import styles from './Header.module.css'
import Navbar from "../navbar/Navbar.jsx";
import {Html5Outlined} from "@ant-design/icons";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerInner}>
					<h1 className={styles.logo}>
						<Html5Outlined style={{ color: "#3679cc", fontSize: 75 }} />
					</h1>
					<Navbar />
				</div>
			</div>
		</header>
	);
};

export default Header;