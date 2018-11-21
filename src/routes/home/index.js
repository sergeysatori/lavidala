import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
			 <h1>El sitio no está listo aún! :o </h1>
			 <p>Estamos construyendo éste sitio para que puedas acceder a <i><b>La Vida-la</b></i> desde cualquier lugar.<br/>
			 Gracias por venir, esperamos que vuelvas pronto!</p>
				<div class={style.laVidaLaIntro}>

				</div>
			</div>
		);
	}
}
