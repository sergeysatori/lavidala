import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import {route} from 'preact-router';
// import {isMobile} from '../../utils/responsive';
import {canciones} from '../../database';

import style from './style';

export default class ObrasPlasticas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: canciones[this.props.path.replace(/-/g, '')]
    };
    // this.isMobile = this.isMobile.bind(this);
  }

  componentDidMount() {
    // this.isMobile();
    // window.addEventListener("resize", this.isMobile.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: canciones[nextProps.id.replace(/-/g, '')]
    })
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
    return (<div  class={`${style.home} page main-container`}>

      <LayoutGrid>
        <LayoutGrid.Inner>
          {/*

          Gracias a la Vida
          */}
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/estrellita')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Estrellita</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/valsecito-con-mates-y-sol')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Valsecito con mates y sol</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/vida-la-del-perdon')}  class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.delperdon.mainImage})`,

            }} cols="12">Vida-la del perdón</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/zambita-de-madre')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Zambita de Madre</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/negrita-martina')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Negrita Martina</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/vals-de-abril')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Vals de Abril</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/vidalita')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Vidalita</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/baguala-del-desierto')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Baguala del desierto</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/malambo-pal-diferente')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Malambo pal diferente</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/rio-de-los-pajaros')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Río de los Pájaros</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/guri-pescador')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Guri Pescador</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/milonga-del-mate')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Milonga del mate</LayoutGrid.Cell>
          <LayoutGrid.Cell onClick={()=> route('/obra-plastica/gracias-a-la-vida')} class={style.listaCancionesCell} style={{
              // backgroundImage: `url(${dataBase.graciasALaVida.mainImage})`,

            }} cols="12">Gracias a la vida</LayoutGrid.Cell>


        </LayoutGrid.Inner>
      </LayoutGrid>

    </div>);
  }
}
