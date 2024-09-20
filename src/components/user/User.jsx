import React from 'react';
import styles from './User.module.css'
import userImg from '../../../public/userPhoto.png'
import {HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";
import {Link} from "react-router-dom";

const User = ({id, name, address, phone, username, email, company}) => {
	return (
		<div className={styles.userBlock}>
			<div className={styles.userInfo}>
				{/*<img width={270} src={userImg} alt=""/>*/}
				<Avatar shape="square" size={150} style={{backgroundColor: "#3679cc"}} icon={<UserOutlined/>}/>
				<div className={styles.userAbout}>
					<Link to={`/users/${id}`} className={styles.name} state={{id: id}}>
						{name}
					</Link>
					<div className={styles.about}>
						<span style={{fontStyle: "italic", fontSize: '13px'}}>Username - </span>
						{username}
					</div>
					<div className={styles.about}>
						<span style={{fontStyle: "italic", fontSize: '13px'}}>Company - </span>
						{company.name}
					</div>
				</div>

			</div>

			<div className={styles.userContacts}>
				<div className={styles.contact}>
					<PhoneOutlined style={{color: "#3679cc"}}/>
					<span>{phone}</span>
				</div>
				<div className={styles.contact}>
					<HomeOutlined style={{color: "#3679cc"}} />
					<span>{address.city}</span>
				</div>
				<div className={styles.contact}>
					<MailOutlined style={{color: "#3679cc"}}/>
					<span>{email}</span>

				</div>

			</div>

		</div>
	);
};

export default User;