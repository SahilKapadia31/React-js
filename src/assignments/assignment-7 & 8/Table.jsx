import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Table = () => {
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || [])

	const handleDelete = (toDelete) => {
		let deleteData = userData.filter((dt) => dt != toDelete)
		setUserData(deleteData)
		localStorage.setItem("userData", JSON.stringify(deleteData))
	}

	const handleSearch = (e) => {
		let searchContex = e.target.value
		if (searchContex !== "") {
			let search = userData.filter((x) => x.name.includes(searchContex) || x.email.includes(searchContex))
			setUserData(search)
		} else {
			setUserData(JSON.parse(localStorage.getItem("userData")))
		}
	}

	const handleClick = (filter) => {
		if (filter == "Male") {
			setUserData(userData.filter((x) => x.gender.includes(filter)))
		} else if (filter == "Female") {
			setUserData(userData.filter((x) => x.gender.includes(filter)))
		} else {
			setUserData(JSON.parse(localStorage.getItem("userData")))
		}
	}

	const handleSort = () => {
		let x = userData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
		setUserData(x)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<input type="text" className=" form-control" placeholder="Search" onChange={handleSearch} />
				</div>
				<div className="col-4">
					<button className="btn btn-primary" onClick={() => handleClick("All_data")}>
						All Data
					</button>
					<button className="btn btn-danger mx-3" onClick={() => handleClick("Male")}>
						Male
					</button>
					<button className="btn btn-success" onClick={() => handleClick("Female")}>
						Female
					</button>
					<button className="btn btn-secondary ms-3" onClick={handleSort}>
						Sort
					</button>
				</div>
			</div>
			<div className="col-12 mt-4">
				<table className="table table-danger">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Password</th>
							<th>Gender</th>
							<th>Hobbies</th>
							<th>Course</th>
							<th>Address</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>
						{userData &&
							userData.map((userData, i) => (
								<tr key={i}>
									<td>{userData.name}</td>
									<td>{userData.email}</td>
									<td>{userData.pass}</td>
									<td>{userData.gender}</td>
									<td>{userData.hobbies.join(",")}</td>
									<td>{userData.course}</td>
									<td>{userData.address}</td>
									<td>
										<button className="btn btn-warning">
											<Link className=" text-decoration-none text-light" to={`/form/${i}`}>
												Edit
											</Link>
										</button>
										<button className="btn btn-danger" onClick={() => handleDelete(userData, i)}>
											Delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
