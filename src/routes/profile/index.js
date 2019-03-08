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
    return (<div class={`${style.profile} page main-container`} style={{
        // backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
        width: '100%',
        height: '150%',
        overflow: 'hidden'
      }}>
      <Card style={{
          width: '90vw',
          margin: 'auto',
          maxWidth: '600px',
          backgroundColor: 'hsla(356, 11%, 7%, 0.85)',
          color: '#fff',
					padding: '1rem'
        }}>

<p style={{fontSize: 'larger'}}>
<strong>Clarisa PRINCE</strong>: voz, pianos, rodhes, composición, arreglos, idea, dirección general.<br/><br/>
<strong>Pablo REY</strong>: producción musical, arreglos y guitarra española<br/><br/>
<strong>Hector Hugo RÍOS</strong>: clarinete<br/><br/>
<strong>César CORRALES</strong>: bajo eléctrico<br/><br/>
<strong>Marcel PLADA</strong>: percusión y batería<br/><br/>
<strong>Melisa ZANG</strong>: contrabajo y bajo<br/><br/>
<strong>Alvaro PÉREZ</strong>: programaciones, arreglos, guitarra eléctrica<br/><br/>
<strong>Emilia FERNÁNDEZ</strong>: celo<br/><br/>
<strong>Santiago MESA</strong>: piano<br/><br/>
<strong>Betina MARTÍNEZ</strong>: piano<br/><br/>
<strong>Tato BOLOGNINI</strong>: batería<br/><br/>
<strong>Carolina Ramponi</strong>: fotografía<br/><br/>
<strong>Mariana Rabinovich</strong>: periodismo, diseño de postales<br/><br/>
<strong>Sergio Oxley</strong>: diseño web<br/><br/>
<strong>Andrés Mora</strong>: asesor diseño web<br/><br/>
<strong>Estudio de grabación</strong>: Iguana Records(Martín Pateta)<br/><br/>
<strong>Mezcla y Masterización</strong>: MÁQUINA AZUL Estudio<br/><br/>
<strong>Producción</strong>: EXIT<br/><br/>
<strong>Dpto COMERCIAL</strong>: Victor CANAVERIS<br/><br/>
        </p>
      </Card>
    </div>);
  }
}
