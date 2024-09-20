import React from 'react';
import '../index.css'
import Header from "../components/header/Header.jsx";
import Main from "../components/main/Main.jsx";


const App = () => {

	return (
		<>
			<div className="page">
				<Header />
				<Main />
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

export default App;