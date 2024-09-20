import React from 'react';
import User from "../user/User.jsx";

const UserList = ({sortedAndSearchedUsers}) => {
	return (
		<div>
			{sortedAndSearchedUsers.map((user) => (
				<User
					id={user.id}
					name={user.name}
					key={user.id}
					email={user.email}
					address={user.address}
					phone={user.phone}
					username={user.username}
					company={user.company}
				/>
			))}
		</div>
	);
};

export default UserList;