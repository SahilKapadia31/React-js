import React, { useState } from "react"

const App4 = () => {
	const [input, setInput] = useState({
		name: "",
		rating: "5 star",
		message: "",
	})
	const [displayData, setDisplay] = useState([])
	const [ratings, setRating] = useState([
		{ value: "1 ⭐", label: "1 ⭐" },
		{ value: "2 ⭐⭐", label: "2 ⭐⭐" },
		{ value: "3 ⭐⭐⭐", label: "3 ⭐⭐⭐" },
		{ value: "4 ⭐⭐⭐⭐", label: "4 ⭐⭐⭐⭐" },
		{ value: "5 ⭐⭐⭐⭐⭐", label: "5 ⭐⭐⭐⭐⭐" },
	])

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setDisplay([...displayData, input])
		setInput({ name: "", rating: "5 star", message: "" })
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<form className="" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input name="name" type="text" className="form-control" id="name" onChange={handleChange} value={input.name} />
						</div>
						<div className="mb-3">
							<label htmlFor="rating" className="form-label">
								Rating
							</label>{" "}
							<br />
							<select className="form-select" name="rating" id="rating" value={input.rating} onChange={handleChange}>
								{ratings.map((rating) => (
									<option key={rating.value} value={rating.value}>
										{rating.label}
									</option>
								))}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Share your thoughts...
							</label>
							<textarea className="form-control" name="message" id="message" rows="3" onChange={handleChange} value={input.message}></textarea>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<div className="col-6">
					{displayData.map((data, i) => (
						<div key={i}>
							<h3>Name:{data ? data.name : "N/A"}</h3>
							<h3>Rating:{data ? data.rating : "N/A"}</h3>
							<h3>Comments:{data ? data.message : "N/A"}</h3>
							<hr />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App4
