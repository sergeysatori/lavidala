import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import {route} from 'preact-router';
import Icon from 'preact-material-components/Icon';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this)
    this.getImageSize = this.getImageSize.bind(this)
    this.state = {
      imageSize: this.getImageSize(window.innerWidth, 1280, window.innerHeight, 960)
    }
  }
  getImageSize(winWidth, imgWidth, winHeight, imgHeight) {
    let deviceFactor = .7;
    if (winHeight > winWidth) {
      deviceFactor = 1
    }
    winWidth = winWidth * deviceFactor
    winHeight = winHeight * deviceFactor
    let ratio = Math.min(winWidth / imgWidth, winHeight / imgHeight);
    return {
      height: imgHeight * ratio,
      width: imgWidth * ratio
    }
  }
  componentWillMount() {
    this.handleResize();
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize() {
    this.setState({
      imageSize: this.getImageSize(document.body.clientWidth, 1280, window.innerHeight, 960)
    })
  }

  render() {
    return (<div style={{
        backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
        width: '100%',
        height: '150%',
        overflow: 'hidden'
      }}>
      <div class={`${style.home} page`}>
        <Card style={{color:'hsl(230, 90%, 58%)', width: `${this.state.imageSize.width * .9}px`, margin: 'auto'}}>
          <h1>Sitio en construcción</h1>
          <Icon>event_busy</Icon>
          <br/>
        </Card>
      </div>
      <div style={{
          width: `${this.state.imageSize.width}px`,
          height: `80%`,
          maxWidth: '90vh',
          backgroundImage: 'url(/assets/images/crisalidas.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundColor: '#b09f73',
          margin: '0 auto auto auto',
          position: 'relative',
          fontFamily: 'Sign Painter',
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }}>
        <a href="/canciones" onClick={()=> route('/canciones')} title="Canciones" style="position: absolute; left: 3.5%; top: 30%; width: 14.06%; height: max-content; z-index: 2; text-decoration: none; color: #fff;">Canciones</a>
        <a href="crisalida2" title="Obras plásticas" style="position: absolute; left: 19%; top: 30%; width: 14.06%; height: max-content; z-index: 2; text-decoration: none; color: #fff;">Obras plásticas</a>
        <a href="crisalida3" title="Fotos y vídeos" style="position: absolute; left: 38%; top: 30%; width: 14.06%; height: max-content; z-index: 2; text-decoration: none; color: #fff;">Fotos y vídeos</a>
        <a href="crisalida4" title="Material TEA" style="position: absolute; left: 55%; top: 30%; width: 14.06%; height: max-content; z-index: 2; text-decoration: none; color: #fff;">Material TEA</a>
        <a href="crisalida5" title="Ficha técnica" style="position: absolute; left: 75%; top: 30%; width: 14.06%; height: max-content; z-index: 2; text-decoration: none; color: #fff;">Ficha técnica</a>
      </div>

    </div>);
  }
}
