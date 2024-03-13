import React from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"
import { FaStaylinked } from "react-icons/fa6"

const Navbar = () => {
	return (
		<nav className="">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<span role="button">
						Assignments <IoIosArrowDown />
					</span>
					<ul className=" d-flex list-unstyled justify-content-between">
						<li>
							<Link to="/assignment-1">
								Assignment-1 <br />
								<FaStaylinked /> Header & Footer
							</Link>
						</li>
						<li>
							<Link to="/assignment-2">
								Assignment-2 <br />
								<FaStaylinked /> Counter
							</Link>
						</li>
						<li>
							<Link to="/assignment-3">
								Assignment-3 <br />
								<FaStaylinked /> CRUD
							</Link>
						</li>
						<li>
							<Link to="/assignment-4">
								Assignment-4 <br />
								<FaStaylinked /> Feedback Form
							</Link>
						</li>
						<li>
							<Link to="/assignment-5">
								Assignment-5 <br />
								<FaStaylinked /> Main Banner
							</Link>
						</li>
						<li>
							<Link to="/assignment-6">
								Assignment-6 <br />
								<FaStaylinked /> CRUD TABLE
							</Link>
						</li>
						<li>
							<Link to="/assignment-7">
								Assignment-7 <br />
								<FaStaylinked /> Multi Page CRUD TABLE
							</Link>
						</li>
						<li>
							<Link to="/assignment-8">
								Assignment-8 <br />
								<FaStaylinked /> Filter,Sorting & Serching
							</Link>
						</li>
						<li>
							<Link to="/assignment-9">
								Assignment-9 <br />
								<FaStaylinked /> Redux-thunk
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
