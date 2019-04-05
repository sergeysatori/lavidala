import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import NotFound from '../routes/404';
import createHashHistory from 'history/createHashHistory';
import Home from 'async!../routes/home';
import Profile from 'async!../routes/profile';
import Apoyan from 'async!../routes/apoyan';
import Cancion from 'async!../routes/cancion';
import Canciones from 'async!../routes/canciones';
import MaterialTEA from 'async!../routes/material-tea';
import ObraPlastica from 'async!../routes/obra-plastica';
import ObrasPlasticas from 'async!../routes/obras-plasticas';
import FotosYVideos from 'async!../routes/fotos-y-videos';
import Fullscreen from "react-full-screen";

export default class App extends Component {
	constructor(props) {
    super(props);
		this.state = {
			currentUrl: '',
			hadFirstLoad: false,
			isFull: false
		};
		this.setFirstLoad = this.setFirstLoad.bind(this);
		this.goFull = this.goFull.bind(this);
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {

		this.setState({
			currentUrl: e.url
		});
	};
	setFirstLoad()	{
		this.setState({
			hadFirstLoad: true
		});
	}
	goFull(){
		this.setState({ isFull: true });
	}
	render() {
		return (
			<div id="app">
			{ this.state.isFull ? false :
			<div onClick={this.goFull}
			style={{position: 'fixed',
			top: '2vh',
			right: '13px',
			cursor: 'pointer',
			color: 'rgba(175, 148, 116, 0.4)',
			border: '',
			zIndex:'3000'}}>
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path style={{fill: 'rgba(175, 148, 116, 0.6)'}} d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"/></svg>
			</div>}
			<Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
				<div style={{ overflowY:'scroll', width: '100%', height: '100vh'}}>
				<Header selectedRoute={this.state.currentUrl}/>
				<Router onChange={this.handleRoute}>
					<Home hadFirstLoad={this.state.hadFirstLoad} setFirstLoad={this.setFirstLoad} path="/" />
					<Profile path="/ficha-tecnica/" user="me" />
					<Profile path="/ficha-tecnica/:user" />
					<Cancion path="/cancion/:id" />
					<Canciones path="/canciones" />
					<ObraPlastica path="/obra-plastica/:id" />
					<ObrasPlasticas path="/obras-plasticas/" />
					<FotosYVideos path="/fotos-y-videos/" />
					<MaterialTEA path="/material-tea/" />
					<Apoyan path="/apoyan/" />
          <NotFound default />
				</Router>
				</div>
				</Fullscreen>
			</div>
		);
	}
}
