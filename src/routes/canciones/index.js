import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {route} from 'preact-router';
// import {isMobile} from '../../utils/responsive';

import style from './style';

export default class Canciones extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.isMobile = this.isMobile.bind(this);
  }

  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.isMobile.bind(this));
  }

  // isMobile() {
  //   this.setState({
  //     isMobile: window.innerWidth < 600
  //       ? true
  //       : false
  //   })
  // }

  render() {
    return (<div id="main-container" class={`${style.home} page`}>

      <LayoutGrid>
        <LayoutGrid.Inner>
          {/*

          Gracias a la Vida
          */}
          <LayoutGrid.Cell onClick={()=> route('/cancion/estrellita')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Estrellita</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/valsecito-con-mates-y-sol')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Valsecito con mates y sol</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/vida-la-del-perdon')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Vida-la del perdón</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/zambita-de-madre')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Zambita de Madre</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/negrita-martina')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Negrita Martina</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/vals-de-abril')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Vals de Abril</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/vidalita')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Vidalita</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/baguala-del-desierto')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Baguala del desierto</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/malambo-pal-diferente')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Malambo pal diferente</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/rio-de-los-pajaros')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Río de los Pájaros</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/guri-pescador')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Guri Pescador</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/milonga-del-mate')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Milonga del mate</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/cancion/gracias-a-la-vida')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Gracias a la vida</LayoutGrid.Cell>


        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}

const dataBase = {
  delperdon: {
    mainImage: '/assets/images/la-vida-la-del-perdon.jpg',
    title: 'Vida-la del perdon',
    description: 'Descripcion de La del perdon'
  },
  graciasALaVida: {
    mainImage: '/assets/images/gracias_a_la_vida_vparra_oscar_laguarda1366X1020_72.jpg',
    title: 'Gracias a la vida',
    description: 'Gracias a la vida de Violeta Parra.'
  }
}
