import React, { useEffect, useState } from "react"
import { db } from "./Firebase"
import { ref, set, push, onValue, get, update, remove } from "firebase/database"

function Crud() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		pass: "",
		address: "",
	})

	const [data, setData] = useState([])
	const [edit, setEdit] = useState(false)
	const [id, setId] = useState()

	useEffect(() => {
		const userRef = ref(db, "data")
		onValue(userRef, (snapshot) => {
			var list = []
			snapshot.forEach((childSnapshot) => {
				var id = childSnapshot.key
				var data = childSnapshot.val()
				var detail = { id, ...data }
				list.push(detail)
			})
			setData(list)
		})
	}, [])

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (edit) {
			const userRef = ref(db, `data/${id}`)
			update(userRef, input).then(() => {
				setInput({ name: "", email: "", pass: "", address: "" })
			})
		} else {
			const userRef = ref(db, "data")
			const newUser = push(userRef)
			set(newUser, input)
		}
		setEdit(false)
	}

	const handleDelete = (id) => {
		console.log(id)
		const userRef = ref(db, `data/${id}`)
		remove(userRef).then(() => {
			console.log("Delete...")
		})
	}

	const handleEdit = (id) => {
		const userRef = ref(db, `data/${id}`)
		get(userRef).then((user) => {
			var userData = user.val()
			setInput(userData)
			setId(id)
			setEdit(true)
		})
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
								<input name="name" value={input ? input.name : ""} type="text" className="form-control" id="name" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label fw-bold">
									Email address
								</label>
								<input name="email" value={input ? input.email : ""} type="email" className="form-control" id="email" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="pass" className="form-label fw-bold">
									Password
								</label>
								<input name="pass" value={input ? input.pass : ""} type="password" className="form-control" id="pass" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="address" className="form-label fw-bold">
									Address
								</label>
								<textarea value={input ? input.address : ""} className="form-control" name="address" id="address" rows="3" onChange={handleChange}></textarea>
							</div>
							<button type="submit" className="btn btn-success">
								{edit ? "Update" : "Submit"}
							</button>
						</form>
					</div>
					<div className="col-6 mt-4">
						<table className="table table-danger">
							<thead>
								<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Password</th>
									<th>Address</th>
									<th>Action</th>
								</tr>
							</thead>

							<tbody>
								{data &&
									data.map((data, i) => (
										<tr key={i}>
											<td>{data.id}</td>
											<td>{data.name}</td>
											<td>{data.email}</td>
											<td>{data.pass}</td>
											<td>{data.address}</td>
											<td>
												<button className="btn btn-warning" onClick={() => handleEdit(data.id)}>
													Edit
												</button>
												<button className="btn btn-danger" onClick={() => handleDelete(data.id)}>
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

export default Crud
