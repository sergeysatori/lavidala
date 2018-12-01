import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

import style from './style';

export default class Tema extends Component {
	constructor(props) {
  	super(props);

	  this.state = { counter: 0 };
	  this.isMobile = this.isMobile.bind(this);
	}

	componentDidMount() {
	    this.isMobile();
	    window.addEventListener("resize", this.isMobile.bind(this));
  }

	componentWillUnmount() {
	  window.removeEventListener("resize", this.isMobile.bind(this));
	}

	isMobile() {
		this.setState({isMobile: window.innerWidth < 600 ? true : false})
	}

	render() {
		return (
			<div class={`${style.home} page`}>

				<LayoutGrid>
					<LayoutGrid.Inner>
						<LayoutGrid.Cell class={style.temaPresentVisual} style={{backgroundImage: 'url(/assets/images/gracias_a_la_vida_vparra_oscar_laguarda1366X1020_72.jpg)'}} cols="2">{this.props.id}</LayoutGrid.Cell>
						<LayoutGrid.Cell cols="2">Second cell</LayoutGrid.Cell>
						<LayoutGrid.Cell cols="2">Third cell</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>

			</div>
		);
	}
}
