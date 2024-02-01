import React, { useState } from "react"

function Form() {
	const [input, setInput] = useState()
	const [display, setDisplay] = useState()

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setDisplay(input)
		console.log(input)
	}
	return (
		<center>
			<h1 className="mt-5">Course Form</h1>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<form className="" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input name="name" type="text" className="form-control" id="name" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email address
								</label>
								<input name="email" type="email" className="form-control" id="email" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="pass" className="form-label">
									Password
								</label>
								<input name="pass" type="password" className="form-control" id="pass" onChange={handleChange} />
							</div>
							<div className="mb-3">
								<label htmlFor="gender" className="form-label">
									Gender
								</label>{" "}
								<br />
								<input className="form-check-input" type="radio" name="gender" id="male" onChange={handleChange} />
								<label className="form-check-label" htmlFor="male">
									Male
								</label>
								<input className="form-check-input" type="radio" name="gender" id="female" onChange={handleChange} />
								<label className="form-check-label" htmlFor="female">
									Female
								</label>
							</div>
							<div className="mb-3">
								<label htmlFor="hobbies" className="form-label">
									Hobbies
								</label>{" "}
								<br />
								<input className="form-check-input" name="hobbies" type="checkbox" value="cricket" id="cricket" onChange={handleChange} />
								<label className="form-check-label" htmlFor="cricket">
									Cricket
								</label>
								<input className="form-check-input" name="a-hobbies" type="checkbox" value="a-sports" id="a-sports" onChange={handleChange} />
								<label className="form-check-label" htmlFor="a-sports">
									Adventure Sports
								</label>
							</div>
							<div>
								<label htmlFor="course" className="form-label">
									Course
								</label>{" "}
								<br />
								<select className="form-select" name="course" onChange={handleChange}>
									<option selected>Open this select menu</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="mb-3">
								<label htmlFor="address" className="form-label">
									Address
								</label>
								<textarea className="form-control" name="address" id="address" rows="3" onChange={handleChange}></textarea>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					<div className="col-6">
						<h3>Name:{display ? display.name : "N/A"}</h3>
						<h3>Email:{display ? display.email : "N/A"}</h3>
						<h3>Pass:{display ? display.pass : "N/A"}</h3>
						<h3>Gender:{display ? display.gender : "N/A"}</h3>
						<h3>Hobbies:{display ? display.hobbies : "N/A"}</h3>
						<h3>Course:{display ? display.course : "N/A"}</h3>
						<h3>Address:{display ? display.address : "N/A"}</h3>
					</div>
				</div>
			</div>
		</center>
	)
}

export default Form
