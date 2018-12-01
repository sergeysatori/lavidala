import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

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
      imageSize: this.getImageSize(window.innerWidth, 1280, window.innerHeight, 960)
    })
  }

  render() {
    return (<div style={{
        backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',
        width: '100%',
        height: '100%'
      }}>
      <div class={`${style.home} page`}>
        <h1>El sitio no está listo aún! :o
        </h1>
        <p>Estamos construyendo éste sitio para que puedas acceder a&nbsp;
          <i>
            <b>La Vida-la</b>
          </i>
          &nbsp;desde cualquier lugar.<br/>
          Gracias por venir, esperamos que vuelvas pronto!</p>
      </div>
      <div style={{
          width: `${this.state.imageSize.width}px`,
          height: `${this.state.imageSize.height}px`,
          maxWidth: '90vh',
          backgroundImage: 'url(/assets/images/crisalidas.jpeg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
          margin: '0 auto auto auto',
          position: 'relative'
        }}>
        <a href="crisalida1" title="crisalida1" style="position: absolute; left: 7.5%; top: 0; width: 14.06%; height: 100%; z-index: 2;"></a>
        <a href="crisalida2" title="crisalida2" style="position: absolute; left: 23.98%; top: 0; width: 14.06%; height: 100%; z-index: 2;"></a>
        <a href="crisalida3" title="crisalida3" style="position: absolute; left: 42.66%; top: 0; width: 14.06%; height: 100%; z-index: 2;"></a>
        <a href="crisalida4" title="crisalida4" style="position: absolute; left: 58.67%; top: 0; width: 14.06%; height: 100%; z-index: 2;"></a>
        <a href="crisalida5" title="crisalida5" style="position: absolute; left: 77.19%; top: 0; width: 14.06%; height: 100%; z-index: 2;"></a>
      </div>

    </div>);
  }
}
