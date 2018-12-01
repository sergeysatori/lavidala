import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFound from '../routes/404';
// import createHashHistory from 'history/createHashHistory';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Tema from 'async!../routes/tema';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl}/>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Tema path="/tema/:id" user="me" />
					<Profile path="/autor/" user="me" />
					<Profile path="/autor/:user" />
          <NotFound default />
				</Router>
			</div>
		);
	}
}
