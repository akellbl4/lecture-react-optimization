import { Component } from 'react'

export default class ControlledComponent extends Component {
	state = {
		firstName: '',
		lastName: '',
	}

	render() {
		return (
			<form
				onSubmit={(evt) => {
					evt.preventDefault()
					console.log('First Name:', this.state.firstName)
					console.log('Last Name:', this.state.lastName)
				}}
			>
				<div className="mb-3">
					<label htmlFor="firstName" className="form-label">
						First Name
					</label>
					<input
						id="firstName"
						type="text"
						className="form-control"
						value={this.state.firstName}
						onChange={(evt) => {
							this.setState({
								firstName: evt.currentTarget.value,
							})
						}}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="lastName" className="form-label">
						Last Name
					</label>
					<input
						id="lastName"
						type="text"
						className="form-control"
						value={this.state.lastName}
						onChange={(evt) => {
							this.setState({
								lastName: evt.currentTarget.value,
							})
						}}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		)
	}
}
