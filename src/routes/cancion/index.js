import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {isMobile} from '../../utils/responsive';
import {canciones} from '../../database';

import style from './style';

export default class Cancion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      data: canciones[this.props.id.replace(/-/g, '')]
    };
    // this.isMobile = this.isMobile.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: canciones[nextProps.id.replace(/-/g, '')]
    })
  }
  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.isMobile.bind(this));
  }

  render() {
    return (<div class={`${style.home} page`}>

      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell class={style.temaPresentVisual} style={{
              backgroundImage: `url(${this.state.data.mainImage})`
            }} desktopCols="2" phoneCols="12" tabletCols="12">{this.props.id}</LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}
