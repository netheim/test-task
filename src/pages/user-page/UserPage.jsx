import React, {useEffect, useState} from 'react';
import '../../index.css'
import Header from "../../components/header/Header.jsx";
import axios from "axios";
import {useLocation} from "react-router-dom";
import styles from './UserPage.module.css'
import {Avatar, Empty} from "antd";
import {
	AuditOutlined,
	DoubleRightOutlined,
	FileZipOutlined,
	HomeOutlined, Html5Filled,
	PhoneOutlined,
	UserOutlined
} from "@ant-design/icons";
import Loader from "../../components/loader/Loader.jsx";

const UserPage = () => {

	const [user, setUser] = useState({
		id: 1,
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: ""
			}
		},
		phone: "",
		website: "",
		company: {
			name: "",
			catchPhrase: "",
			bs: ""
		}
	});

	const [isLoading, setIsLoading] = useState(false);
	const {state} = useLocation()

	useEffect(() => {
		try {
			const getUser = async () => {
				setIsLoading(true)
				const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${state.id}`)
				setUser(response.data)

				setIsLoading(false)

			}
			getUser()
		} catch (error) {
			console.error(error)
		}
	}, [])

	return (
		<>
			<div className="page">
				<Header />
				<div className={styles.userBlock}>
					<div className={styles.container}>
						{isLoading ? <Loader />:
							user?.name.length > 0 ? (
								<div className={styles.userBlockInner}>
									<div className={styles.leftSide}>
										<Avatar shape="square" size={250} style={{backgroundColor: "#3679cc"}}
												icon={<UserOutlined/>}/>
										<div className={styles.usernameBlock}>
											<span className={styles.details}>username - </span>
											<h1 className={styles.username}>{user?.username}</h1>

										</div>
										<div className={styles.companyBlock}>
											<span className={styles.details}>company:</span>
											<div className={styles.company}>
												<span>{user?.company.name}</span>
												<span>{`"${user?.company.catchPhrase}"`}</span>
											</div>

										</div>
									</div>
									<div className={styles.rightSide}>
									<h1 className={styles.name}>{user?.name}</h1>
										<div className={styles.userInfo}>
											<div className={styles.userInfoDetails}>
												<span className={styles.userInfoItem}>
													<span className={styles.details}>City</span>
													<HomeOutlined/>
													{user?.address.city}
												</span>

												<span className={styles.userInfoItem}>
													<span className={styles.details}>Street</span>
													<AuditOutlined/>
													{user?.address.street}
												</span>
												<span className={styles.userInfoItem}>
													<span className={styles.details}>Zip</span>
													<FileZipOutlined/>
													{user?.address.zipcode}
												</span>
											</div>
											<div className={styles.userInfoDetails}>
												<span className={styles.userInfoItem}>
													<span className={styles.details}>Phone</span>
													<PhoneOutlined/>
													{user?.phone}
												</span>
												<span className={styles.userInfoItem}>
													<span className={styles.details}>Website</span>

													<Html5Filled/>
													{user?.website}
												</span>
											</div>
										</div>
										<span className={styles.details}>Bio</span>
										<p className={styles.bio}>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate,
											dolore error ex facere facilis harum ipsam ipsum, magni molestias neque nobis,
											provident saepe sint veniam. Ad eius eveniet, facere illo molestiae possimus recusandae rem velit.
											Animi aut commodi consequuntur corporis dolorem doloremque dolores doloribus enim error
											est in minus nostrum numquam obcaecati rem, saepe temporibus totam ullam ut velit.
										</p>
									</div>
								</div>
							) : <Empty/>

						}
					</div>
				</div>
				<footer>
					<div className={styles.container}>
						<div className="footerInner">
							-
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default UserPage;