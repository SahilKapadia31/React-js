import React from "react"
import Timer from "./Timer"

const App2 = () => {
	return (
		<div>
			<Timer duration={2 * 24 * 60 * 60 * 1000} />
		</div>
	)
}

export default App2
