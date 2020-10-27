import { Component, memo } from 'react'

const Item = memo(({ title, id, onDeleteClick }) => (
	<li className="list-group-item d-flex">
		{title}
		<button
			data-id={id}
			className="btn btn-danger ml-auto"
			onClick={onDeleteClick}
		>
			Delete
		</button>
	</li>
))

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
		}, 10000)
	}

	onDeleteClick = (evt) => {
		const id = Number(evt.currentTarget.dataset.id)
		const posts = [...this.state.posts]
		const index = posts.findIndex((p) => id === p.id)

		posts.splice(index, 1)
		this.setState({ posts })
	}

	render() {
		const { isLoading, posts } = this.state

		return (
			<div className="container">
				<h1>List</h1>
				{isLoading ? (
					<div className="spinner-border" role="status" />
				) : (
					<ul className="list-group">
						{posts.map(({ title, id }) => (
							<Item
								key={id}
								id={id}
								title={title}
								onDeleteClick={this.onDeleteClick}
							/>
						))}
					</ul>
				)}
				<footer>Posts count: {isLoading ? posts.length : 'Loading....'}</footer>
			</div>
		)
	}
}
