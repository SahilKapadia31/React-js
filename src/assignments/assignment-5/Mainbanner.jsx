import { Component } from "react"
import Button from "react-bootstrap/Button"
import Header from "./Header"
import "./App5.css"
import { Link } from "react-router-dom"

class Mainbanner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: [],
		}
	}

	componentDidMount() {
		const savedUsers = JSON.parse(localStorage.getItem("logedUser")) || []
		if (savedUsers !== null) {
			this.setState({ user: savedUsers })
		}
	}

	render() {
		const { user } = this.state

		return (
			<div className="main-banner h-100dvh bg-black ">
				<Header />
				<div className="container">
					<div className="d-flex align-items-center h-80dvh justify-content-between">
						<div className="">
							<p className="text-warning-emphasis fw-bold">PRODUCT</p>
							<h1 className="text-white display-3 fw-bold">Diesel Watch</h1>
							<p className="text-white fw-bold py-4">
								Elia Pirazzo <span className="text-secondary">- March 17th 2016</span>
							</p>
							<Button className="rounded-5 fw-bold fs-6 px-3 me-3" variant="light">
								VIEW CASE
							</Button>
							{user.isLogIn && (
								<Link to={"/assignment-10"} className="rounded-5 bg-danger border-danger fw-bold fs-6 px-3 py-2 text-decoration-none text-white" variant="light">
									Log-Out
								</Link>
							)}
						</div>
						<div className="fs-1 fw-semibold text-white">
							Welcome <span className="text-danger">{user.username}</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Mainbanner
