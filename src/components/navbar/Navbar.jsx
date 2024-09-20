import React from 'react';
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.navbarLink} to="/">Main</Link>
			<Link className={styles.navbarLink} to="/help-desk">Help desk</Link>
		</nav>
	);
};

export default Navbar;