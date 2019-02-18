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
        <h1>Aún en construcción!</h1>

        <div>Estamos preparando los créditos y agradecimientos &#x1F913;
        </div>
        <p>Volvé pronto!!</p>

        <p></p>
      </Card>
    </div>);
  }
}
