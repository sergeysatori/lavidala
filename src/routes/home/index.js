import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import {route} from 'preact-router';
import Icon from 'preact-material-components/Icon';
import {getImageSize} from '../../utils/responsive';
import { Animated } from 'react-web-animation';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getKeyframes = this.getKeyframes.bind(this);
  }

  getKeyframes(keyframes) {
    return this.props.hadFirstLoad ? [] : keyframes
  }

  render() {
    return (<Animated.div  class="main-container" style={{
        width: '100%',
        height: '150%',
        overflow: 'hidden',
        backgroundImage: 'url(/assets/images/clarisa-bg.jpeg)',
      	backgroundRepeat: 'no-repeat',
      	backgroundColor: 'hsl(0, 0%, 2%)',
      	backgroundSize: '100%',
        backgroundPosition: '50% 50%',
      	backgroundAttachment: 'fixed',
      }}
      keyframes={this.getKeyframes([
        {  opacity: '0',     offset: 0 },
        {  opacity: '1',   offset: 1 }
        ])}
      timing={{
            duration: 2000,
            easing: 'ease-in',
            delay: 0,
            direction: 'normal',
            fill: 'forwards'
        }}>

      <Animated.div
      keyframes={this.getKeyframes([
            {  opacity: '0',     offset: 0 },
            {  opacity: '1',   offset: 1 }
        ])}
      timing={{
            duration: 1800,
            easing: 'ease-in-out',
            delay: 2200,
            direction: 'normal',
            fill: 'forwards'
        }}
        onFinish={this.props.setFirstLoad}
      name='crisalidas' class={style.crisalidas}
      style={{
          backgroundImage: 'url(/assets/images/crisalidas.gif)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          margin: `2rem auto auto`,
          opacity: this.props.hadFirstLoad ? 1 : 0
        }}>

        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            fontFamily: 'Sign Painter',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '1.5rem',
            textTransform: 'uppercase'
          }}>
          <div class={style.verticalLink} href="/canciones" onClick={() => route('/canciones')} title="Canciones"
            style={{
              left: '5%',
              width: '14.06%',
            }}></div>
          <div onClick={() => route('/obras-plasticas')} href="/obras-plasticas" title="Obras plásticas" class={style.verticalLink} style={{
              left: '24%',
              width: '14.06%',
            }}></div>
          <div onClick={() => route('/fotos-y-videos')} href="/fotos-y-videos" title="Fotos y vídeos" class={style.verticalLink} style={{
              left: '42%',
              width: '14.06%',
            }}></div>
          <div onClick={() => route('/material-tea')} href="/material-tea" title="Material TEA" class={style.verticalLink} style={{
              left: '60%',
              width: '14.06%',
            }}></div>
          <div onClick={() => route('/ficha-tecnica')} href="/ficha-tecnica" title="Ficha técnica" class={style.verticalLink} style={{
              left: '80%',
              width: '14.06%',
            }}></div>
        </div>
      </Animated.div>
    </Animated.div>);
  }
}
