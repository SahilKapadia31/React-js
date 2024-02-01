import { Component } from "react"
import { Container, Navbar } from "react-bootstrap"
import logo from "../../assets/logo.svg"

class Footer extends Component {
	render() {
		return (
			<Navbar className="bg-primary justify-content-end">
				<Container>
					<Navbar.Brand href="#home">
						<img alt="" src={logo} width="80" height="80" className="" /> React Footer
					</Navbar.Brand>
				</Container>
			</Navbar>
		)
	}
}

export default Footer
