import { Component } from 'react'

export default class LongList extends Component {
	state = {
		isLoading: false,
		photos: [],
		counter: 0,
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					isLoading: false,
					photos: json.slice(0, 1000),
				})
			})
	}

	render() {
		const { isLoading, photos } = this.state

		return (
			<div className="container" style={{ height: '100vh' }}>
				{isLoading ? (
					<div className="spinner-border" role="status" />
				) : (
					photos.map(({ url, thumbnailUrl, title, text }) => (
						<a className="card" style={{ width: 300 }} href={url}>
							<img className="card-img-top" src={thumbnailUrl} alt={title} />
							<div className="card-body">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{text}</p>
							</div>
						</a>
					))
				)}
			</div>
		)
	}
}
