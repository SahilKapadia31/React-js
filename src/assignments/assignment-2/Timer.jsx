import React, { useState, useEffect } from "react"

const Timer = ({ duration }) => {
	const [time, setTime] = useState(duration)
	const [isRunning, setIsRunning] = useState(false)

	const handleStart = () => {
		setIsRunning(true)
	}

	const handleStop = () => {
		setIsRunning(false)
	}

	const handleReset = () => {
		setIsRunning(false)
		setTime(duration)
	}

	useEffect(() => {
		if (isRunning) {
			const timer = setTimeout(() => {
				setTime(time - 1000)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [isRunning, time])

	const getFormatedtime = (milliseconds) => {
		let totalSeconds = parseInt(Math.floor(milliseconds / 1000))
		let totalMinutes = parseInt(Math.floor(totalSeconds / 60))
		let totalHours = parseInt(Math.floor(totalMinutes / 60))
		let days = parseInt(Math.floor(totalHours / 24))

		let seconds = parseInt(totalSeconds % 60)
		let minutes = parseInt(totalMinutes % 60)
		let hours = parseInt(totalHours % 24)

		return `${days}:${hours}:${minutes}:${seconds}`
	}

	return (
		<div>
			<div>{getFormatedtime(time)}</div>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}

export default Timer
