import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"
import { FaStaylinked } from "react-icons/fa6"

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<span role="button">
						Assignments <IoIosArrowDown />
					</span>
					<ul>
						<li>
							<Link to="/assignment-1">
								Assignment-1 <FaStaylinked /> Header & Footer
							</Link>
						</li>
						<li>
							<Link to="/assignment-2">
								Assignment-2 <FaStaylinked /> Counter
							</Link>
						</li>
						<li>
							<Link to="/assignment-3">
								Assignment-3 <FaStaylinked /> CRUD
							</Link>
						</li>
						<li>
							<Link to="/assignment-4">
								Assignment-4 <FaStaylinked /> Feedback Form
							</Link>
						</li>
						<li>
							<Link to="/assignment-5">
								Assignment-5 <FaStaylinked /> Main Banner
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
