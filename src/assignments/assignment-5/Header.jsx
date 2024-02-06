import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../assets/images/logo.png"
import "./App5.css"

function Header(params) {
	return (
		<Navbar className="px-5" bg="transperent" data-bs-theme="dark">
			<Navbar.Brand href="#home">
				<img className="img-fluid" src={logo} alt="" />
			</Navbar.Brand>
			<Nav className="ms-auto fw-medium gap-3">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Sliders</Nav.Link>
				<Nav.Link href="#pricing">Portfolio</Nav.Link>
				<Nav.Link href="#About">About</Nav.Link>
				<Nav.Link href="#Stories">Stories</Nav.Link>
				<Nav.Link href="#Contact">Contact</Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default Header
