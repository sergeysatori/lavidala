import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
			 <br/>
			 <br/>
				<div class={style.laVidaLaIntro}>
					
				</div>
			</div>
		);
	}
}
