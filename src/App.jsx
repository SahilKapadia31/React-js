import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import App1 from "./assignments/assignment-1/App1"
import App2 from "./assignments/assignment-2/App2"
import App3 from "./assignments/assignment-3/App3"
import App4 from "./assignments/assignment-4/App4"
import App5 from "./assignments/assignment-5/App5"
import App6 from "./assignments/assignment-6/App6"
import App7 from "./assignments/assignment-7/App7"
import App8 from "./assignments/assignment-8/App8"
import App9 from "./assignments/assignment-9/App9"
import Table from "./assignments/assignment-7/Table"
import Form from "./assignments/assignment-7/Form"
import Counter from "./Counter"
import Cart from "./assignments/assignment-9/Cart"
import ProductPage from "./assignments/assignment-9/ProductPage"

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/assignment-1" element={<App1 />} />
				<Route path="/assignment-2" element={<App2 />} />
				<Route path="/assignment-3" element={<App3 />} />
				<Route path="/assignment-4" element={<App4 totalStars={5} />} />
				<Route path="/assignment-5" element={<App5 />} />
				<Route path="/assignment-6" element={<App6 />} />
				<Route path="/assignment-7" element={<App7 />} />
				<Route path="/assignment-8" element={<App8 />} />
				<Route path="/assignment-9" element={<App9 />} />
				{/* Add more routes for other assignments if needed */}
				<Route path="/" element={<>{/*Componants  */}</>} />
				<Route path="/table" element={<Table />} />
				<Route path="/form/:id" element={<Form />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/productPage" element={<ProductPage />} />
			</Routes>
		</Router>
	)
}

export default App
