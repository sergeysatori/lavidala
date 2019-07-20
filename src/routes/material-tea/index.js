import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {isMobile} from '../../utils/responsive';
import {materialTEA} from '../../database';

import style from './style';

export default class MaterialTEA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.isMobile = this.isMobile.bind(this);
  }
  componentWillReceiveProps(nextProps) {}
  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.isMobile.bind(this));
  }

  render() {
    return (<div class={`page main-container ${style.profile}`}>

      <div style={{
          width: 'fit-content',
          margin: '9vh auto 6vh auto',
          // maxWidth: '600px',
          backgroundColor: 'hsla(356, 11%, 7%, 0.85)',
          color: 'hsl(24, 18%, 88%)',
          padding: '6vh 6vw'
        }}>

        <div style={{
            margin: 'auto',
            width: 'fit-content'
          }} dangerouslySetInnerHTML={{
            __html: materialTEA
          }}/>
    </div>
  </div>);
  }
}
