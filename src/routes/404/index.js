import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import style from './style';
import {route} from 'preact-router';

export default class NotFound extends Component {
	componentDidMount(){
		route('/no-encontrado');
	}
	render() {
		return (
			<div class={`${style.home} page`} style={{
	        backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
	        width: '100%',
	        height: '150%',
	        overflow: 'hidden'
	      }}>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">404! No pudimos encontrar ésta página.</h2>
					</div>
					<div class={style.cardBody}>
						Parece que la página a la que intentás acceder no existe.
					</div>
				</Card>
			</div>
		);
	}
}
