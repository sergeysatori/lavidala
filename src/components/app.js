import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFound from '../routes/404';
import createHashHistory from 'history/createHashHistory';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Cancion from 'async!../routes/cancion';
import Canciones from 'async!../routes/canciones';
import MaterialTEA from 'async!../routes/material-tea';
import ObraPlastica from 'async!../routes/obra-plastica';
import ObrasPlasticas from 'async!../routes/obras-plasticas';
import FotosYVideos from 'async!../routes/fotos-y-videos';

export default class App extends Component {
	// constructor(props) {
  //   super(props);
	//
	// }
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
					<Profile path="/ficha-tecnica/" user="me" />
					<Profile path="/ficha-tecnica/:user" />
					<Cancion path="/cancion/:id" />
					<Canciones path="/canciones" />
					<ObraPlastica path="/obra-plastica/:id" />
					<ObrasPlasticas path="/obras-plasticas/" />
					<FotosYVideos path="/fotos-y-videos/" />
					<MaterialTEA path="/material-tea/" />
          <NotFound default />
				</Router>
			</div>
		);
	}
}
