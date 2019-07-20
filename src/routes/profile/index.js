import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Profile extends Component {
  state = {
    time: Date.now(),
    count: 10
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({time: Date.now()});
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render({
    user
  }, {time, count}) {
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
          }}>

          <strong>Clarisa Prince</strong>: &nbsp;<small> Voz, pianos, rodhes, composición, arreglos, idea, dirección general.</small><br/><br/>
          <strong>Pablo Rey</strong>: &nbsp;<small> Producción musical, arreglos y guitarra española.</small><br/><br/>
          <strong>Hector Hugo Ríos</strong>: &nbsp;<small> Clarinete.</small><br/><br/>
          <strong>César Corrales</strong>: &nbsp;<small> Bajo eléctrico.</small><br/><br/>
          <strong>Marcel Plada</strong>: &nbsp;<small> Percusión y batería.</small><br/><br/>
          <strong>Melisa Zang</strong>: &nbsp;<small> Contrabajo y bajo.</small><br/><br/>
          <strong>Alvaro Pérez</strong>: &nbsp;<small> Programaciones, arreglos, guitarra eléctrica.</small><br/><br/>
          <strong>Emilia Fernández</strong>: &nbsp;<small> Celo.</small><br/><br/>
          <strong>Santiago Mesa</strong>: &nbsp;<small> Piano.</small><br/><br/>
          <strong>Betina Martínez</strong>: &nbsp;<small> Piano.</small><br/><br/>
          <strong>Tato Bolognini</strong>: &nbsp;<small> Batería.</small><br/><br/>
          <br/><br/>
          <small>
            Carolina Ramponi: Fotografía.<br/><br/>
          </small>
          <small>
            Mariana Rabinovich: Periodismo, diseño de postales.<br/><br/>
          </small>
          <small>
            Sergio Oxley: Diseño web.<br/><br/>
          </small>
          <small>
            Andrés Mora: Asesor diseño web.<br/><br/>
          </small>
          <small>
            Estudio de grabación: Iguana Records (Martín Pateta).<br/><br/>
          </small>
          <small>
            Mezcla y Masterización: MÁQUINA AZUL Estudio.<br/><br/>
          </small>
          <br/><br/>
        Producción: EXIT<br/><br/>
        Dpto Comercial: Victor Canaveris<br/><br/>

        </div>
      </div>
    </div>);
  }
}
