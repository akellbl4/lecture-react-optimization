//   id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
//   phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
//   actualDuration, // время, затраченное на рендер зафиксированного обновления
//   baseDuration, // предполагаемое время рендера всего поддерева без кеширования
//   startTime, // когда React начал рендерить это обновление
//   commitTime, // когда React зафиксировал это обновление
//   interactions // Множество «взаимодействий» для данного обновления
// Photos mount 267.07499971962534 34.99499984900467 5582.064999995055 5857.870000007097

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
		const { isLoading, photos, counter } = this.state

		return (
			<div className="container" style={{ height: '100vh' }}>
				<button className="btn btn-success">Increace counter</button>
				<div>{counter}</div>
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
