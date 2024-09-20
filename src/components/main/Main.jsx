import React, {useEffect, useMemo, useState} from 'react';
import {Empty, Input, Pagination, Select} from "antd";
import {UserOutlined} from "@ant-design/icons";
import axios from "axios";
import styles from './Main.module.css'
import UserList from "../user-list/UserList.jsx";
import Loader from "../loader/Loader.jsx";
import {getPagesArray, getPagesCount} from "../../utils/pages.js";

const Main = () => {

	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	const [limit, setLimit] = useState(3);
	const [page, setPage] = useState(1);

	let pagesArray = getPagesArray(totalPages);
	const getUsers = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
				params: {
					_limit: limit,
					_page: page,
				}
			})
			setUsers(response.data)
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPagesCount(totalCount, limit))

			setIsLoading(false)
		} catch (err) {
			console.error(err);
		}

	}
	useEffect(() => {
		getUsers()
	}, [page])


	const [searchQuery, setSearchQuery] = useState("");
	const [selectedSort, setSelectedSort] = useState("");

	const sortedUsers = useMemo(() => {
		if(selectedSort) {
			return  [...users].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return users
	}, [selectedSort, users]);

	const sortedAndSearchedUsers = useMemo(() => {
		return sortedUsers.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
	}, [searchQuery, sortedUsers])


	const sortUsers = (sort) => {
		setSelectedSort(sort)
	}


	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.mainInner}>
					<div className={styles.searchTitle}>
						<h1 className={styles.mainTitle}>USERS</h1>
						<Input
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}

							className={styles.searchInput}
							placeholder="Поиск..."
							prefix={<UserOutlined/>}
						/>
						<Select
							style={{ width: "200px", height: "40px"}}
							onChange={sortUsers}
							showSearch
							placeholder="Select a sort"
							optionFilterProp="label"
							// onSearch={onSearch}
							options={[
								{
									value: 'name',
									label: 'По имени',
								},
								{
									value: 'username',
									label: 'По нику',
								},


							]}
						/>

					</div>

					{isLoading
						? <Loader/>
						: sortedAndSearchedUsers.length > 0
							? <UserList sortedAndSearchedUsers={sortedAndSearchedUsers}/>
							: <Empty />
					}

					<Pagination onChange={(e) => setPage(e)} total={pagesArray.length * 10}/>

				</div>
			</div>
		</div>
	);
};

export default Main;