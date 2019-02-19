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
  componentWillReceiveProps(nextProps) {

  }
  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.isMobile.bind(this));
  }

  render() {
    return (<div  class={`${style.home} page main-container`}>

      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell class={style.temaPresentVisual} style={{height: '100%'}} desktopCols="12" phoneCols="12" tabletCols="12">
            <Card style={{
                width: '90vw',
                margin: 'auto',
                maxWidth: '600px',
                backgroundColor: 'hsla(356, 11%, 7%, 0.85)',
                color: '#fff',
                padding: '1rem'
              }}>
              <div style={{
                  backgroundColor: 'hsla(0, 1%, 16%, 0.9)',
                  padding: '1rem',
                  borderRadius: '1%',
                  border: 'solid hsl(0, 3%, 14%) 9px',
                  fontSize: '1.2rem',
                  color: 'hsla(0, 1%, 100%, 1)'
                }} dangerouslySetInnerHTML={{
                  __html: materialTEA
                }}/>

            </Card>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}
