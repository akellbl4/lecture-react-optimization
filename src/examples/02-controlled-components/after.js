import { Component, createRef } from 'react'

export default class ControlledComponent extends Component {
	firstNameInput = createRef()
	lastNameInput = createRef()

	render() {
		return (
			<form
				onSubmit={(evt) => {
					evt.preventDefault()
					console.log('First Name:', this.firstNameInput.current.value)
					console.log('Last Name:', this.lastNameInput.current.value)
				}}
			>
				<div className="mb-3">
					<label htmlFor="firstName" className="form-label">
						First Name
					</label>
					<input
						ref={this.firstNameInput}
						id="firstName"
						type="text"
						className="form-control"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="lastName" className="form-label">
						Last Name
					</label>
					<input
						ref={this.lastNameInput}
						id="lastName"
						type="text"
						className="form-control"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		)
	}
}
