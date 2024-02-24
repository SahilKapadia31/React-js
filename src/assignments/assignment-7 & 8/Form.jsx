import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Form() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		pass: "",
		gender: "",
		hobbies: [],
		course: "",
		address: "",
	})
	const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || [])
	const [edit, setEdit] = useState(false)
	const [errors, setErrors] = useState({})
	const navigate = useNavigate()
	const uid = useParams()
	const Id = uid.id

	if (Id) {
		useEffect(() => {
			handleEdit()
		}, [])
	}

	const handleEdit = () => {
		setEdit(true)
		setInput(userData[Id])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (validate()) {
			if (edit) {
				userData[Id] = input
				setUserData(userData)
				localStorage.setItem("userData", JSON.stringify(userData))
			} else {
				setUserData([...userData, input])
				localStorage.setItem("userData", JSON.stringify([...userData, input]))
			}
			setEdit(false)
			setInput({ name: "", email: "", pass: "", gender: "", hobbies: [], course: "", address: "" })
			navigate("/table")
		}
	}

	const validate = () => {
		let newErrors = {}
		if (!input.name) {
			newErrors.name = "Name is required"
		}
		if (!input.email) {
			newErrors.email = "Email is required"
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
			newErrors.email = "Email is invalid"
		}
		if (!input.pass) {
			newErrors.pass = "Password is required"
		} else if (input.pass.length < 6) {
			newErrors.pass = "Password must be at least 6 characters"
		}
		if (!input.gender) {
			newErrors.gender = "Gender is required"
		}
		if (input.hobbies.length === 0) {
			newErrors.hobbies = "At least one hobby is required"
		}
		if (!input.course || input.course === "Open this select menu") {
			newErrors.course = "Course is required"
		}
		if (!input.address) {
			newErrors.address = "Address is required"
		}
		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleChange = (e) => {
		if (e.target.name == "hobbies") {
			if (e.target.checked) {
				input.hobbies.push(e.target.value)
			} else {
				input.hobbies = input.hobbies.filter((hobby) => hobby !== e.target.value)
			}
			setInput(input)
		} else {
			setInput({ ...input, [e.target.name]: e.target.value })
		}
		setErrors({ ...errors, [e.target.name]: "" })
	}

	return (
		<div>
			<h1 className="mt-5 text-center">Course Form</h1>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label fw-bold">
									Name
								</label>
								<input value={input.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" />
								<div className="text-danger">{errors.name}</div>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label fw-bold">
									Email address
								</label>
								<input value={input.email} onChange={handleChange} name="email" type="email" className="form-control" id="email" />
								<div className="text-danger">{errors.email}</div>
							</div>
							<div className="mb-3">
								<label htmlFor="pass" className="form-label fw-bold">
									Password
								</label>
								<input value={input.pass} onChange={handleChange} name="pass" type="password" className="form-control" id="pass" />
								<div className="text-danger">{errors.pass}</div>
							</div>
							<div className="mb-3">
								<label htmlFor="gender" className="form-label fw-bold">
									Gender
								</label>
								<br />
								<input value={"Male"} checked={input.gender == "Male"} onChange={handleChange} className="form-check-input border-secondary" type="radio" name="gender" id="male" />
								<label className="form-check-label mx-2" htmlFor="male">
									Male
								</label>
								<input
									value={"Female"}
									checked={input.gender == "Female"}
									onChange={handleChange}
									className="form-check-input border-secondary"
									type="radio"
									name="gender"
									id="female"
								/>
								<label className="form-check-label ms-2" htmlFor="female">
									Female
								</label>
								<div className="text-danger">{errors.gender}</div>
							</div>
							<div className="mb-3">
								<label htmlFor="hobbies" className="form-label fw-bold">
									Hobbies
								</label>
								<br />
								<input value={"Cricket"} onChange={handleChange} className="form-check-input border-secondary" name="hobbies" type="checkbox" id="cricket" />
								<label className="form-check-label mx-2" htmlFor="cricket">
									Cricket
								</label>
								<input value={"A-sports"} onChange={handleChange} className="form-check-input border-secondary" name="hobbies" type="checkbox" id="a-sports" />
								<label className="form-check-label ms-2" htmlFor="a-sports">
									Adventure Sports
								</label>
								<input value={"Volly-Ball"} onChange={handleChange} className="form-check-input border-secondary" name="hobbies" type="checkbox" id="volly-ball" />
								<label className="form-check-label ms-2" htmlFor="volly-ball">
									Volly Ball
								</label>
								<div className="text-danger">{errors.hobbies}</div>
							</div>
							<div>
								<label htmlFor="course" className="form-label fw-bold">
									Course
								</label>
								<br />
								<select value={input.course} className="form-select" name="course" onChange={handleChange}>
									<option defaultValue="Open this select menu">Open this select menu</option>
									<option value="One">One</option>
									<option value="Two">Two</option>
									<option value="Three">Three</option>
								</select>
								<div className="text-danger">{errors.course}</div>
							</div>
							<div className="mb-3">
								<label htmlFor="address" className="form-label fw-bold">
									Address
								</label>
								<textarea value={input.address} onChange={handleChange} className="form-control" name="address" id="address" rows="3"></textarea>
								<div className="text-danger">{errors.address}</div>
							</div>
							<button type="submit" className="btn btn-success">
								{edit ? "Update" : "Submit"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Form
