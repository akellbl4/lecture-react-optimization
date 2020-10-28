import { useMemo, useState } from 'react'

export default function UseMemo() {
	const [counter, setCounter] = useState(0)
	const [counter2, setCounter2] = useState(0)
	const result = useMemo(() => {
		let r = 0

		for (let i = 0; i < 900000000; i++) {
			r = i + counter2
		}

		return r
	}, [counter2])

	const increaseCounter = () => {
		setCounter(counter + 1)
	}

	const increaseCounter2 = () => {
		setCounter2((c) => c + 1)
	}

	return (
		<div>
			<h1>useMemo</h1>
			<div>Result: {result}</div>
			<div>{counter}</div>
			<div>{counter2}</div>
			<button className="btn btn-success" onClick={increaseCounter}>
				Increse counter
			</button>
			<button className="btn btn-success" onClick={increaseCounter2}>
				Increse counter2
			</button>
		</div>
	)
}
