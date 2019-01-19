import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {route} from 'preact-router';

import style from './style';

export default class Canciones extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
    this.setState({
      isMobile: window.innerWidth < 600
        ? true
        : false
    })
  }

  render() {
    return (<div class={`${style.home} page`}>

      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell onClick={()=> route('/cancion/del-perdon')}  class={style.temaPresentVisual} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,
              fontSize: '3rem',
              cursor: 'pointer'
            }} cols="12">La del perdón</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/gracias-a-la-vida')} class={style.temaPresentVisual} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,
              fontSize: '3rem',
              cursor: 'pointer'
            }} cols="12">Gracias a la vida</LayoutGrid.Cell>

        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}

const dataBase = {
  delperdon: {
    mainImage: '/assets/images/la-vida-la-del-perdon.jpg',
    title: 'La del perdon',
    description: 'Descricion de La del perdon'
  },
  graciasALaVida: {
    mainImage: '/assets/images/gracias_a_la_vida_vparra_oscar_laguarda1366X1020_72.jpg',
    title: 'La del perdon',
    description: 'Descricion de La del perdon'
  }
}
