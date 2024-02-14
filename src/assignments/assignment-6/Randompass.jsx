import React, { useCallback, useEffect, useRef, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Randompass = () => {
	const [password, setPassword] = useState("")
	const [range, setRange] = useState(8)
	const [num, allowNum] = useState(false)
	const [char, allowChar] = useState(false)

	const passRef = useRef(null)

	const copyPass = useCallback(() => {
		passRef.current.select()
		window.navigator.clipboard.writeText(password)
	}, [password])

	const passwordGenerator = useCallback(() => {
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

		if (num) {
			str += "0123456789"
		}
		if (char) {
			str += "!@#$%^&*()-_=+|{};:/?.>"
		}

		for (let i = 0; i < range; i++) {
			const randomNum = Math.floor(Math.random() * str.length + 1)
			pass += str.charAt(randomNum)
		}

		setPassword(pass)
	}, [range, num, char, setPassword])

	useEffect(() => {
		passwordGenerator()
	}, [range, num, char, setPassword])

	return (
		<div>
			<div className="container">
				<h1 className="text-center">Password Generator</h1>
				<div className="row justify-content-center mt-5">
					<div className="col-6">
						<div className="input-group">
							<input type="text" className="form-control border-secondary" value={password} ref={passRef} readOnly />
							<button className="btn btn-outline-success" type="button" onClick={copyPass}>
								Copy
							</button>
						</div>
						<div className="mt-3 d-flex justify-content-spacebetween">
							<input
								type="range"
								className="form-range w-50 me-3"
								min={5}
								max={100}
								value={range}
								onChange={(e) => {
									setRange(e.target.value)
								}}
							/>{" "}
							<span className="w-25">Range : {range}</span>
							<div className="form-check form-check-inline ms-3">
								<input
									className="form-check-input border-secondary "
									type="checkbox"
									value={num}
									onChange={() => {
										allowNum((prev) => !prev)
									}}
								/>
								<label className="form-check-label" htmlFor="inlineCheckbox1">
									Numbers
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input border-secondary "
									type="checkbox"
									value={char}
									onChange={() => {
										allowChar((prev) => !prev)
									}}
								/>
								<label className="form-check-label" htmlFor="inlineCheckbox2">
									Characters
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Randompass
