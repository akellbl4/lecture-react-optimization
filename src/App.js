import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Reconcilation from './parts/01-reconcilation'
import ControlledComponent from './parts/02-controlled-components'
import LongList from './parts/03-long-lists'

const history = createBrowserHistory()

export default function App() {
	return (
		<Router history={history}>
			<div className="container">
				<Switch>
					<Route path="/" exact>
						<nav>
							<h3>Parts</h3>
							<ol>
								<li>
									<Link to="/01-reconcilation">Reconcilation</Link>
								</li>
								<li>
									<Link to="/02-controlled-components">
										Un/Controlled components
									</Link>
								</li>
								<li>
									<Link to="/03-long-lists">Long list</Link>
								</li>
								<li>
									<Link to="/04-profiler">Profiler</Link>
								</li>
								<li>
									<Link to="/05-use-memo">useMemo hook and other</Link>
								</li>
							</ol>
						</nav>
					</Route>
					<Route path="/01-reconcilation" component={Reconcilation} />
					<Route
						path="/02-controlled-components"
						component={ControlledComponent}
					/>
					<Route path="/03-long-lists" component={LongList} />
					<Route path="/04-use-memo">useMemo</Route>
					<Route path="/05-profiler">profiler</Route>
				</Switch>
			</div>
		</Router>
	)
}
