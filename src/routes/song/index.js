import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

import style from './style';

export default class Home extends Component {
	componentDidMount(){

	}
	render() {
		return (
			<div class={`${style.home} page`}>

				<LayoutGrid>
					<LayoutGrid.Inner>
						<LayoutGrid.Cell cols="6">{this.props.id}</LayoutGrid.Cell>
						<LayoutGrid.Cell cols="4">Second cell</LayoutGrid.Cell>
						<LayoutGrid.Cell cols="2">Third cell</LayoutGrid.Cell>
					</LayoutGrid.Inner>
				</LayoutGrid>

			</div>
		);
	}
}
