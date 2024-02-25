import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Table = () => {
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || [])

	const handleDelete = (toDelete) => {
		let deleteData = userData.filter((dt) => dt != toDelete)
		setUserData(deleteData)
		localStorage.setItem("userData", JSON.stringify(deleteData))
	}

	return (
		<div className="container">
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
