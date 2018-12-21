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
      imageSize: this.getImageSize(window.innerWidth, 1280, window.innerHeight, 960),
      isMobile: isMobile()
    }
  }
  getImageSize(winWidth, imgWidth, winHeight, imgHeight) {
    let deviceFactor = 1;
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
      imageSize: this.getImageSize(document.body.clientWidth, 1280, window.innerHeight, 2000),
      isMobile: isMobile()
    })
  }

  // <div class={`${style.home} page`}>
  // </div>
  render() {
    return (<div style={{

        // backgroundColor: 'rgb(176, 159, 115)',
        // backgroundImage: 'url(/assets/images/la-vida-la-bg-intro.JPG)',

        width: '100%',
        height: '150%',
        overflow: 'hidden'
      }}>

      <div name='crisalidas' style={{
        width: `${this.state.imageSize.width}px`,
        height: `${this.state.imageSize.height}px`,
        marginTop: `${this.state.isMobile ? '16vh' : '0vh'}`,
        backgroundImage: 'url(/assets/images/crisalidas.png)',
        // backgroundSize: 'cover',
        backgroundSize: `${this.state.imageSize.width}px ${this.state.imageSize.height}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        margin: `2rem auto auto`
      }}>

        <div style={{
            width: `${this.state.imageSize.width}px`,
            // width: '100vw',
            height: `${this.state.imageSize.height}px`,
            // maxWidth: '90vh',
            // backgroundImage: 'url(/assets/images/crisalidas.png)',
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'top center',
            // backgroundColor: '#b09f73',
            position: 'relative',
            fontFamily: 'Sign Painter',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '1.5rem',
            textTransform: 'uppercase'
          }}>
          <div href="/canciones" onClick={()=> route('/canciones')} title="Canciones" class={`${style.portadaLink}`}
            style={{
              left: '5%',
              top: `${this.state.isMobile ? '0%' : '16%'}`,
              width: '14.06%',
              height: `${this.state.isMobile ? '100%' : '122vh'}`
            }}
            ></div>
          <div href="crisalida2" title="Obras plásticas" class={`${style.portadaLink}`}
            style={{
              left: '24%',
              top: `${this.state.isMobile ? '0%' : '16%'}`,
              width: '14.06%',
              height: `${this.state.isMobile ? '100%' : '122vh'}`
            }} ></div>
          <div href="crisalida3" title="Fotos y vídeos" class={`${style.portadaLink}`}
            style={{
              left: '42%',
              top: `${this.state.isMobile ? '0%' : '16%'}`,
              width: '14.06%',
              height: `${this.state.isMobile ? '100%' : '122vh'}`
            }} ></div>
          <div href="crisalida4" title="Material TEA" class={`${style.portadaLink}`}
            style={{
              left: '60%',
              top: `${this.state.isMobile ? '0%' : '16%'}`,
              width: '14.06%',
              height: `${this.state.isMobile ? '100%' : '122vh'}`
            }}  ></div>
          <div href="crisalida5" title="Ficha técnica" class={`${style.portadaLink}`}
            style={{
              left: '80%',
              top: `${this.state.isMobile ? '0%' : '16%'}`,
              width: '14.06%',
              height: `${this.state.isMobile ? '100%' : '122vh'}`
            }} ></div>
        </div>
      </div>
    </div>);
  }
}
function isMobile(){
  // debugger
  if (window.innerWidth < 630) {
    return true
  }
  return false
}
// <Card style={{color:'hsl(230, 90%, 58%)', width: `${window.innerWidth > 679 ? this.state.imageSize.width+'px' : '90vw'}`, margin: 'auto', maxWidth: '90vh'}}>
//   <h1>Sitio en construcción</h1>
//   <Icon>event_busy</Icon>
//   <br/>
// </Card>
