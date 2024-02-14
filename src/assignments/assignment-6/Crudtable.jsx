import React, { useEffect, useState } from "react"

function Crudtable() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		pass: "",
		gender: "",
		hobbies: [],
		course: "",
		address: "",
	})
	const [data, setData] = useState(JSON.parse(localStorage.getItem("Data")) || [])
	const [edit, setEdit] = useState(false)
	const [id, setId] = useState()

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		if () {
			localStorage.setItem("Data", JSON.stringify([...data, input]))
		}
	}, [data, input])

	const handleSubmit = (e) => {
		e.preventDefault()
		setData([...data, input])
		setInput({ name: "", email: "", pass: "", gender: "", hobbies: [], course: "", address: "" })
		if (edit) {
			data[id] = input
			setData(data)
		}
	}

	const handleDelete = (toDelete) => {
		let deleteData = data.filter((dt) => dt != toDelete)
		setData(deleteData)
	}

	const handleEdit = (editData, i) => {
		setInput(editData)
		setEdit(true)
		setId(i)
	}

	return (
		<div>
			<h1 className="mt-5 text-center">Course Form</h1>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<form className="" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label fw-bold">
									Name
								</label>
								<input name="name" value={input.name} type="text" className="form-control" id="name" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label fw-bold">
									Email address
								</label>
								<input name="email" value={input.email} type="email" className="form-control" id="email" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="pass" className="form-label fw-bold">
									Password
								</label>
								<input name="pass" value={input.pass} type="password" className="form-control" id="pass" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="gender" className="form-label fw-bold">
									Gender
								</label>
								<br />
								<input value={"Male"} checked={input.gender == "Male"} className="form-check-input border-secondary" type="radio" name="gender" id="male" onChange={handleChange} />
								<label className="form-check-label mx-2" htmlFor="male">
									Male
								</label>
								<input
									value={"Female"}
									checked={input.gender == "Female"}
									className="form-check-input border-secondary"
									type="radio"
									name="gender"
									id="female"
									onChange={handleChange}
								/>
								<label className="form-check-label ms-2" htmlFor="female">
									Female
								</label>
							</div>
							<div className="mb-3">
								<label htmlFor="hobbies" className="form-label fw-bold">
									Hobbies
								</label>
								<br />
								<input
									value={"Cricket"}
									checked={input.hobbies == "Cricket"}
									className="form-check-input border-secondary"
									name="hobbies"
									type="checkbox"
									id="cricket"
									onChange={handleChange}
								/>
								<label className="form-check-label mx-2" htmlFor="cricket">
									Cricket
								</label>
								<input
									value={"Adventure Sports"}
									checked={input.hobbies == "Adventure Sports"}
									className="form-check-input border-secondary"
									name="hobbies"
									type="checkbox"
									id="a-sports"
									onChange={handleChange}
								/>
								<label className="form-check-label ms-2" htmlFor="a-sports">
									Adventure Sports
								</label>
							</div>
							<div>
								<label htmlFor="course" className="form-label fw-bold">
									Course
								</label>
								<br />
								<select value={input.course} className="form-select" name="course" onChange={handleChange}>
									<option defaultValue="Open this select menu">Open this select menu</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="address" className="form-label fw-bold">
									Address
								</label>
								<textarea value={input.address} className="form-control" name="address" id="address" rows="3" onChange={handleChange}></textarea>
							</div>
							<button type="submit" className="btn btn-success">
								{edit ? "Update" : "Submit"}
							</button>
						</form>
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
								{data &&
									data.map((data, i) => (
										<tr key={i}>
											<td>{data.name}</td>
											<td>{data.email}</td>
											<td>{data.pass}</td>
											<td>{data.gender}</td>
											<td>{data.hobbies}</td>
											<td>{data.course}</td>
											<td>{data.address}</td>
											<td>
												<button className="btn btn-warning" onClick={() => handleEdit(data, i)}>
													Edit
												</button>
												<button className="btn btn-danger" onClick={() => handleDelete(data)}>
													Delete
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Crudtable
