import React from 'react';
import {useRouteError} from "react-router-dom";
import styles from './ErrorPage.module.css'
const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<div className={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};

export default ErrorPage;