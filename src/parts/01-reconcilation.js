import { Component } from 'react'

export default class Reconcilation extends Component {
	state = {
		isLoading: false,
		posts: [],
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					this.setState({ isLoading: false, posts: json.slice(0, 20) })
				})
		}, 5000)
	}

	render() {
		const { isLoading, posts } = this.state

		if (isLoading) {
			return (
				<>
					<h1>List</h1>
					<div className="spinner-border" role="status" />
					<footer>Posts count: loading...</footer>
				</>
			)
		}

		return (
			<div className="container">
				<h1>List</h1>
				<ul className="list-group">
					{posts.map(({ title, id }, i) => (
						<li className="list-group-item d-flex">
							{title}
							<button
								className="btn btn-danger ml-auto"
								onClick={() => {
									const posts = [...this.state.posts]
									const index = posts.findIndex((p) => id === p.id)

									posts.splice(index, 1)
									this.setState({ posts })
								}}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
				<footer>Posts count: {posts.length}</footer>
			</div>
		)
	}
}
