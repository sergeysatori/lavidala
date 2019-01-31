import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {isMobile} from '../../utils/responsive';
import {canciones} from '../../database';
import emojis from 'emojis';

import style from './style';

export default class ObraPlastica extends Component {
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
          <LayoutGrid.Cell cols={12} class={{color:'#fff'}} style={{height: '100%'}} desktopCols="6" phoneCols="12" tabletCols="12">
            {this.state.data}
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class={style.temaPresentVisual} style={{
              // backgroundImage: `url(${this.state.data.mainImage})`,
              // minHeight: '90vh'
            }} desktopCols="6" phoneCols="12" tabletCols="12">
          <img src={this.state.data.mainImage} style={{height:'100%',width:'100%'}}/>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class={style.temaPresentVisual} style={{

            }} desktopCols="6" phoneCols="12" tabletCols="12">
            {emojis.unicode('Autor :heart: ')} {this.state.data.autorObraPlastica}
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}
