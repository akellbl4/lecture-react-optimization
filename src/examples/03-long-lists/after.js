import { Component } from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const Row = ({ data, index, style }) => {
	const { url, title, thumbnailUrl, text } = data[index]

	return (
		<a className="card" style={{ ...style, width: 300 }} href={url}>
			<img className="card-img-top" src={thumbnailUrl} alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
			</div>
		</a>
	)
}

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
					photos: json,
				})
			})
	}

	render() {
		const { isLoading, photos } = this.state

		return (
			<div className="container" style={{ height: '100vh' }}>
				{isLoading && <div className="spinner-border" role="status" />}
				<AutoSizer>
					{({ height, width }) => (
						<List
							height={height}
							width={width}
							itemCount={photos.length}
							itemSize={400}
							itemData={photos}
						>
							{Row}
						</List>
					)}
				</AutoSizer>
			</div>
		)
	}
}
