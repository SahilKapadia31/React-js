import { Component } from "react"
import Button from "react-bootstrap/Button"
import Header from "./Header"
import "./App5.css"

class Mainbanner extends Component {
	render() {
		return (
			<div className="main-banner h-100dvh bg-black ">
				<Header />
				<div className="container">
					<div className="d-flex align-items-center h-80dvh">
						<div className="">
							<p className="text-warning-emphasis fw-bold">PRODUCT</p>
							<h1 className="text-white display-3 fw-bold">Diesel Watch</h1>
							<p className="text-white fw-bold py-4">
								Elia Pirazzo <span className="text-secondary">- March 17th 2016</span>
							</p>
							<Button className="rounded-5 fw-bold fs-6 px-3" variant="light">
								VIEW CASE
							</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Mainbanner
