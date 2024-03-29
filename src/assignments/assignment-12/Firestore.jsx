import React, { useEffect, useState } from "react"
import { db } from "./Firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import "./fire.css"

const Firestore = () => {
	const [input, setInput] = useState({})
	const [blogs, setBlogs] = useState()
	const [edit, isEdit] = useState(false)
	const [id, setId] = useState()

	useEffect(() => {
		fetchBlogs()
	}, [blogs])

	async function fetchBlogs() {
		var blogs = await getDocs(collection(db, "blogs"))
		var list = []
		blogs.forEach((blog) => {
			var id = blog.id
			list.push({ id, ...blog.data(), submissionTime: calculateTimeDifference(blog.data().timestamp.toDate()) })
		})
		setBlogs(list)
	}

	function calculateTimeDifference(submissionTime) {
		var now = new Date()
		var diff = Math.abs(now - submissionTime) / 1000
		var hours = Math.floor(diff / 3600)
		var minutes = Math.floor((diff % 3600) / 60)
		var timeString = ""
		if (hours > 0) {
			timeString += hours + " hour"
			if (hours > 1) timeString += "s"
			timeString += " ago"
		} else {
			timeString += minutes + " minute"
			if (minutes > 1) timeString += "s"
			timeString += " ago"
		}
		return timeString
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		var timestamp = new Date()
		if (edit) {
			const blogRef = doc(db, `blogs/${id}`)
			await updateDoc(blogRef, { ...input, timestamp })
			isEdit(false)
			setInput(null)
		} else {
			var blog = await addDoc(collection(db, "blogs"), { ...input, timestamp })
			setInput(null)
		}
	}
	async function fetchBlogs() {
		var blogs = await getDocs(collection(db, "blogs"))
		var list = []
		blogs.forEach((blog) => {
			var id = blog.id
			var blogData = blog.data()
			var submissionTime = blogData.timestamp ? calculateTimeDifference(blogData.timestamp.toDate()) : ""
			list.push({ id, ...blogData, submissionTime })
		})
		setBlogs(list)
	}

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value })
	}

	const handleDelete = async (id) => {
		var deleData = await deleteDoc(doc(db, `blogs/${id}`))
	}

	const handleEdit = async (id) => {
		const blogRef = doc(db, `blogs/${id}`)
		const docSnap = await getDoc(blogRef)
		setInput(docSnap.data())
		isEdit(true)
		setId(id)
	}

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="rounded-4 pb-5">
							<h1 className="text-center mb-5">Create Blog</h1>
							<form class="signup-form bg-primary-subtle w-50" action="" onSubmit={handleSubmit}>
								<h2 className="text-center">Add Blog Data</h2>
								<input type="text" name="name" id="" placeholder="Enter Your Name" onChange={handleChange} value={input ? input.name : ""} required />
								<br />
								<input type="text" name="topic_title" id="" placeholder="Enter Topic Title" onChange={handleChange} value={input ? input.topic_title : ""} required />
								<br />
								<input type="text" name="discription" id="" placeholder="Add Discription" onChange={handleChange} value={input ? input.discription : ""} required />
								<br />
								<button className="btn btn-success w-50 rounded-5">{edit ? "Change blog" : "Submit blog"}</button>
							</form>
						</div>
					</div>
					<div className="col-6">
						<div className="container">
							<h1 className="text-center mb-5">Blog Carts</h1>
							<div className="row gx-4">
								{blogs &&
									blogs.map((blog, id) => (
										<div className="col-4">
											<div key={id} class="card-container mb-4 p-3">
												<div class="card-image">
													<img
														src="https://static.wixstatic.com/media/11062b_823da8115fcc44fca20049047695869a~mv2.jpeg/v1/fill/w_6625,h_3727,al_c,q_90/Mumbai%20City.jpeg"
														alt=""
													/>
												</div>
												<div class="card-body">
													<h1>{blog.topic_title}</h1>
													<p class="card-subtitle">{blog.discription}</p>
													<div class="card-author">
														<img
															src="https://st3.depositphotos.com/5532432/17943/v/1600/depositphotos_179437388-stock-illustration-gentleman-flat-vector-icon.jpg"
															alt="author avatar"
														/>
														<div class="author-info">
															<p class="author-name">{blog.name}</p>
															<p class="post-timestamp">{blog.submissionTime}</p>
														</div>
													</div>
												</div>
												<div className="d-flex mt-2">
													<button className="w-100 btn btn-warning rounded-5 me-2" onClick={() => handleEdit(blog.id)}>
														EDIT
													</button>
													<button className="w-100 btn btn-danger rounded-5" onClick={() => handleDelete(blog.id)}>
														DELETE
													</button>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Firestore
